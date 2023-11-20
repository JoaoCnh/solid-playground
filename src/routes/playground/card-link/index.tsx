import { Index } from "solid-js";
import { AspectRatio } from "~/components/AspectRatio";
import { CardLink } from "~/components/CardLink";
import { PageHeader } from "~/components/PageHeader";

import cardLinkImg from "~/lib/assets/card-link.jpg";

let data = Array.from({ length: 10 }, (_, i) => {
  let number = i + 1;
  let prefix = number < 10 ? 0 : "";
  return `${prefix}${number}`;
});

export default function CardLinkPage() {
  return (
    <section id="card-link" class="relative isolate px-6 pt-28 lg:px-8">
      <PageHeader
        title="card link"
        description="Exploring animations in Solid with a card component."
        githubUrl="https://github.com/JoaoCnh/solid-playground/blob/main/src/components/CardLink.tsx"
      />

      <ul class="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        <Index each={data}>
          {(item) => (
            <li class="w-full h-full">
              <AspectRatio ratio={1}>
                <CardLink
                  title={item()}
                  href="/playground/card-link"
                  image={cardLinkImg}
                  sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
                />
              </AspectRatio>
            </li>
          )}
        </Index>
      </ul>
    </section>
  );
}
