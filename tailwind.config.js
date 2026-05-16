/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dce5f1',
          200: '#b3c5e0',
          300: '#7e9bc8',
          400: '#4a6fa8',
          500: '#2c4d85',
          600: '#1f3a6a',
          700: '#172d52',
          800: '#0f1f3a',
          900: '#0a1628',
          950: '#050b16',
        },
        royal: {
          400: '#5b8def',
          500: '#3b6fe0',
          600: '#2553c4',
          700: '#1d419b',
        },
        gold: {
          300: '#f6d68a',
          400: '#e8be5f',
          500: '#d4a437',
          600: '#b28223',
        },
        ink: '#0a1628',
        cream: '#f8f5ef',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(8, 20, 45, 0.18)',
        soft: '0 20px 60px -20px rgba(10, 22, 40, 0.25)',
        gold: '0 10px 40px -10px rgba(212, 164, 55, 0.45)',
        ring: '0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -30px rgba(10,22,40,0.5)',
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(10,22,40,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.06) 1px, transparent 1px)",
        'grid-dark': "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(60% 60% at 50% 40%, rgba(91,141,239,0.35), transparent 70%)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(10px,-12px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        gradient: 'gradientShift 12s ease infinite',
        glow: 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
