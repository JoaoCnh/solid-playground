import { Component, Show, createSignal } from "solid-js";
import { Image, ViteImageToolsSrc } from "./Image";
import { easeInOutCubic } from "~/lib/easings/easeInOutCubic";

export const CardLink: Component<{
  href: string;
  title: string;
  image?: ViteImageToolsSrc;
  sizes?: string;
}> = ({ href, title, image, sizes }) => {
  const [coordsX, setCoordsX] = createSignal(-100);
  const [coordsY, setCoordsY] = createSignal(0);

  function getAnimationDirection(event: MouseEvent) {
    const { clientX, clientY } = event;
    const target = event.target as HTMLAnchorElement;
    const { x, y, width, height } = target.getBoundingClientRect();

    let bounds = [
      // top
      { value: y - clientY, position: { x: 0, y: -100 } },
      // right
      { value: x + width - clientX, position: { x: 100, y: 0 } },
      // bottom
      { value: y + height - clientY, position: { x: 0, y: 100 } },
      // left
      { value: x - clientX, position: { x: -100, y: 0 } },
    ];

    const { position } = bounds.reduce((closestBound, bound) => {
      return Math.abs(bound.value) < Math.abs(closestBound.value)
        ? bound
        : closestBound;
    });

    return position;
  }

  let animationFrame: number = 0;
  let animationStartTime: number | null = null;
  let animationDuration = 300;
  let easing = easeInOutCubic;

  function animateTo(position: { x: number; y: number }) {
    animationStartTime = null;
    cancelAnimationFrame(animationFrame);

    let initialPosition = { x: coordsX(), y: coordsY() };

    const loop = (timestamp: number) => {
      if (!animationStartTime) {
        animationStartTime = timestamp;
      }

      const runtime = timestamp - animationStartTime;
      const relativeProgress = runtime / animationDuration;
      const easedProgress = easing(relativeProgress);

      if (position.x === 0) {
        setCoordsX(initialPosition.x * (1 - easedProgress));
      } else {
        setCoordsX(position.x * Math.min(easedProgress, 1));
      }

      if (position.y === 0) {
        setCoordsY(initialPosition.y * (1 - easedProgress));
      } else {
        setCoordsY(position.y * Math.min(easedProgress, 1));
      }

      if (runtime < animationDuration) {
        animationFrame = requestAnimationFrame(loop);
      }
    };

    animationFrame = requestAnimationFrame(loop);
  }

  function animateIn(event: MouseEvent) {
    const position = getAnimationDirection(event);
    setCoordsX(position.x);
    setCoordsY(position.y);
    animateTo({ x: 0, y: 0 });
  }

  function animateOut(event: MouseEvent) {
    const position = getAnimationDirection(event);
    animateTo(position);
  }

  return (
    <a
      href={href}
      class="relative block max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 overflow-hidden"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <Show when={!!image}>
        <Image
          src={image!}
          alt={title}
          sizes={sizes}
          class="w-full h-full object-cover rounded-lg transition hover:scale-125"
        />
      </Show>

      <div class="absolute inset-0 p-2 flex items-end rounded-lg md:hidden">
        <h5 class="text-xl font-bold tracking-tight text-white text-left uppercase">
          {title}
        </h5>
      </div>

      <div
        class="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 pointer-events-none"
        style={{ transform: `translate3d(${coordsX()}%,${coordsY()}%,1px)` }}
      >
        <h5 class="text-2xl font-bold tracking-tight text-white text-center uppercase">
          {title}
        </h5>
      </div>
    </a>
  );
};
