import { ChangeDetectionStrategy, Component, DestroyRef, Input, OnInit, computed, inject, signal } from '@angular/core';

/** Medidor circular de riesgo 0–100 que se anima hasta su valor. */
@Component({
  selector: 'hrs-risk-gauge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative grid place-items-center" [style.width.px]="size" [style.height.px]="size">
      <svg viewBox="0 0 120 120" class="-rotate-90" [attr.width]="size" [attr.height]="size" aria-hidden="true">
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#E3DDD1" />
            <stop offset="1" stop-color="#D1313D" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(227,221,209,.12)" stroke-width="8" />
        <circle
          cx="60" cy="60" r="54" fill="none" stroke="url(#gaugeGrad)" stroke-width="8" stroke-linecap="round"
          [attr.stroke-dasharray]="circumference" [attr.stroke-dashoffset]="offset()"
        />
      </svg>
      <div class="absolute text-center" role="img" [attr.aria-label]="'Puntaje de riesgo ' + target + ' de 100'">
        <div class="font-extrabold leading-none text-ivory" [style.font-size.px]="size * 0.3">{{ value() }}</div>
        <div class="mt-1 text-[10px] uppercase tracking-[.2em] text-ivory-400">de 100</div>
      </div>
    </div>
  `,
})
export class RiskGaugeComponent implements OnInit {
  @Input() target = 87;
  @Input() size = 140;

  readonly circumference = 2 * Math.PI * 54;
  readonly value = signal(0);
  readonly offset = computed(() => this.circumference * (1 - this.value() / 100));

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      this.value.set(Math.round(this.target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    this.destroyRef.onDestroy(() => cancelAnimationFrame(frame));
  }
}
