import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 8px 30px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        neon: {
          500: '#7C5CFF',
          400: '#9f8bff',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
