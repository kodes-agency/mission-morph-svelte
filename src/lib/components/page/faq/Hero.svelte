<script lang="ts">
  import { onMount } from "svelte";
  import type { Maybe } from "../../../../__generated__/graphql";
  // @ts-ignore
  import ScrollSmoother from "gsap/dist/ScrollSmoother";
  export let heading: Maybe<string> | undefined;
  export let content: Maybe<string> | undefined;
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;

  onMount(() => {
    let smooter = ScrollSmoother.get();
  });
</script>

<section class="bg-gradient-to-b from-light-cyan to-gray p-5 md:p-10 lg:p-20">
  <div class="relative flex pt-20 flex-col-reverse md:space-y-0 lg:p-20">
    <div class="flex flex-col max-w-4xl space-y-10 relative z-10">
      <h1
        data-speed="1.05"
        class="text-4xl pt-10 md:text-6xl lg:text-7xl font-black uppercase"
      >
        {heading}
      </h1>
      <div data-speed="1.05" class="text-xl">
        {@html content}
      </div>
    </div>
    <img
      data-speed="0.95"
      class="lg:absolute top-60 right-0 lg:left-[55vw] w-full h-60 sm:w-auto -mb-20 md:h-80 object-cover z-0"
      {src}
      {alt}
    />
  </div>
</section>
