import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RISK_BREAKDOWN } from '../core/content';
import { RiskGaugeComponent } from '../shared/risk-gauge.component';

@Component({
  selector: 'hrs-hero',
  standalone: true,
  imports: [RiskGaugeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="inicio" class="relative isolate overflow-hidden bg-ink pt-28 sm:pt-36">
      <!-- Fondo: gradientes suaves rojo profundo + marfil sobre negro -->
      <div class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-blood-700/40 blur-[140px]"></div>
        <div class="absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-ivory-200/10 blur-[130px]"></div>
        <img
          src="assets/logo-sol.png" alt=""
          class="absolute -right-24 -top-10 w-[30rem] max-w-none select-none opacity-[.10] animate-spinSlow sm:w-[40rem]"
        />
        <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink"></div>
      </div>

      <div class="container-x grid items-center gap-14 pb-24 lg:grid-cols-[1.15fr_.85fr] lg:pb-32">
        <div>
          <p class="eyebrow animate-rise">Alerta temprana contra el crimen armado</p>
          <h1 class="mt-5 animate-rise text-4xl font-extrabold leading-[1.05] tracking-tight [animation-delay:100ms] sm:text-6xl">
            Frena la extorsión y el sicariato
            <span class="gradient-text">antes de que ocurran.</span>
          </h1>
          <p class="mt-6 max-w-xl animate-rise text-base leading-relaxed text-ivory-300 [animation-delay:200ms] sm:text-lg">
            HORUS convierte las cámaras que tu negocio o tu barrio ya tienen en centinelas inteligentes.
            Dejan de solo grabar: detectan armas y conductas de riesgo en tiempo real y te avisan en segundos.
          </p>
          <div class="mt-9 flex animate-rise flex-col gap-3 [animation-delay:300ms] sm:flex-row">
            <a href="#contacto" class="btn-primary">Proteger mi negocio</a>
            <a href="#demo" class="btn-ghost">
              <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              Ver cómo funciona
            </a>
          </div>
          <p class="mt-6 animate-rise text-xs text-ivory-400 [animation-delay:400ms]">Funciona con tus cámaras actuales · Sin obras ni cableado nuevo</p>
        </div>

        <!-- Tarjeta de alerta simulada -->
        <div class="relative animate-rise [animation-delay:250ms]">
          <div class="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blood-600/30 to-transparent blur-2xl"></div>
          <div class="relative overflow-hidden rounded-[2rem] border border-ivory-200/10 bg-gradient-to-b from-ink-600 to-ink-800 p-6 shadow-soft">
            <div class="flex items-center justify-between text-xs">
              <span class="flex items-center gap-2 font-semibold uppercase tracking-widest text-ivory-300">
                <span class="relative flex h-2.5 w-2.5">
                  <span class="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-blood-400"></span>
                  <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-blood-400"></span>
                </span>
                Cámara 03 · Puerta principal
              </span>
              <span class="rounded-full bg-blood/20 px-2.5 py-1 font-semibold text-blood-400">Riesgo alto</span>
            </div>

            <div class="mt-5 flex items-center gap-6">
              <hrs-risk-gauge [target]="87" [size]="132" />
              <ul class="flex-1 space-y-2.5 text-sm">
                @for (r of breakdown; track r.label) {
                  <li class="flex items-center justify-between gap-3">
                    <span class="text-ivory-300">{{ r.label }}</span>
                    <span class="font-semibold text-ivory">+{{ r.points }}</span>
                  </li>
                }
              </ul>
            </div>

            <div class="mt-6 rounded-2xl border border-ivory-200/10 bg-ink/60 p-4 text-sm">
              <p class="font-semibold text-ivory">Alerta enviada por Telegram y SMS</p>
              <p class="mt-1 text-ivory-400">Hace 4 s · Ubicación de la cámara y evidencia cifrada adjuntas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  readonly breakdown = RISK_BREAKDOWN;
}
