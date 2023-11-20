import {
  Component,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";

export const ImageSequence: Component<{
  images: string[];
  duration?: number;
  threshold?: number;
}> = ({ images, duration = 100, threshold = 0 }) => {
  let sectionRef: HTMLElement;
  let canvasRef: HTMLCanvasElement;
  let imageSources: HTMLImageElement[] = [];

  const [scrollY, setScrollY] = createSignal(0);

  function loadImages() {
    return images.map(
      (src) =>
        new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.src = src;
        })
    );
  }

  function sizeCanvas() {
    const context = canvasRef.getContext("2d");

    canvasRef.width = window.outerWidth;
    canvasRef.height = window.outerHeight;

    context?.clearRect(0, 0, canvasRef.width, canvasRef.height);
  }

  function drawImage(frame: number, sources: HTMLImageElement[]) {
    if (sources.length === 0) return;

    const context = canvasRef.getContext("2d");
    // get image element by frame
    const image = sources[frame];
    // calculate image size according to canvas size
    const hRatio = canvasRef.width / image.width;
    const vRatio = canvasRef.height / image.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShiftX = (canvasRef.width - image.width * ratio) / 2;
    const centerShiftY = (canvasRef.height - image.height * ratio) / 2;

    requestAnimationFrame(() => {
      context?.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        centerShiftX,
        centerShiftY,
        image.width * ratio,
        image.height * ratio
      );
    });
  }

  onMount(() => {
    function handleScroll() {
      if (typeof window === undefined) return;
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  onMount(() => {
    Promise.all(loadImages()).then((sources) => {
      imageSources = sources;
      sizeCanvas();
      drawImage(0, sources);
    });
  });

  createEffect(() => {
    let $scrollY = scrollY();
    let withinTop = $scrollY >= sectionRef.offsetTop - threshold;
    let withinBottom =
      $scrollY <= sectionRef.offsetTop + sectionRef.offsetHeight;
    let intersecting = withinTop && withinBottom;

    if (intersecting) {
      const scrollTop = $scrollY - (sectionRef.offsetTop - threshold);
      const contentHeight = canvasRef.clientHeight;
      const progress = scrollTop / contentHeight;
      const frame = Math.max(
        0,
        Math.min(images.length - 1, Math.floor(progress * images.length))
      );

      drawImage(frame, imageSources);
    }
  });

  return (
    <section
      ref={sectionRef!}
      class="w-full relative"
      style={{ height: `${duration}vh` }}
    >
      <canvas
        ref={canvasRef!}
        class="w-full h-screen sticky inset-0 object-contain pointer-events-none"
      />
    </section>
  );
};
