import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComparisonComponent } from './sections/comparison.component';
import { ContactComponent } from './sections/contact.component';
import { DemoComponent } from './sections/demo.component';
import { FooterComponent } from './sections/footer.component';
import { HeroComponent } from './sections/hero.component';
import { HowItWorksComponent } from './sections/how-it-works.component';
import { NavbarComponent } from './sections/navbar.component';

@Component({
  selector: 'hrs-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ComparisonComponent, HowItWorksComponent, DemoComponent, ContactComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hrs-navbar />
    <main>
      <hrs-hero />
      <hrs-comparison />
      <hrs-how-it-works />
      <hrs-demo />
      <hrs-contact />
    </main>
    <hrs-footer />
  `,
})
export class AppComponent {}
