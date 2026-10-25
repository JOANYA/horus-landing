import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPARISON } from '../core/content';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'hrs-comparison',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Transición fluida negro → marfil -->
    <section id="solucion" class="py-24 bg-[#0A0A0A] text-[#F5F2EB] relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs font-semibold tracking-widest text-[#E3DDD1] uppercase bg-[#1A1A1A] px-3.5 py-1.5 rounded-full border border-[#E3DDD1]/10">
        Tecnología de Vanguardia
      </span>
      <h2 class="text-3xl sm:text-5xl font-extrabold mt-4 mb-6 tracking-tight">
        Transformamos cámaras pasivas en <span class="text-[#E3DDD1] underline decoration-[#E3DDD1]/30">centinelas activos</span>
      </h2>
      <p class="text-[#E3DDD1]/80 text-lg leading-relaxed">
        Hoy la mayoría de las cámaras solo graban y el video se revisa cuando el delito ya ocurrió. <strong class="text-[#F5F2EB]">HORUS cambia las reglas del juego</strong> analizando la imagen en tiempo real para disuadir la extorsión y el sicariato antes de que actúen.
      </p>
    </div>

    <!-- Grid de Presentación (Texto + Multimedia) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Lado Izquierdo: Descripción llamativa pero formal -->
      <div class="space-y-6">
        <div class="bg-[#141414] border border-[#E3DDD1]/10 p-6 rounded-2xl shadow-xl">
          <div class="flex items-start space-x-4">
            <div class="p-3 bg-[#E3DDD1]/10 rounded-xl text-[#E3DDD1] text-xl font-bold">01</div>
            <div>
              <h3 class="text-xl font-bold text-[#F5F2EB] mb-2">Detección Temprana de Armas y Fuego</h3>
              <p class="text-[#E3DDD1]/70 text-sm leading-relaxed">
                Nuestra inteligencia artificial identifica de forma inmediata la presencia de armas de fuego, objetos punzocortantes y conato de fuego en cualquier comercio o cuadra vigilada.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-[#141414] border border-[#E3DDD1]/10 p-6 rounded-2xl shadow-xl">
          <div class="flex items-start space-x-4">
            <div class="p-3 bg-[#E3DDD1]/10 rounded-xl text-[#E3DDD1] text-xl font-bold">02</div>
            <div>
              <h3 class="text-xl font-bold text-[#F5F2EB] mb-2">Reconocimiento de Conductas de Riesgo</h3>
              <p class="text-[#E3DDD1]/70 text-sm leading-relaxed">
                El sistema detecta patrones sospechosos previos al ataque: sujetos apuntando, desenfundando, actitudes de acecho o motocicletas con varios ocupantes merodeando el local.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-[#141414] border border-[#E3DDD1]/10 p-6 rounded-2xl shadow-xl">
          <div class="flex items-start space-x-4">
            <div class="p-3 bg-[#E3DDD1]/10 rounded-xl text-[#E3DDD1] text-xl font-bold">03</div>
            <div>
              <h3 class="text-xl font-bold text-[#F5F2EB] mb-2">Puntaje de Riesgo Inteligente (0 a 100)</h3>
              <p class="text-[#E3DDD1]/70 text-sm leading-relaxed">
                Cada segundo se calcula un puntaje métrico que evalúa el nivel de amenaza y detalla detalladamente las razones del incremento del riesgo en pantalla.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lado Derecho: Contenedor Multimedia con la nueva imagen/video -->
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-[#E3DDD1]/20 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <div class="relative rounded-2xl overflow-hidden border border-[#E3DDD1]/20 bg-black shadow-2xl">
          <!-- Imagen de referencia proporcionada -->
          <img 
            src="assets/demo/WhatsApp Image 2026-10-25 at 12.45.39 AM.jpeg" 
            alt="Interfaz de monitoreo Horus" 
            class="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
          >
          <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
            <span class="text-xs font-mono text-red-400 font-bold tracking-wider">ESTADO: MONITOREO ACTIVO</span>
            <p class="text-sm text-[#F5F2EB] font-medium mt-1">Panel analítico operando sobre cámaras de seguridad convencionales.</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
  `,
})
export class ComparisonComponent {
  readonly data = COMPARISON;
}
