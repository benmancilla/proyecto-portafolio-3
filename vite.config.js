import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/pagina-portafolio-3/', // Update this with your repository name
  plugins: [react()],
});

