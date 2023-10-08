<script lang="ts">
  import type { Maybe } from "../../../../__generated__/graphql";
  export let heading: Maybe<string> | undefined;
  export let content: Maybe<string> | undefined;
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;
</script>

<div class="h-screen flex flex-col items-center justify-center relative">
  <img
    {src}
    {alt}
    class="absolute top-0 left-0 w-full h-screen object-cover z-0 grayscale"
  />
  <div class="relative z-10 items-center flex flex-col space-y-8">
    <h2 class=" text-8xl font-bold font-serif text-white text-center">
      {heading}
    </h2>
    <p class=" text-white font-serif text-xl max-w-3xl text-center">
      {content}
    </p>
  </div>
</div>
