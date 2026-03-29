import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  // This line is the "White Screen Killer" — it prevents the 'process' error
  define: {
    'process.env': {},
  },
  build: {
    outDir: 'dist',
  }
});