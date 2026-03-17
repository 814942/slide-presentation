/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kanagawa theme colors
        bg: {
          DEFAULT: '#1f1f28',
          dark: '#16161d',
          light: '#2a2a37',
        },
        card: {
          DEFAULT: '#2a2a37',
          hover: '#363646',
        },
        text: {
          DEFAULT: '#dcd7ba',
          muted: '#727169',
          bright: '#c8c093',
        },
        accent: {
          blue: '#7e9cd8',
          cyan: '#7fb4ca',
          green: '#98bb6c',
          yellow: '#e6c384',
          magenta: '#957fb8',
          red: '#ff5d62',
          orange: '#ffa066',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
