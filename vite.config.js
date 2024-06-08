import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})

require('esbuild').buildSync({
    entryPoints: ['./src/index.js'],
    jsx: '---jsx-automatic',
    outfile: 'out.js',
  })