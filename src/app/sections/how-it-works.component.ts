import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RISK_BREAKDOWN, STEPS, USE_CASES } from '../core/content';
import { RevealDirective } from '../shared/reveal.directive';
import { RiskGaugeComponent } from '../shared/risk-gauge.component';

@Component({
  selector: 'hrs-how-it-works',
  standalone: true,
  imports: [CommonModule, RevealDirective, RiskGaugeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="h-32 bg-gradient-to-b from-ivory-200 to-ink sm:h-48" aria-hidden="true"></div>

    <!-- SECCIÓN: CÓMO FUNCIONA -->
    <section id="como-funciona" class="py-24 bg-[#0F0F0F] text-[#F5F2EB] border-t border-b border-[#E3DDD1]/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs font-semibold tracking-widest text-[#E3DDD1] uppercase bg-[#1A1A1A] px-3.5 py-1.5 rounded-full border border-[#E3DDD1]/10">
            Proceso Automatizado
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold mt-4 mb-4 tracking-tight">
            ¿Cómo opera HORUS ante una emergencia?
          </h2>
          <p class="text-[#E3DDD1]/70 text-base">
            Una respuesta milimétrica diseñada para actuar en el momento exacto en que se gesta el delito.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          <!-- Paso 1 -->
          <div class="bg-[#141414] p-8 rounded-2xl border border-[#E3DDD1]/10 relative group hover:border-[#E3DDD1]/40 transition-colors">
            <div class="text-4xl font-extrabold text-[#E3DDD1]/20 mb-4 font-mono">01</div>
            <h3 class="text-xl font-bold mb-3 text-[#F5F2EB]">Análisis en Tiempo Real</h3>
            <p class="text-[#E3DDD1]/70 text-sm leading-relaxed">
              El software se conecta al circuito cerrado (CCTV) existente sin requerir equipos costosos nuevos, procesando cada fotograma mediante redes neuronales avanzadas.
            </p>
          </div>

          <!-- Paso 2 -->
          <div class="bg-[#141414] p-8 rounded-2xl border border-[#E3DDD1]/10 relative group hover:border-[#E3DDD1]/40 transition-colors">
            <div class="text-4xl font-extrabold text-[#E3DDD1]/20 mb-4 font-mono">02</div>
            <h3 class="text-xl font-bold mb-3 text-[#F5F2EB]">Cálculo y Validación</h3>
            <p class="text-[#E3DDD1]/70 text-sm leading-relaxed">
              Se pondera la conducta de riesgo de 0 a 100. Si se detectan factores críticos como armas o acecho consumado, el sistema descarta falsas alarmas de inmediato.
            </p>
          </div>

          <!-- Paso 3 -->
          <div class="bg-[#141414] p-8 rounded-2xl border border-[#E3DDD1]/10 relative group hover:border-[#E3DDD1]/40 transition-colors">
            <div class="text-4xl font-extrabold text-[#E3DDD1]/20 mb-4 font-mono">03</div>
            <h3 class="text-xl font-bold mb-3 text-[#F5F2EB]">Alerta y Evidencia (SMS/Telegram)</h3>
            <p class="text-[#E3DDD1]/70 text-sm leading-relaxed">
              En segundos, activa sirenas locales y despacha alertas vía Telegram y SMS con la ubicación exacta de la cámara, respaldando evidencia digital sólida para la denuncia policial.
            </p>
          </div>

        </div>

        <!-- SECCIÓN: CASOS DE USO Y VIDEOS DE EJECUCIÓN -->
        <div id="casos-uso" class="pt-12 border-t border-[#E3DDD1]/10">
          
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-xs font-semibold tracking-widest text-[#E3DDD1] uppercase bg-[#1A1A1A] px-3.5 py-1.5 rounded-full border border-[#E3DDD1]/10">
              Despliegue Real
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold mt-4 mb-4 tracking-tight">
              Casos de uso adaptados al contexto actual
            </h2>
            <p class="text-[#E3DDD1]/70 text-base">
              HORUS protege de forma directa los sectores más vulnerables frente al incremento de la extorsión y el sicariato.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- Reproductor Multimedia (Video de WhatsApp) -->
            <div class="relative rounded-2xl overflow-hidden border border-[#E3DDD1]/20 bg-black shadow-2xl group">
              <video 
                class="w-full h-auto object-cover rounded-2xl"
                controls
                autoplay
                muted
                loop
                playsinline
              >
                <source src="assets/demo/WhatsApp Video 2026-10-25 at 12.44.03 AM (2).mp4" type="video/mp4">
                Tu navegador no soporta la reproducción de video.
              </video>
              <div class="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#E3DDD1]/20 px-3 py-1 rounded-lg">
                <span class="text-xs font-mono text-[#E3DDD1] font-bold">EJECUCIÓN EN CAMPO</span>
              </div>
            </div>

            <!-- Detalle de los Casos de Uso -->
            <div class="space-y-6">
              
              <!-- Caso 1: Negocios -->
              <div class="bg-[#141414] border border-[#E3DDD1]/10 p-6 rounded-2xl shadow-xl hover:border-[#E3DDD1]/30 transition-colors">
                <div class="flex items-start space-x-4">
                  <div class="p-3 bg-[#E3DDD1]/10 rounded-xl text-xl">🏪</div>
                  <div>
                    <h3 class="text-xl font-bold text-[#F5F2EB] mb-2">Comercios y Bodegas</h3>
                    <p class="text-[#E3DDD1]/70 text-sm leading-relaxed">
                      Protección activa para bodegas, farmacias y negocios locales frente a cobros de cupos y asaltos armados. El sistema identifica extorsionadores y actitudes sospechosas al instante.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Caso 2: Barrios / Juntas Vecinales -->
              <div class="bg-[#141414] border border-[#E3DDD1]/10 p-6 rounded-2xl shadow-xl hover:border-[#E3DDD1]/30 transition-colors">
                <div class="flex items-start space-x-4">
                  <div class="p-3 bg-[#E3DDD1]/10 rounded-xl text-xl">🏘️</div>
                  <div>
                    <h3 class="text-xl font-bold text-[#F5F2EB] mb-2">Barrios y Juntas Vecinales</h3>
                    <p class="text-[#E3DDD1]/70 text-sm leading-relaxed">
                      Monitoreo de esquinas críticas y pasajes mediante cámaras vecinales interconectadas para detectar motocicletas con varios ocupantes y prevenir delitos en la zona.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `,
})
export class HowItWorksComponent {
  readonly steps = STEPS;
  readonly breakdown = RISK_BREAKDOWN;
  readonly useCases = USE_CASES;
}