<script lang="ts">
  import ScrollSmoother from 'gsap/dist/ScrollSmoother'
  import gsap from 'gsap/dist/gsap'
  import SplitText from 'gsap/dist/SplitText'
  import { onMount } from 'svelte';

  import type { Maybe } from "../../../../__generated__/graphql";
  export let heading: Maybe<string> | undefined;
  export let content: Maybe<string> | undefined;
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;

  let sectionEl: HTMLElement
  let headingEl: HTMLElement
  let textEl: HTMLElement

  onMount(()=>{
    let smoother = ScrollSmoother.get()



  })
</script>

<div bind:this={sectionEl} class="flex py-20 pt-32 flex-col items-center justify-center relative overflow-hidden">
  <img
    data-speed="0.90"
    {src}
    {alt}
    class="absolute top-0 left-0 w-full h-screen object-cover z-0 grayscale"
  />
  <div class="relative z-10 items-center flex flex-col space-y-8 p-5">
    <h2 bind:this={headingEl} data-speed="1.1" class="text-5xl md:text-6xl lg:text-8xl font-bold font-serif text-white text-center">
      {heading}
    </h2>
    <p bind:this={textEl} data-speed="1.1" class=" text-white font-serif text-xl max-w-3xl text-center">
      {content}
    </p>
  </div>
</div>
