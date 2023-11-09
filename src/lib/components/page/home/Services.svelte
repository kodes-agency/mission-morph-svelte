<script lang="ts">
  import type { ServiceEntity } from "../../../../__generated__/graphql";
  import ScrollSmoother from "gsap/dist/ScrollSmoother";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { afterUpdate, onMount } from "svelte";
  import gsap from "gsap/dist/gsap";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import SplitText from "gsap/dist/SplitText";
  import { crossfade, fade, slide, blur } from "svelte/transition";

  export let services: Array<ServiceEntity>;

  let currentService: number = 0;
  let smoother: any;
    
  let divEls: NodeListOf<HTMLElement>;
  let serviceDivs: NodeListOf<HTMLElement>;
  let sectionEl: HTMLElement;
  let headingEls: NodeListOf<HTMLElement>;
  let textEls: NodeListOf<HTMLElement>;
  let imgEls: NodeListOf<HTMLElement>;
  let categoryEls: NodeListOf<HTMLElement>;
  let entranceTl: any;
  let toggleTl: any;

  let mobileCategoryEl: HTMLElement;

  let displayWidth: number;

  $: if (currentService) {
    smoother = ScrollSmoother.get();
  }

  function toggleService(i: any) {
    divEls.forEach((divEl) => {
      if (divEl.dataset.id != i) {
        divEl.style.visibility = "hidden";
      } else {
        divEl.style.visibility = "visible";
        currentService = i;
      }
    });

    
  }


  onMount(() => {
    divEls = document.querySelectorAll("[data-id]");
    serviceDivs = document.querySelectorAll(".service");
    headingEls = document.querySelectorAll(".heading");
    categoryEls = document.querySelectorAll(".category");
    textEls = document.querySelectorAll(".text");
    imgEls = document.querySelectorAll(".img");

    displayWidth = window.innerWidth;

    smoother = ScrollSmoother.get();

    toggleTl = gsap.timeline({
      revert: true,
    });


    divEls.forEach((div) => {
      if (Number(div.dataset.id) != currentService) {
        div.style.visibility = "hidden";
      } else {
        div.style.visibility = "visible";
      }
    });

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
        ease: "power2.inOut",
      });

      let splitText = new SplitText(headingEls[0], {
        type: "lines",
      });

      new SplitText(headingEls[0], {
        type: "lines",
        linesClass: "splitHeadingClass",
      });

      gsap.set(".splitHeadingClass", {
        overflow: "hidden",
      });

      entranceTl.from(
        splitText.lines,
        {
          yPercent: 100,
          opacity: 0.5,
          duration: 1.5,
          stagger: 0.1,
          ease: "power2.inOut",
        },
        "-=1.2"
      );

      entranceTl.from(textEls[0], {
        opacity: 0,
        duration: 2
      }, '-=1')
    });

    return () => {
      ctx.revert();
    };
  });
</script>

<section
  bind:this={sectionEl}
  class="bg-gradient-to-b from-cyan to-magenta min-h-[130vh] md:min-h-screen pt-40 flex justify-center"
>
  <div class="w-[85vw] max-w-5xl md:w-[80vw] flex flex-col space-y-5  md:space-y-10 lg:space-y-20">
    <div class="relative">
      <div data-speed="1.05" class="z-10 relative">
        {#each services as service, i}
          {#if currentService == i}
          <a href="/service/{service.attributes?.slug}" class="pointer-events-none lg:pointer-events-auto">
            <!-- in:fade={{ duration: 500 }} -->
            <h2
              in:fade={{ duration: 500 }}
              class="interactable heading text-4xl uppercase top-0 leading-snug sm:text-5xl md:text-7xl 2xl:text-8xl font-black text-light-cyan z-20"
              data-labelBold="explore"
              data-label={service.attributes?.homePageCursorLable}
            >
              {service.attributes?.homePageCTA}
            </h2>
          </a>
          {/if}
        {/each}
      </div>
      <div data-speed="0.95" class="z-0 relative">
        {#each services as service, i}
          <a aria-label="{service.attributes?.homePageCursorLable} page" href="/service/{service.attributes?.slug}" class="pointer-events-none lg:pointer-events-auto">
            <img
              in:blur={{ amount: 1000, duration: 1500}}
              out:blur={{ amount: 1000, duration: 1500}}
              src={PUBLIC_IMG_URL +
                service.attributes?.homePageThumbnail?.data?.attributes?.url+"?format=webp&width=600"}
              alt={service.attributes?.homePageThumbnail?.data?.attributes
                ?.alternativeText}
              class="img interactable w-60 md:w-80 2xl:w-96 object-cover absolute -top-40 right-0 md:left-40 lg:left-80 z-0"
              data-labelBold="explore"
              data-label={service.attributes?.homePageCursorLable}
              data-id={i}
            />
          </a>
        {/each}
      </div>
    </div>
    <div class="flex flex-col space-y-5 md:space-y-0 md:flex-row w-full md:space-x-10 lg:space-x-20 xl:space-x-40 relative">
      <div
        class="flex flex-col z-20 top-24 md:top-60 md:left-0 left-[4vw]"
        data-speed="1.05"
      >
        {#each services as service, i}
          {#if displayWidth < 1024}
            <button
              class="category tiny my-1 mr-5 w-fit relative text-start font-black text-light-cyan uppercase text-xl md:text-2xl lg:text-3xl p-1 {i ==
              Number(currentService)
                ? 'text-opacity-100 border-b-4 border-medium-purple '
                : ' text-opacity-50 border-b-4 border-[rgba(0,0,0,0)]'}"
              on:click={() => {
                toggleService(i);
                currentService = i;
              }}>{service.attributes?.homePageTitle}</button
            >
          {:else}
            <a
              href="/service/{service.attributes?.slug}"
              class="category tiny my-1 lg:my-2 mr-5 w-fit relative font-black text-light-cyan uppercase md:text-2xl lg:text-3xl lg:p-1
              {i == Number(currentService)
                ? 'text-opacity-100 border-b-4 border-medium-purple '
                : ' text-opacity-50 border-b-4 border-[rgba(0,0,0,0)]'}"
              on:mouseenter={async () => {
                toggleService(i);
                currentService = i;
              }}>{service.attributes?.homePageTitle}</a
            >
          {/if}
        {/each}
      </div>
      <div class="h-40 relative" data-speed="1.05">
        {#each services as service, i}
          <div class="text z-10 absolute" data-id={i}>
            <a href="/service/{service.attributes?.slug}" class="pointer-events-none lg:pointer-events-auto">
              <p
                class="interactable text-lg sm:text-base lg:text-lg text-light-cyan w-[90vw] md:w-[320px] lg:w-[400px] pb-10 pr-5 xl:w-[500px] lg:font-light"
                data-labelBold="explore"
                data-label={service.attributes?.homePageCursorLable}
              >
                {service.attributes?.homePageContent}
              </p>
            </a>
            <a class="border-b-2 lg:hidden border-medium-purple tiny text-light-cyan uppercase hover:scale-95 transition-transform duration-200 text-xl font-bold" aria-label="{service.attributes?.homePageCursorLable} page" href="/service/{service.attributes?.slug}">Learn more</a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
