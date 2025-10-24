import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';


const config: Config = {
  darkMode: ["class"],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
       colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'newsletter-blue': 'hsl(var(--newsletter-blue))',
        'text-primary': 'hsl(var(--text-primary))',
        'text-secondary': 'hsl(var(--text-secondary))',
        'text-light': 'hsl(var(--text-light))',
        'background-alt': 'hsl(var(--background-alt))',
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        display: ['var(--font-playfair)', ...fontFamily.serif],
        anton: ['var(--font-anton)'],
        montserrat: ['var(--font-montserrat)'],
      },
       fontSize: {
        'h1': ['3.5rem', { fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }],
        'h2': ['2.5rem', { fontWeight: '600', letterSpacing: '-0.01em', lineHeight: '1.2' }],
        'h3': ['1.75rem', { fontWeight: '600', lineHeight: '1.3' }],
        'h4': ['1.25rem', { fontWeight: '500', lineHeight: '1.4' }],
        'body-l': ['1.125rem', { fontWeight: '400', letterSpacing: '0.01em', lineHeight: '1.6' }],
        'body-s': ['1rem', { fontWeight: '400', letterSpacing: '0.02em', lineHeight: '1.5' }],
        'button-label': ['0.9375rem', { fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }],
      },
       spacing: {
        'xs': '0.5rem',
        's': '1rem',
        'm': '1.5rem',
        'l': '3rem',
        'xl': '6rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '2xl': '1rem',
      },
       boxShadow: {
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;