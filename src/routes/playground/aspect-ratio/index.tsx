import { For } from "solid-js";
import { Image } from "~/components/Image";
import { AspectRatio } from "~/components/AspectRatio";
import { PageHeader } from "~/components/PageHeader";

import aspectRatioImg from "~/lib/assets/aspect-ratio.jpg";

let ratios = [
  { text: "3/4", value: 3 / 4 },
  { text: "16/9", value: 16 / 9 },
  { text: "1", value: 1 },
];

export default function AspectRatioPage() {
  return (
    <section id="aspect-ratio" class="relative isolate px-6 pt-28 lg:px-8">
      <PageHeader
        title="aspect ratio"
        description="Displays content within the desired ratio."
        githubUrl="https://github.com/JoaoCnh/solid-playground/blob/main/src/components/AspectRatio.tsx"
      />

      <ul class="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        <For each={ratios}>
          {(ratio) => (
            <li class="w-full h-full">
              <AspectRatio ratio={ratio.value}>
                <figure class="w-full h-full">
                  <Image
                    src={aspectRatioImg}
                    alt="{ratio.text} ratio"
                    class="w-full h-full object-cover"
                    sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
                  />
                  <figcaption class="mt-2 text-sm text-center text-gray-500">
                    {ratio.text}
                  </figcaption>
                </figure>
              </AspectRatio>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
