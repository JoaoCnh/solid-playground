import { Component, ComponentProps, For } from "solid-js";

export const Image: Component<ImageProps> = ({ src, sizes, ...delegated }) => {
  return (
    <picture>
      <For each={Object.values(src.sources)}>
        {(srcSet) => <source srcset={srcSet} sizes={sizes} />}
      </For>

      <img
        src={src.img.src}
        width={src.img.w}
        height={src.img.h}
        {...delegated}
      />
    </picture>
  );
};

export type ViteImageToolsSrc = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};

type ImageProps = Omit<ComponentProps<"img">, "src"> & {
  src: ViteImageToolsSrc;
};
