import Counter from "~/components/Counter";
import { PageHeader } from "~/components/PageHeader";

export default function CounterPage() {
  return (
    <section id="counter" class="relative isolate px-6 pt-28 lg:px-8">
      <PageHeader
        title="counter"
        description="Exploring basic signals by building a counter component."
        githubUrl="https://github.com/JoaoCnh/solid-playground/blob/main/src/components/Counter.tsx"
      />

      <Counter />
    </section>
  );
}
