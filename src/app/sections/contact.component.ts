import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT } from '../core/content';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'hrs-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contacto" class="relative isolate overflow-hidden bg-gradient-to-b from-ink to-blood-900 py-24 sm:py-32">
      <img src="assets/logo-ojo.png" alt="" class="pointer-events-none absolute -left-16 top-10 -z-10 w-[26rem] opacity-[.07]" />
      <div class="container-x grid items-center gap-12 lg:grid-cols-2">
        <div hrsReveal>
          <p class="eyebrow">Solicita una demostración</p>
          <h2 class="h2 mt-4">Protege tu negocio con las cámaras que ya tienes</h2>
          <p class="mt-5 max-w-md text-ivory-300">Cuéntanos cuántas cámaras tienes y te mostramos HORUS funcionando sobre tu propio escenario.</p>
        </div>

        <form hrsReveal [revealDelay]="120" [formGroup]="form" (ngSubmit)="submit()" class="rounded-3xl bg-ivory p-6 text-ink shadow-soft sm:p-8" novalidate>
          <label class="block text-sm font-semibold">Nombre
            <input formControlName="name" autocomplete="name" class="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-blood" />
          </label>
          <label class="mt-4 block text-sm font-semibold">Celular
            <input formControlName="phone" inputmode="tel" autocomplete="tel" class="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-blood" />
          </label>
          <label class="mt-4 block text-sm font-semibold">Tipo de negocio o barrio
            <input formControlName="business" class="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-blood" />
          </label>
          @if (form.touched && form.invalid) {
            <p class="mt-3 text-xs text-blood">Completa tu nombre y un celular válido.</p>
          }
          <button type="submit" class="btn-primary mt-6 w-full">Solicitar demostración</button>
        </form>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d\s-]{7,15}$/)]],
    business: [''],
  });

  /** Abre el correo con los datos. Reemplaza por tu API/CRM cuando la tengas. */
  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const { name, phone, business } = this.form.getRawValue();
    const body = `Nombre: ${name}\nCelular: ${phone}\nNegocio/barrio: ${business}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Solicitud de demostración HORUS')}&body=${encodeURIComponent(body)}`;
  }
}
