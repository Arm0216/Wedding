/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FEFDF8',
        champagne: '#F7E7CE',
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D5A3',
          dark: '#A0822A',
        },
        blush: {
          DEFAULT: '#F2C4CE',
          light: '#FAE8EC',
          dark: '#D4849A',
        },
        cream: '#FBF6EF',
        linen: '#F5ECD7',
        muted: '#8B7355',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'fade-up': 'fadeUp 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.9' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)',
        'champagne-gradient': 'linear-gradient(180deg, #FBF6EF 0%, #F7E7CE 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(20,15,10,0.45) 0%, rgba(20,15,10,0.25) 50%, rgba(20,15,10,0.6) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201,168,76,0.25)',
        'card': '0 8px 40px rgba(139,115,85,0.12)',
        'glass': '0 8px 32px rgba(31,38,135,0.08)',
      },
    },
  },
  plugins: [],
}
