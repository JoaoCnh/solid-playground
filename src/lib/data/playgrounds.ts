import { unslugify } from "~/lib/unslugify";
import type { ViteImageToolsSrc } from "~/components/Image";

const images = import.meta.glob(
  "~/lib/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}",
  {
    eager: true,
    import: "default",
  }
);

function getPlayground(dirName: string) {
  return {
    name: dirName,
    label: unslugify(dirName),
    url: `/playground/${dirName}`,
    image: images[`/src/lib/assets/${dirName}.jpg`] as ViteImageToolsSrc,
  };
}

export const playgrounds = [
  "apple-sequence",
  "aspect-ratio",
  "card-link",
  "counter",
].map(getPlayground);
