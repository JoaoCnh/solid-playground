import { For } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { AspectRatio } from "~/components/AspectRatio";
import { CardLink } from "~/components/CardLink";
import { playgrounds } from "~/lib/data/playgrounds";

export function routeData() {
  const experiments = createServerData$(() => playgrounds);
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
