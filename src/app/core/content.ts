/** Contenido de la landing centralizado: se edita aquí sin tocar los componentes. */

export const NAV_LINKS = [
  { label: 'Solución', href: '#solucion' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos-uso' },
  { label: 'Demostración', href: '#demo' },
];

export const COMPARISON = {
  before: {
    title: 'Cámara tradicional',
    tag: 'Pasiva',
    items: [
      'Solo graba: el video se revisa cuando el delito ya ocurrió.',
      'Depende de que alguien esté mirando la pantalla.',
      'Sin aviso ni ubicación: la reacción llega tarde.',
      'Evidencia dispersa, difícil de usar en una denuncia.',
    ],
  },
  after: {
    title: 'Con HORUS',
    tag: 'Tiempo real',
    items: [
      'Analiza la imagen en vivo y detecta armas y fuego.',
      'Reconoce conductas de riesgo: apuntar, desenfundar, acecho.',
      'Alarma y aviso en segundos por Telegram y SMS, con la ubicación exacta de la cámara.',
      'Evidencia cifrada, lista para la denuncia.',
    ],
  },
};

export const STEPS = [
  {
    n: '01',
    title: 'La IA analiza la escena',
    text: 'Cada cuadro se revisa en tiempo real buscando armas y fuego, y patrones de conducta que anticipan un ataque.',
    chips: ['Armas', 'Fuego', 'Apuntar', 'Desenfundar', 'Acecho', 'Moto con 2 ocupantes'],
  },
  {
    n: '02',
    title: 'Puntaje de riesgo de 0 a 100',
    text: 'No es una caja negra: el puntaje te dice por qué subió, factor por factor.',
  },
  {
    n: '03',
    title: 'Alerta instantánea',
    text: 'Si el riesgo se confirma, suena la alarma y se avisa en segundos por Telegram y SMS con la ubicación de la cámara. La evidencia se guarda cifrada.',
  },
];

export const RISK_BREAKDOWN = [
  { label: 'Arma de fuego visible', points: 46 },
  { label: 'Gesto de desenfundar', points: 24 },
  { label: 'Moto con 2 ocupantes', points: 12 },
  { label: 'Horario nocturno', points: 5 },
];

export const USE_CASES = [
  { title: 'Comercios y bodegas', text: 'Protege la puerta y la caja frente a la extorsión y el robo armado con las cámaras que ya instalaste.' },
  { title: 'Barrios y juntas vecinales', text: 'Una red de cámaras vecinales que avisa a la comunidad antes de que el hecho escale.' },
  { title: 'Transporte y empresas', text: 'Paraderos, terminales y almacenes con respuesta inmediata y evidencia para la denuncia.' },
  { title: 'Colegios y clínicas', text: 'Vigilancia de accesos con alertas discretas para el personal de seguridad.' },
];

export interface DemoVideo {
  id: string;
  title: string;
  caption: string;
  duration: string;
  /** Coloca tus videos en src/assets/demo/ */
  src: string;
  poster?: string;
}

export const DEMO_VIDEOS: DemoVideo[] = [
  { id: 'arma', title: 'Detección de arma', caption: 'Un sujeto desenfunda frente a un comercio.', duration: '0:42', src: 'assets/demo/deteccion-arma.mp4' },
  { id: 'moto', title: 'Moto con varios ocupantes', caption: 'Patrón de acecho en la puerta de un local.', duration: '0:35', src: 'assets/demo/moto-acecho.mp4' },
  { id: 'alerta', title: 'Alerta en Telegram', caption: 'Del riesgo confirmado al aviso en segundos.', duration: '0:28', src: 'assets/demo/alerta-telegram.mp4' },
];

export const CONTACT = {
  email: 'contacto@horus.pe',
  whatsapp: '+51 900 000 000',
};
