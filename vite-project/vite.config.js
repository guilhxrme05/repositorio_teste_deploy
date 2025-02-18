import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'StoryMojis',
        short_name: 'StoryMojis',
        description: 'Aplicativo storymoji',
        theme_color: '***#000',
        icons: [
          {
            src: 'emoji192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'emoji512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});

