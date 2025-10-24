import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D84186', // Luxury Rose-Magenta
          dark: '#B83370',
        },
        secondary: '#007B9E',
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FBFD',
        },
        text: {
          primary: '#1E1E1E',
          secondary: '#4E5661',
          light: '#7B8592',
        },
        border: '#E6EAF0',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { fontWeight: '700', letterSpacing: '-2%' }],
        'h2': ['42px', { fontWeight: '600', letterSpacing: '-1%' }],
        'h3': ['28px', { fontWeight: '600' }],
        'h4': ['20px', { fontWeight: '500' }],
        'body-l': ['18px', { fontWeight: '400', letterSpacing: '1%' }],
        'body-s': ['16px', { fontWeight: '400', letterSpacing: '2%' }],
        'button-label': ['15px', { fontWeight: '600', textTransform: 'uppercase' }],
      },
      spacing: {
        'xs': '8px',
        's': '16px',
        'm': '24px',
        'l': '48px',
        'xl': '96px',
      },
      borderRadius: {
        'DEFAULT': '16px', // Default for cards
        '2xl': '1rem', // For buttons
      },
      boxShadow: {
        'card': '0 10px 20px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
