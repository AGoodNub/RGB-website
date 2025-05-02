/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        red: {
          DEFAULT: '#FF3B30',
          light: '#FF6B61',
          dark: '#D02E24',
        },
        green: {
          DEFAULT: '#34C759',
          light: '#65D983',
          dark: '#28A148',
        },
        blue: {
          DEFAULT: '#007AFF',
          light: '#4DA1FF',
          dark: '#0061CC',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};