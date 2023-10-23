<script lang="ts">
  import type { ComponentAboutPageServiceSteps } from "../../../../__generated__/graphql";
  export let steps: ComponentAboutPageServiceSteps[]
  import gsap from 'gsap/dist/gsap.js'
  import SplitText from 'gsap/dist/SplitText'
  import ScrollTrigger from 'gsap/dist/ScrollTrigger.js'
  import ScrollSmoother from 'gsap/dist/ScrollSmoother.js'
  import { onMount } from "svelte";


  let sectionEl: HTMLElement
  let fixedEl: HTMLElement
  let labelEl: HTMLElement
  let labelTextEl: HTMLElement



  onMount(()=>{
    let smoother = ScrollSmoother.get()

    const ctx = gsap.context(() => {
      // const sections: HTMLElement[] = gsap.utils.toArray("section");
      // let maxWidth = sections.length * screen.width

        const steps: NodeListOf<HTMLElement> = document.querySelectorAll(".step");
        
        let tlLabelText = gsap.timeline()

        let tlLabel = gsap.timeline({
          scrollTrigger: {
            target: sectionEl,
            pin: labelEl,
            start: 'top center',
            end: `+=${sectionEl.offsetHeight + 80}`,
            scrub: 1,
            onUpdate:(self)=>{
              if(self.progress > 0.9) {
                gsap.to(labelTextEl, {
                  innerText: "success",
                  fontWeight: "bold"
                }) 
              } else {
                gsap.to(labelTextEl, {
                  fontWeight: "normal",
                  innerText: "project",
                }) 
              }
            }
          }
        })

        tlLabel.to(labelEl, {
          scale: 1.4,
          borderRadius: '40px',
          rotation: 360
        }, 0)

        tlLabel.to(labelTextEl, {
          scale: 1,
          rotation: -360
        }, 0)


        steps.forEach((step, i)=>{
          let tl = gsap.timeline({
            scrollTrigger:{
              trigger: step,
              start: 'top center',
              end: 'top +=100',
              scrub: 1,
            }
          })

          let textSplit = new SplitText(`#heading-${i}`, {
            type: 'lines, words'
          })

          new SplitText(`#heading-${i}`, {
            type: 'lines, words',
            linesClass: 'lineClass'
          })
          
          let numberSplit = new SplitText(`#number-${i}`, {
            type: 'lines, words'
          })
          
          new SplitText(`#number-${i}`, {
            type: 'lines, words',
            linesClass: 'lineClass'
          })
          
          gsap.set('.lineClass', {
            overflow: 'hidden'
          })

          tl.from(numberSplit.words, {
            yPercent: 100,
            opacity: 0.5,
            duration: 1.5,
            stagger: 0.02,
            ease: 'power2.inOut',
          })

          tl.from(textSplit.words, {
            yPercent: 100,
            opacity: 0.5,
            duration: 1.5,
            stagger: 0.02,
            ease: 'power2.inOut',
          })


          tl.from(`#text-${i}`, {
            opacity: 0,
            duration: 1.5,
          }, '-=1')

        })
    
      // gsap.to(sectionEl, {
      //   xPercent: -100 * (sections.length + 1),
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".sectionEl",
      //     pin: true,
      //     scrub: true,
      //     snap: 1 / (sections.length) ,
      //     end: () => `+=${maxWidth}`,
      //     invalidateOnRefresh: true
      //   }
      // });

      // ScrollTrigger.create({
      //   trigger: sectionEl,
      //   markers: true,
      //   pin: fixedEl,
      //   pinSpacing: false,
      //   start: "top top"
      // })
    })
    return ()=>{
      ctx.revert()
    }
  })



</script>
  <section bind:this={sectionEl} class="bg-gradient-to-b from-green relative to-dark-purple flex flex-col min-h-screen">
    <div bind:this={labelEl} class="bg-light-cyan  absolute top-0 left-1/2 -translate-x-1/2 z-20 w-20 h-20  flex  items-center justify-center "><p bind:this={labelTextEl}>project</p></div>
    <div bind:this={fixedEl} class="border-l-2 border-white w-px absolute top-0 left-1/2 -translate-x-1/2 z-10 h-full "><p class=""></p></div>
    <div class="flex flex-col w-full p-20 relative z-40">
      {#each steps as step, i}
        <div
          class="step flex flex-col py-10 w-fit {i % 2 == 0 ? "mr-auto text-end" : "ml-auto text-start"}"
        >
          <div class="flex flex-col max-w-lg relative z-10 space-y-4">
            <div class="flex flex-col space-y-4">
              <p id="number-{i}" class="text-4xl lg:text-9xl font-black text-light-cyan flex space-x-2 {i % 2 == 0 ? "ml-auto" : "mr-auto"}">{step.id}.</p>
              <h2 id="heading-{i}" class="heading text-3xl font-black text-light-cyan flex space-x-2 {i % 2 == 0 ? "ml-auto" : "mr-auto"}">{step.title}</h2>
            </div>
            <p id="text-{i}" class="text-white md:text-lg max-w-3xl">{step.content}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
