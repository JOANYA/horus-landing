import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { NAV_LINKS } from '../core/content';

@Component({
  selector: 'hrs-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      [class]="scrolled() || open() ? 'border-b border-ivory-200/10 bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'"
    >
      <nav class="container-x flex h-16 items-center justify-between" aria-label="Principal">
        <a href="#inicio" class="flex items-center gap-2.5" aria-label="HORUS, inicio">
          <img src="assets/logo-ojo.png" alt="" class="h-7 w-auto" />
          <span class="text-lg font-extrabold tracking-[.28em] text-ivory">HORUS</span>
        </a>

        <ul class="hidden items-center gap-8 md:flex">
          @for (link of links; track link.href) {
            <li>
              <a [href]="link.href" class="text-sm font-medium text-ivory-300 transition hover:text-ivory">{{ link.label }}</a>
            </li>
          }
        </ul>

        <a href="#contacto" class="btn-primary hidden md:inline-flex">Solicitar demostración</a>

        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full border border-ivory-200/20 md:hidden"
          [attr.aria-expanded]="open()"
          aria-label="Abrir menú"
          (click)="open.set(!open())"
        >
          <span class="relative block h-3 w-5">
            <span class="absolute left-0 h-0.5 w-5 bg-ivory transition-all" [class]="open() ? 'top-1 rotate-45' : 'top-0'"></span>
            <span class="absolute left-0 top-2.5 h-0.5 w-5 bg-ivory transition-all" [class]="open() ? 'top-1 -rotate-45' : 'top-2.5'"></span>
          </span>
        </button>
      </nav>

      @if (open()) {
        <div class="container-x animate-rise pb-6 md:hidden">
          <ul class="flex flex-col gap-1">
            @for (link of links; track link.href) {
              <li>
                <a [href]="link.href" (click)="open.set(false)" class="block rounded-xl px-3 py-3 text-base font-medium text-ivory-200 hover:bg-ivory/5">{{ link.label }}</a>
              </li>
            }
          </ul>
          <a href="#contacto" (click)="open.set(false)" class="btn-primary mt-4 w-full">Proteger mi negocio</a>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  readonly links = NAV_LINKS;
  readonly scrolled = signal(false);
  readonly open = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }
}
