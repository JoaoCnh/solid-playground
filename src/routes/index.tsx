import { A } from "solid-start";
import { GithubIcon } from "~/components/icons/GithubIcon";

export default function Home() {
  return (
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <span class="font-semibold text-orange-700">Svelte</span> Playground
          is here!{" "}
          <a
            href="https://svelte-playground-iota.vercel.app/"
            target="_blank"
            class="font-semibold text-sky-600"
          >
            <span class="absolute inset-0" aria-hidden="true" />
            Read more
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Solid Playground
        </h1>

        <p class="mt-6 text-lg leading-8 text-gray-600">
          This is the home of all of my experiments with Solid. Home to simple &
          complex components, the goal is to have a place to store all my
          experiments in one place instead of creating a new project for every
          single one.
        </p>

        <ul class="flex items-center justify-center my-3">
          <li>
            <a
              href="https://github.com/JoaoCnh/solid-playground"
              target="_blank"
              class="group"
            >
              <GithubIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
            </a>
          </li>
        </ul>

        <div class="mt-10 flex items-center justify-center gap-x-6">
          <A
            href="/playground"
            class="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            Explore playground
          </A>
          <a
            href="https://joaocnh.dev"
            class="text-sm font-semibold leading-6 text-sky-600"
            target="_blank"
          >
            Learn more about me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
