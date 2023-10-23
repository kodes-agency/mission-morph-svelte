<script lang="ts">
  import ScrollSmoother from 'gsap/dist/ScrollSmoother'
  import gsap from 'gsap/dist/gsap'
  import SplitText from 'gsap/dist/SplitText'
  import { onMount } from 'svelte';
  export let src: string | undefined;
  export let alt: string | undefined;
  export let heading: string | undefined;
  export let content: string | undefined;

  let headingEl: HTMLElement
  let textEl: HTMLElement

  onMount(()=>{
    let smoother = ScrollSmoother.get()

    const ctx = gsap.context(()=>{  
      let tl = gsap.timeline({})

      let headingSplit = new SplitText(headingEl, {
              type: 'lines, chars',
          }
      )
      new SplitText(headingEl, {
              type: 'lines',
              linesClass: 'headingLines'
          }
      )

      gsap.set('.headingLines', {
          overflow: 'hidden'
      })

      gsap.set(headingEl, {
          opacity: 1
      })

      tl.from(headingSplit.lines, {
          delay: 0.5,
          yPercent: 100,
          duration: 2,
          stagger: 0.2,
          ease: 'power4.inOut',
      })

      tl.from(textEl, {
        opacity: 0,
        duration: 1.5,
      }, '-=1')
    })

    return ()=>{
        ctx.revert()
    }
  })
</script>

<section
  class=" bg-gradient-to-b from-black to-green h-screen flex flex-col items-center justify-center relative"
>
  <img
    {src}
    {alt}
    class="absolute top-0 left-0 h-screen w-full object-cover z-0 mix-blend-darken"
    data-speed="0.9"
  />
  <div class="flex flex-col max-w-5xl relative z-10 p-6 py-10 space-y-4">
    <h1 data-speed="1.05" bind:this={headingEl} class="text-4xl md:text-8xl font-black text-light-cyan">{@html heading}</h1>
    <p data-speed="1.05" bind:this={textEl} class="text-white text-lg max-w-3xl">{content}</p>
  </div>
</section>
