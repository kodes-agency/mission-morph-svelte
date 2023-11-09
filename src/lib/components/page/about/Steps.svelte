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
  let stepsEl: NodeListOf<HTMLElement>
  
  $: sectionEl


  onMount(()=>{
    let smoother = ScrollSmoother.get()

    let mm = gsap.matchMedia()

    const ctx = gsap.context(() => {
      // const sections: HTMLElement[] = gsap.utils.toArray("section");
      // let maxWidth = sections.length * screen.width

        stepsEl = document.querySelectorAll(".step");
        
        let tlLabelText = gsap.timeline()

        // mm.add('(max-width: 1024px)', ()=>{
          let tlLabel = gsap.timeline({
            scrollTrigger: {
              target: sectionEl,
              pin: labelEl,
              start: 'top center',
              end: `+=${sectionEl.offsetHeight}`,
              scrub: ScrollTrigger.isTouch ? 0 : 1,
              onUpdate:(self:any)=>{
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

          stepsEl.forEach((step, i)=>{
            let tl = gsap.timeline({
              scrollTrigger:{
                trigger: step,
                start: 'top +=600',
                end: 'top top',
                scrub: 1,
              }
            })

            let textSplit = new SplitText(`#heading-${i}`, {
              type: 'lines, words',
            })

            new SplitText(`#heading-${i}`, {
              type: 'lines, words',
              linesClass: 'lineClass',
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
              duration: 1,
              stagger: 0.02,
              ease: 'power2.inOut',
            })

            tl.from(textSplit.words, {
              yPercent: 100,
              opacity: 0.5,
              duration: 1.5,
              stagger: 0.02,
              delay: 1,
              ease: 'power2.inOut'
            }, '-=1.5')


            tl.from(`#text-${i}`, {
              opacity: 0,
              duration: 1.5,
            }, '-=0.5')
          })
        

        // mm.add('(min-width: 1025px)', ()=>{
        //   let tlLabel = gsap.timeline({
        //     scrollTrigger: {
        //       target: sectionEl,
        //       pin: labelEl,
        //       start: 'top center',
        //       end: `+=${sectionEl.offsetHeight - 80}`,
        //       scrub: 1,
        //       onUpdate:(self:any)=>{
        //         if(self.progress > 0.9) {
        //           gsap.to(labelTextEl, {
        //             innerText: "success",
        //             fontWeight: "bold"
        //           }) 
        //         } else {
        //           gsap.to(labelTextEl, {
        //             fontWeight: "normal",
        //             innerText: "project",
        //           }) 
        //         }
        //       }
        //     }
        //   })
  
        //   tlLabel.to(labelEl, {
        //     scale: 1.4,
        //     borderRadius: '40px',
        //     rotation: 360
        //   }, 0)
  
        //   tlLabel.to(labelTextEl, {
        //     scale: 1,
        //     rotation: -360
        //   }, 0)

        //   stepsEl.forEach((step, i)=>{
        //     let tl = gsap.timeline({
        //       scrollTrigger:{
        //         trigger: step,
        //         start: 'top center',
        //         end: 'top +=100',
        //         scrub: 1,
        //       }
        //     })

        //     let textSplit = new SplitText(`#heading-${i}`, {
        //       type: 'lines, words, chars',
        //     })

        //     new SplitText(`#heading-${i}`, {
        //       type: 'lines, words, chars',
        //       linesClass: 'lineClass',
        //     })
            
        //     let numberSplit = new SplitText(`#number-${i}`, {
        //       type: 'lines, words'
        //     })
            
        //     new SplitText(`#number-${i}`, {
        //       type: 'lines, words',
        //       linesClass: 'lineClass'
        //     })
            
        //     gsap.set('.lineClass', {
        //       overflow: 'hidden'
        //     })

        //     tl.from(numberSplit.words, {
        //       yPercent: 100,
        //       opacity: 0.5,
        //       duration: 1.5,
        //       stagger: 0.02,
        //       ease: 'power2.inOut',
        //     })

        //     tl.from(textSplit.words, {
        //       yPercent: 100,
        //       opacity: 0.5,
        //       duration: 1.5,
        //       stagger: 0.02,
        //       ease: 'power2.inOut'
        //     })


        //     tl.from(`#text-${i}`, {
        //       opacity: 0,
        //       duration: 1.5,
        //     }, '-=1')
        //   })
        // })
    
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


  <section bind:this={sectionEl} class="bg-gradient-to-b from-green to-dark-purple flex flex-col min-h-screen z-20">
    <div class="relative">
      <div bind:this={labelEl} class="bg-light-cyan text-xs  absolute top-0 left-12 sm:left-24 lg:left-1/2 -translate-x-1/2 z-20 w-16 h-16 lg:w-20 lg:h-20  flex  items-center justify-center "><p bind:this={labelTextEl}>project</p></div>
      <div bind:this={fixedEl} class="border-l-2 border-white w-px absolute top-0 left-12 sm:left-24 lg:left-1/2 -translate-x-1/2 z-10 h-full "><p class=""></p></div>
      <div class="flex flex-col w-full pl-28 sm:pl-60 pr-5 py-20 lg:px-20 lg:py-20 relative">
        {#each steps as step, i}
          <div
            class="step flex flex-col py-10 w-fit {i % 2 == 0 ? "lg:mr-auto lg:text-end" : "lg:ml-auto lg:text-start"}"
          >
            <div class="flex flex-col max-w-lg relative z-30 space-y-4">
              <div class="flex flex-col space-y-4 {i % 2 == 0 ? "lg:items-end" : "lg:items-start"}">
                <p id="number-{i}" class="text-8xl lg:text-9xl font-black text-light-cyan flex space-x-2 z-0">{step.id}.</p>
                <h2 id="heading-{i}" class=" text-2xl uppercase sm:text-3xl font-black text-light-cyan z-0">{step.title}</h2>
              </div>
              <p id="text-{i}" class="text-white text-base md:text-lg max-w-3xl z-0">{step.content}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
