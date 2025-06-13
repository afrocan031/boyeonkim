import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/boyeonkim/', // ✅ 슬래시로 시작하고 끝나야 함!
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },

});