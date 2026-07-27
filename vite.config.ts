import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    sourcemap: true,
    // 1. Вимикає мініфікацію JS та CSS
    // minify: false, 
    
    // 2. Встановлює цільовий синтаксис на найсучасніший (ES-модулі)
    // target: 'esnext', 
  },
});
