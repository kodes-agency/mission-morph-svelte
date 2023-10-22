<script lang="ts">
  import type { ComponentAboutPageServiceSteps } from "../../../../__generated__/graphql";
  import Step from "$lib/components/elements/Step.svelte";
  export let steps: ComponentAboutPageServiceSteps[]
  import gsap from 'gsap/dist/gsap.js'
  import ScrollTrigger from 'gsap/dist/ScrollTrigger.js'
  import ScrollSmoother from 'gsap/dist/ScrollSmoother.js'
  import { onMount } from "svelte";


  gsap.registerPlugin(ScrollTrigger);
  let wrapper: HTMLElement
  let fixedEl: HTMLElement

  onMount(()=>{
    let smoother = ScrollSmoother.get()

    const ctx = gsap.context(() => {
      // const sections: HTMLElement[] = gsap.utils.toArray("section");
      // let maxWidth = sections.length * screen.width
    
      // gsap.to(wrapper, {
      //   xPercent: -100 * (sections.length + 1),
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".wrapper",
      //     pin: true,
      //     scrub: true,
      //     snap: 1 / (sections.length) ,
      //     end: () => `+=${maxWidth}`,
      //     invalidateOnRefresh: true
      //   }
      // });

      ScrollTrigger.create({
        trigger: wrapper,
        markers: true,
        pin: fixedEl,
        pinSpacing: false,
        start: "top top"
      })
    })
    return ()=>{
      ctx.revert()
    }
  })



</script>
  <section bind:this={wrapper} class="bg-gradient-to-b from-green to-dark-purple flex flex-col space-y-40 min-h-screen">
    <div bind:this={fixedEl} class="border-b-2 border-white w-1/2"><p class="">i need to pin this</p></div>
    {#each steps as step }
    <div data-speed="" class="">
      <Step 
        heading={step.title}
        content={step.content}
        id={step.id}
      />
    </div>
    {/each}
  </section>
