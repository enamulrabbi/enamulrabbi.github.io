/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050608',
          900: '#080a0f',
          850: '#0b0e14',
          800: '#0f131b',
          750: '#141925',
          700: '#1a2030',
          600: '#262d40',
          500: '#3a4257',
          400: '#5a6378',
          300: '#8b93a7',
          200: '#b8bfce',
          100: '#e4e8f0',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        signal: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        mint: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'fluid-hero': 'clamp(2.25rem, 6vw, 5rem)',
        'fluid-h2': 'clamp(1.75rem, 4vw, 3rem)',
        'fluid-h3': 'clamp(1.25rem, 2.5vw, 1.75rem)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        'display-tight': '-0.03em',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 18s ease infinite',
        'scan-line': 'scanLine 6s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'dash': 'dashFlow 3s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spinReverse 25s linear infinite',
        'blink': 'blink 1.4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(2000%)', opacity: '0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(40px) rotate(-360deg)' },
        },
        dashFlow: {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        shimmer: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-md': '64px 64px',
      },
    },
  },
  plugins: [],
};
