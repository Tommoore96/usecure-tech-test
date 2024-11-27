import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/slides/1",
  plugins: [react(), TanStackRouterVite(), svgr()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
