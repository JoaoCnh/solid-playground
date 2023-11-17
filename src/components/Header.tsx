import { A } from "solid-start";
import SolidIcon from "./icons/SolidIcon";

export default function Header() {
  return (
    <header class="absolute inset-x-0 top-0">
      <nav
        class="flex items-center justify-center p-6 lg:px-8"
        aria-label="navigation"
      >
        <div class="flex">
          <A href="/" class="-m-1.5 p-1.5 z-40" aria-label="homepage">
            <span class="sr-only">Solid Playground</span>
            <SolidIcon class="h-8 w-auto text-[#2C4F7C]" />
          </A>
        </div>
      </nav>
    </header>
  );
}
