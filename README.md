# HORUS · Landing page (Angular 18 + Tailwind)

## Ejecutar
```bash
npm install
npm start          # http://localhost:4200
npm run build      # producción en dist/horus-landing
```

## Estructura
```
src/app/
  app.component.ts            Composición de la página
  core/content.ts             TODO el texto/datos editables (nav, pasos, videos, contacto)
  shared/
    reveal.directive.ts       Animación de entrada al hacer scroll
    risk-gauge.component.ts   Medidor circular de riesgo 0–100
  sections/                   navbar · hero · comparison · how-it-works · demo · contact · footer
src/assets/
  logo-ojo.png, logo-sol.png  Tus logos (fondo blanco ya convertido a transparente)
  demo/                       Coloca aquí tus videos (ver content.ts → DEMO_VIDEOS)
```

## Pendientes antes de publicar
- Videos reales en `src/assets/demo/` (mientras no existan, se muestra una escena simulada).
- Email y WhatsApp reales en `core/content.ts` (`CONTACT`).
- Enlaces legales del footer (privacidad, términos, datos personales).
- El formulario abre el correo (`mailto:`); conéctalo a tu API/CRM en `contact.component.ts`.
