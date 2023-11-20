import { Component } from "solid-js";
import { A } from "solid-start";
import { GithubIcon } from "./icons/GithubIcon";
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";

export const PageHeader: Component<{
  title: string;
  description: string;
  githubUrl: string;
}> = ({ title, description, githubUrl }) => {
  return (
    <div class="mb-16 md:mb-28">
      <h1 class="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl uppercase break-words">
        <mark class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 rounded">
          {title}
        </mark>
      </h1>

      <p class="text-lg font-normal text-gray-500 lg:text-xl">{description}</p>

      <div class="mt-4 flex gap-6">
        <a
          href={githubUrl}
          class="group -m-1 p-1"
          target="_blank"
          aria-label="Check source code on GitHub"
        >
          <GithubIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
        </a>
        <A
          href="/playground"
          class="flex items-center text-zinc-500 transition group-hover:text-zinc-600 capitalize"
        >
          <ArrowLeftIcon class="h-4 w-4 md:h-6 md:w-6 mr-2 fill-zinc-500 transition group-hover:fill-zinc-600" />
          <span>go back</span>
        </A>
      </div>
    </div>
  );
};
