import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT, NAV_LINKS } from '../core/content';

@Component({
  selector: 'hrs-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-ivory-200/10 bg-ink">
      <div class="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <a href="#inicio" class="flex items-center gap-2.5">
            <img src="assets/logo-sol.png" alt="" class="h-9 w-auto" />
            <span class="text-lg font-extrabold tracking-[.28em]">HORUS</span>
          </a>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-ivory-400">
            Sistema de alerta temprana contra el crimen armado, basado en inteligencia artificial.
          </p>
        </div>

        <div>
          <h4 class="text-sm font-semibold">Producto</h4>
          <ul class="mt-4 space-y-2.5 text-sm text-ivory-400">
            @for (l of links; track l.href) {
              <li><a [href]="l.href" class="hover:text-ivory">{{ l.label }}</a></li>
            }
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold">Contacto comercial</h4>
          <ul class="mt-4 space-y-2.5 text-sm text-ivory-400">
            <li><a [href]="'mailto:' + contact.email" class="hover:text-ivory">{{ contact.email }}</a></li>
            <li>{{ contact.whatsapp }}</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-ivory-200/10">
        <div class="container-x flex flex-col gap-3 py-6 text-xs text-ivory-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {{ year }} HORUS. Todos los derechos reservados.</p>
          <ul class="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="#" class="hover:text-ivory">Política de privacidad</a></li>
            <li><a href="#" class="hover:text-ivory">Términos y condiciones</a></li>
            <li><a href="#" class="hover:text-ivory">Protección de datos personales</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly links = NAV_LINKS;
  readonly contact = CONTACT;
}
