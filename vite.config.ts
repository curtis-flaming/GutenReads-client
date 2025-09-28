import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5211",
        changeOrigin: true,
      },
    },
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:5211",
    //     changeOrigin: true,
    //     secure: false,
    //     configure: (proxy) => {
    //       proxy.on("proxyReq", (proxyReq, req) => {
    //         // Forward cookies from the client
    //         if (req.headers.cookie) {
    //           proxyReq.setHeader("cookie", req.headers.cookie);
    //         }
    //       });
    //     },
    //   },
    // },
  },
});
