import { For } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { AspectRatio } from "~/components/AspectRatio";
import { CardLink } from "~/components/CardLink";
import { unslugify } from "~/lib/unslugify";
import { mapDir } from "~/lib/server/map-dir";
import type { ViteImageToolsSrc } from "~/components/Image";

export function routeData() {
  const experiments = createServerData$(() => {
    const images = import.meta.glob(
      "~/lib/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}",
      {
        eager: true,
        import: "default",
      }
    );

    return mapDir("src/routes/playground", (dirName) => ({
      name: dirName,
      label: unslugify(dirName),
      url: `/playground/${dirName}`,
      image: images[`/src/lib/assets/${dirName}.jpg`] as ViteImageToolsSrc,
    }));
  });

  return { experiments };
}

export default function Playground() {
  const { experiments } = useRouteData<typeof routeData>();

  return (
    <section id="experiments" class="relative isolate px-6 pt-28 lg:px-8">
      <ul class="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        <For each={experiments()}>
          {(experiment) => (
            <li class="w-full h-full">
              <AspectRatio ratio={1}>
                <CardLink
                  href={experiment.url}
                  title={experiment.label}
                  image={experiment.image}
                  sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
                />
              </AspectRatio>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
