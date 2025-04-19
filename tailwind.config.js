/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',

    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          sidebar: {
            DEFAULT: 'hsl(var(--sidebar-background))',
            foreground: 'hsl(var(--sidebar-foreground))',
            primary: 'hsl(var(--sidebar-primary))',
            'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
            accent: 'hsl(var(--sidebar-accent))',
            'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
            border: 'hsl(var(--sidebar-border))',
            ring: 'hsl(var(--sidebar-ring))',
          },
          'edu-purple': '#C4B5FD',
          'edu-purple-light': '#DDD6FE',
          'edu-blue': '#93C5FD',
          'edu-blue-light': '#BFDBFE',
          'edu-green': '#86EFAC',
          'edu-green-light': '#D1FAE5',
          'edu-pink': '#FDA4AF',
          'edu-pink-light': '#FEE2E2',
          'edu-orange': '#FB923C',
          'edu-text': '#1F2937',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
          'fade-in': {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          'pulse-soft': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.8' },
          },
          'spin-slow': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'fade-in': 'fade-in 0.6s ease-out',
          float: 'float 6s ease-in-out infinite',
          'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
          'spin-slow': 'spin-slow 12s linear infinite',
        },
      },
    },
    plugins: [],
  };
  