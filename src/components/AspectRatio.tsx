import { ParentComponent } from "solid-js";

export const AspectRatio: ParentComponent<{
  ratio: number;
}> = ({ ratio, children }) => {
  return (
    <div
      class="relative w-full"
      style={{ "padding-bottom": `${100 / ratio}%` }}
    >
      <div class="absolute inset-0">{children}</div>
    </div>
  );
};
