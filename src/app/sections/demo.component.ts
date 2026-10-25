import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { DEMO_VIDEOS, DemoVideo } from '../core/content';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'hrs-demo',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<section id="demo" class="py-20 bg-[#0A0A0A] text-[#F5F2EB] relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Título de la sección -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-sm font-semibold tracking-wider text-[#E3DDD1] uppercase bg-[#222222] px-3 py-1 rounded-full border border-[#E3DDD1]/2://">
        Demostración en Vivo
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold mt-4 mb-4 tracking-tight">
        Así opera <span class="text-[#E3DDD1]">HORUS</span> en tiempo real
      </h2>
      <p class="text-[#E3DDD1]/80 text-lg">
        Observa cómo el sistema analiza las cámaras existentes, detecta amenazas con inteligencia artificial y emite alertas en segundos.
      </p>
    </div>

    <!-- Contenedor Principal del Video y Panel de Datos -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      
      <!-- Reproductor de Video (Ocupa 2 columnas) -->
      <div class="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-2xl border border-[#E3DDD1]/2:// bg-black group">
        <video 
          class="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500"
          controls
          autoplay
          muted
          loop
          playsinline
        >
          <source src="assets/demo/paginahorus.mp4" type="video/mp4">
          Tu navegador no soporta la reproducción de video.
        </video>
        
        <!-- Etiqueta flotante simulando la IA -->
        <div class="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-red-500/4:// px-3 py-1.5 rounded-lg flex items-center space-x-2">
          <span class="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <span class="text-xs font-mono text-red-400 font-bold">IA ACTIVA: ESCANEANDO</span>
        </div>
      </div>

      <!-- Panel Lateral Informativo (Ocupa 1 columna) -->
      <div class="bg-[#141414] border border-[#E3DDD1]/1:// rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-6">
        <div>
          <h3 class="text-xl font-bold text-[#F5F2EB] mb-2">Desglose del Análisis</h3>
          <p class="text-sm text-[#E3DDD1]/70 mb-6">
            El motor de procesamiento evalúa cada fotograma en milisegundos buscando patrones críticos de amenaza.
          </p>

          <!-- Métricas simuladas -->
          <div class="space-y-4">
            <div class="bg-[#1E1E1E] p-4 rounded-xl border border-[#E3DDD1]/10">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-semibold text-[#E3DDD1]">Puntaje de Riesgo</span>
                <span class="text-sm font-bold text-red-400">92 / 100</span>
              </div>
              <div class="w-full bg-black rounded-full h-2">
                <div class="bg-red-500 h-2 rounded-full" style="width: 92%"></div>
              </div>
            </div>

            <div class="flex items-center space-x-3 bg-[#1E1E1E] p-3 rounded-xl border border-[#E3DDD1]/10">
              <div class="p-2 bg-red-500/10 text-red-400 rounded-lg">
                ⚠️
              </div>
              <div>
                <p class="text-xs text-[#E3DDD1]/60">Amenaza Detectada</p>
                <p class="text-sm font-semibold text-[#F5F2EB]">Arma de fuego visible + Acecho</p>
              </div>
            </div>

            <div class="flex items-center space-x-3 bg-[#1E1E1E] p-3 rounded-xl border border-[#E3DDD1]/10">
              <div class="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                📲
              </div>
              <div>
                <p class="text-xs text-[#E3DDD1]/60">Respuesta Automática</p>
                <p class="text-sm font-semibold text-[#F5F2EB]">Alerta enviada a Telegram y SMS</p>
              </div>
            </div>
          </div>
        </div>

        <button class="w-full bg-[#F5F2EB] text-[#0A0A0A] font-bold py-3 rounded-xl hover:bg-[#E3DDD1] transition-colors shadow-lg">
          Solicitar Prueba en tu Negocio
        </button>
      </div>

    </div>

  </div>
</section>
  `,
})
export class DemoComponent {
  readonly videos = DEMO_VIDEOS;
  readonly currentId = signal(DEMO_VIDEOS[0].id);
  readonly available = signal(false);
  readonly current = computed(() => this.videos.find((v) => v.id === this.currentId()) ?? this.videos[0]);

  select(v: DemoVideo): void {
    this.available.set(false);
    this.currentId.set(v.id);
  }
}
