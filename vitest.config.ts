import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    alias: [
      {
        find: "@/components",
        replacement: "./components",
      },
      {
        find: "@/lib",
        replacement: "./lib",
      },
      {
        find: "@/hooks",
        replacement: "./hooks",
      },
      {
        find: "@/utils",
        replacement: "./lib/utils",
      },
    ],
  },
});
