import solid from "solid-start/vite";
import vercel from "solid-start-vercel";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    imagetools({
      defaultDirectives: () => {
        return new URLSearchParams({
          as: "picture",
          format: `avif;webp;jpg`,
          w: "400;640;1280",
        });
      },
    }),
    solid({ adapter: vercel() }),
  ],
});
