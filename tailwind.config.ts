import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        surface: '#111118',
        'surface-2': '#1A1A24',
        border: '#2A2A3A',
        primary: '#3B82F6',
        'primary-glow': 'rgba(59,130,246,0.15)',
        accent: '#8B5CF6',
        'text-primary': '#F8F8FF',
        'text-muted': '#6B7280',
        success: '#10B981',
        teal: '#06B6D4',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1-mobile': ['40px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.15', fontWeight: '600' }],
        'h2-mobile': ['32px', { lineHeight: '1.15', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        'label': ['13px', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.08em' }],
      },
    },
  },
  plugins: [],
};

export default config;
