import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Anima la entrada de un elemento cuando aparece en pantalla.
 * Uso: <div hrsReveal [revealDelay]="120">…</div>
 */
@Directive({ selector: '[hrsReveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  @HostBinding('class') hostClass = 'opacity-0';
  @HostBinding('style.animation-delay') get delay() {
    return `${this.revealDelay}ms`;
  }

  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.hostClass = '';
      return;
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.hostClass = 'animate-rise';
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
