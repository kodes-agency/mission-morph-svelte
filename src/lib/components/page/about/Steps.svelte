<script lang="ts">
  import type { ComponentAboutPageServiceSteps } from "../../../../__generated__/graphql";
  import Step from "$lib/components/elements/Step.svelte";
  export let steps: ComponentAboutPageServiceSteps[]
  import gsap from 'gsap/dist/gsap.js'
  import ScrollTrigger from 'gsap/dist/ScrollTrigger.js'
  import { onMount } from "svelte";


  gsap.registerPlugin(ScrollTrigger);
  let wrapper: HTMLElement

  onMount(()=>{
    const ctx = gsap.context(() => {
      const sections: HTMLElement[] = gsap.utils.toArray("section");
      let maxWidth = sections.length * screen.width
    
      gsap.to(wrapper, {
        xPercent: -100 * (sections.length),
        ease: "none",
        scrollTrigger: {
          trigger: ".wrapper",
          pin: true,
          scrub: true,
          snap: 1 / (sections.length) ,
          end: () => `+=${maxWidth}`,
          invalidateOnRefresh: true
        }
      });
    })
    return ()=>{
      ctx.revert()
    }
  })



</script>


  <section bind:this={wrapper} class="flex wrapper">
    {#each steps as step }
    <div class="section">
      <Step 
        heading={step.title}
        content={step.content}
        id={step.id}
      />
    </div>
    {/each}
  </section>
