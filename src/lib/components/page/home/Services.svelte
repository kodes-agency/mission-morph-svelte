<script lang="ts">
  import type { ServiceEntity } from "../../../../__generated__/graphql";
  import ScrollSmoother from "gsap/dist/ScrollSmoother";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { onMount } from "svelte";
  import gsap from "gsap/dist/gsap";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import SplitText from "gsap/dist/SplitText";
  import { fade } from "svelte/transition";

  export let services: Array<ServiceEntity>;
  let serviceDivs: HTMLElement[];
  let activeService = 0;
  let smoother: any;
  let currentService: number = 0;
  let sectionEl: HTMLElement;
  let headingEls: NodeListOf<HTMLElement>;
  let textEls: NodeListOf<HTMLElement>;
  let imgEls: NodeListOf<HTMLElement>;
  let categoryEls: NodeListOf<HTMLElement>;
  let entranceTl: any;
  let toggleTl: any;

  toggleTl = gsap.timeline({
    revert:true
  })

  
  function toggleService(i: any) {
    serviceDivs.forEach((div) => {
      if (div.dataset.id != i) {
        div.style.visibility = "hidden";
      } else {
        div.style.visibility = "visible";
        activeService = i;
      }
    });
  }




  onMount(() => {
    // @ts-ignore
    serviceDivs = document.querySelectorAll(".service");
    headingEls = document.querySelectorAll(".heading");
    categoryEls = document.querySelectorAll(".category");
    textEls = document.querySelectorAll(".text");
    imgEls = document.querySelectorAll(".img");

    smoother = ScrollSmoother.get();

    const ctx = gsap.context(() => {
      entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top +=400",
          end: "+=500",
        },
      });


      entranceTl.from(categoryEls, {
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power2.inOut',
      })

            

      headingEls.forEach((heading) => {
        gsap.set(heading, {
            lineHeight: 1.12,
          });
        if(Number(heading.dataset.id) == currentService) {
          let splitText = new SplitText(heading, {
            type: "lines",
          });
  
          new SplitText(heading, {
            type: "lines",
            linesClass: "splitHeadingClass",
          });
  
          gsap.set(".splitHeadingClass", {
            overflow: "hidden",
          });
          entranceTl.from(splitText.lines, {
            yPercent: 100,
            opacity: 0.5,
            duration: 1.5,
            stagger: 0.1,
            ease: 'power2.inOut',
          }, '-=1.2')
        }
      });

      textEls.forEach((text)=>{
        if(Number(text.dataset.id) == currentService) {
          entranceTl.from(textEls, {
              opacity: 0,
              duration: 2,
              stagger: 0.1,
              ease: 'power2.inOut',
          }, '-=1')
        }
      })
    });

    return () => {
      ctx.revert();
    };
  });

</script>

<section
  bind:this={sectionEl}
  class="bg-gradient-to-b from-cyan to-magenta min-h-screen flex flex-col lg:items-center lg:justify-center"
>
  <div class="max-w-5xl w-full h-full relative pt-20">
    <div class="flex flex-col pl-10 absolute z-20 top-80" data-speed="1.05">
      {#each services as service, i}
        <a
          href="/service/{service.attributes?.slug}"
          class="category tiny my-2 mr-5 w-fit relative font-black text-light-cyan uppercase lg:text-3xl p-1 {i ==
          Number(currentService)
            ? 'text-opacity-100 border-b-4 border-medium-purple '
            : ' text-opacity-50 border-b-4 border-[rgba(0,0,0,0)]'}"
          on:mouseenter={async () => {
            toggleService(i);
            currentService = i;
          }}>{service.attributes?.homePageTitle}</a
        >
      {/each}
    </div>
    <div class="relative w-full h-screen">
      {#each services as service, i}
        <article
          data-id={i}
          class="service absolute max-w-5xl top-0 left-0 {currentService !== i
            ? 'invisible'
            : 'visible'}"
        >
          <a
            in:fade
            href="/service/{service.attributes?.slug}"
            class="interactable"
            data-labelBold="explore"
            data-label={service.attributes?.homePageCursorLable}
          >
            <div class="relative space-y-10 min-h-screen">
              <h2
                data-id={i}
                data-speed="1.05"
                class="heading z-10 relative text-5xl md:text-8xl font-black text-light-cyan"
              >
                {service.attributes?.homePageCTA}
              </h2>
              <div
                data-speed="1.05"
                class="flex justify-end z-10 relative w-[70vw]"
              >
                <p
                  data-id={i}

                  class="z-10 text text-lg text-light-cyan max-w-lg lg:font-light"
                >
                  {service.attributes?.homePageContent}
                </p>
              </div>
              <img
                data-speed="0.95"
                src={PUBLIC_IMG_URL +
                  service.attributes?.homePageThumbnail?.data?.attributes?.url}
                alt={service.attributes?.homePageThumbnail?.data?.attributes
                  ?.alternativeText}
                class="img w-52 h-72 object-cover lg:w-80 lg:h-auto absolute -top-20 left-1/4 z-0"
              />
            </div>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>
