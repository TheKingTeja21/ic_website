/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Deep Midnight Blue
        foreground: "#f8fafc", // Slate 50
        primary: {
          DEFAULT: "#06b6d4", // Electric Cyan
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Vivid Violet
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f59e0b", // Bright Amber
          foreground: "#000000",
        },
        card: {
          DEFAULT: "rgba(2, 6, 23, 0.7)", // Deep Blue with opacity
          foreground: "#f8fafc",
        },
        muted: {
          DEFAULT: "#1e293b", // Slate 800
          foreground: "#94a3b8", // Slate 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
