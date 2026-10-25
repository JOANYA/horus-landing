/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0A0A0A', 900: '#0A0A0A', 800: '#121011', 700: '#1A1617', 600: '#241E1F' },
        ivory: { DEFAULT: '#F5F2EB', 200: '#E3DDD1', 300: '#CFC7B8', 400: '#A59D8F' },
        blood: { DEFAULT: '#B3121F', 400: '#D1313D', 500: '#B3121F', 600: '#8E0E19', 700: '#650A12', 900: '#2A0509' }
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 24px 60px -24px rgba(0,0,0,.65)', glow: '0 0 80px -10px rgba(179,18,31,.35)' },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(18px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        scan: { '0%': { transform: 'translateY(-10%)' }, '100%': { transform: 'translateY(110%)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        pulseRing: { '0%': { transform: 'scale(.9)', opacity: .8 }, '100%': { transform: 'scale(1.7)', opacity: 0 } }
      },
      animation: {
        rise: 'rise .8s cubic-bezier(.2,.7,.2,1) both',
        scan: 'scan 3.2s linear infinite',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
        spinSlow: 'spinSlow 90s linear infinite'
      }
    }
  },
  plugins: []
};
