import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    fontFamily: { sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'] },
    colors: { ink: '#080a12', acid: '#a3ff12', plasma: '#8b5cf6', blush: '#ff4ecd' },
    boxShadow: { glow: '0 0 80px rgba(139,92,246,.35)', soft: '0 24px 80px rgba(0,0,0,.35)' },
    animation: { float: 'float 8s ease-in-out infinite', marquee: 'marquee 28s linear infinite', pulseGlow: 'pulseGlow 3s ease-in-out infinite' },
    keyframes: {
      float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-22px)' } },
      marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      pulseGlow: { '0%,100%': { opacity: '.45' }, '50%': { opacity: '.9' } }
    }
  }},
  plugins: []
};
export default config;
