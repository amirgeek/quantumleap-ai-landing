
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      colors: {
        'almost-black': '#0a0a0a',
        'cyan-electric': '#00ffff',
        'deep-purple': '#800080',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 255, 255, 0.4), 0 0 30px rgba(0, 255, 255, 0.2)',
        'neon-glow': '0 0 30px rgba(0,255,255,0.6), 0 0 60px rgba(128,0,128,0.4)',
      },
      dropShadow: {
        'neon': '0 0 8px rgba(0,255,255,0.6), 0 0 15px rgba(0,255,255,0.4)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'pulse-light': 'pulse-light 4s infinite ease-in-out',
        'spin-slow': 'spin-slow 60s linear infinite',
        'glitch-effect': 'glitch-effect 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'pulse-light': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.7' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'glitch-effect': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
