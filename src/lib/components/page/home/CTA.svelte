<script lang="ts">
  import type { Maybe } from "../../../../__generated__/graphql";
  import { page } from "$app/stores";
  import ScrollSmoother from 'gsap/dist/ScrollSmoother'
  import  gsap  from 'gsap/dist/gsap'
  import {animateText, anmCleanUp } from '$lib/functions/textAnimation'
  import { onMount } from "svelte";
  export let heading: Maybe<string> | undefined;
  export let content: Maybe<string> | undefined
  export let button: string;
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;

  let sectionEl: HTMLElement;
  let headingEl: HTMLElement;
  let textEl: HTMLElement;



  onMount(() => {
    let smoother = ScrollSmoother.get();

    let ctx = animateText(sectionEl, headingEl, textEl)

    return ()=>{
      anmCleanUp()
    }
  });

  $: images = $page.data.data.homePage?.data.attributes;
</script>

  <section
    bind:this={sectionEl}
    class="bg-gradient-to-b from-magenta to-yellow flex flex-col items-center justify-center"
  >
    <div
      class="relative max-w-5xl flex space-y-4 flex-col justify-between h-full p-6 my-40"
    >
      <img
        data-speed="0.95"
        {src}
        {alt}
        class="absolute right-10 lg:right-0 -top-20 w-52 md:w-auto md:h-[70vh] h-auto z-0"
      />
      <div class="relative z-10 flex space-y-5 flex-col">
        <h2
          bind:this={headingEl}
          data-speed="1.05"
          class="text-3xl md:text-7xl uppercase font-black text-light-cyan pb-40 md:pb-10 lg:pb-0"
        >
          {heading}
        </h2>
        <p bind:this={textEl} data-speed="1.05" class=" text-light-cyan font-light max-w-xl text-xl">
          {content}
        </p>
      </div>
      <button
        data-speed="1.05"
        on:click={() => {
          Calendly.initPopupWidget({
            url: "https://calendly.com/missionmorph/30min?hide_gdpr_banner=1",
          });
          return false;
        }}
        class="tiny text-xl w-fit text-light-cyan font-bold underline relative"
        >{button}</button
      >
    </div>
  </section>
