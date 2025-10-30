
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
        sans: ["var(--font-open-sans)", ...fontFamily.sans],
        display: ['var(--font-marcellus)', 'serif'],
        montserrat: ['var(--font-montserrat)'],
      },
       fontSize: {
        'h1': ['2.8rem', { fontWeight: '400', letterSpacing: '-0.02em', lineHeight: '1.2' }],
        'h2': ['2.0rem', { fontWeight: '400', letterSpacing: '-0.01em', lineHeight: '1.3' }],
        'h3': ['1.3rem', { fontWeight: '400', lineHeight: '1.4' }],
        'h4': ['1.25rem', { fontWeight: '400', lineHeight: '1.4' }],
        'body-l': ['1.125rem', { fontWeight: '400', letterSpacing: '0.01em', lineHeight: '1.8' }],
        'body-s': ['1rem', { fontWeight: '400', letterSpacing: '0.02em', lineHeight: '1.7' }],
        'button-label': ['0.9375rem', { fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }],
      },
       spacing: {
        'xs': '0.5rem',
        's': '1rem',
        'm': '2.5rem',
        'l': '4rem',
        'xl': '6rem',
      },
      borderRadius: {
        lg: "8px",
        md: "calc(8px - 2px)",
        sm: "calc(8px - 4px)",
        '2xl': '1rem',
      },
       boxShadow: {
        'card': '0 2px 10px rgba(0,0,0,0.05)',
        'lg': '0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.04)',
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
