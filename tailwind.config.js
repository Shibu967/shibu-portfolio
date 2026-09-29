/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Primary brand accent — violet
        accent: {
          DEFAULT: '#8b5cf6', // violet-500
          light: '#a78bfa',   // violet-400
          dark: '#7c3aed',    // violet-600
        },
        // Page surfaces
        surface: {
          page: '#020617',    // slate-950 — deepest background
          card: '#0f172a',    // slate-900 — card/panel background
          border: '#1e293b',  // slate-800 — subtle dividers
          hover: '#1e293b',   // slate-800 — hover state for cards
        },
        // Text hierarchy
        text: {
          primary: '#f1f5f9',   // slate-100 — headings / primary text
          secondary: '#94a3b8', // slate-400 — body / descriptions
          muted: '#475569',     // slate-600 — metadata / labels
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
