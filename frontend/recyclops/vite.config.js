import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },

  plugins: [
    react(),
    eslint(),
    mkcert(),
    // eslint-disable-next-line new-cap
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "RecyclOps",
        short_name: "RecyclOps",
        description: "AI powered tool for waste management",
        icons: [
          {
            src: "/Logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/Logo.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "/Logo.png",
            sizes: "225x225",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#171717",
        background_color: "#FFFFFF",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
      },
    }),
  ],
});
