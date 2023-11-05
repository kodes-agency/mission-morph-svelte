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
  let divEls: NodeListOf<HTMLElement>;
  let serviceDivs: NodeListOf<HTMLElement>;
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
  let mobileCategoryEl: HTMLElement;

  let displayWidth: number;

  $: if (currentService) {
    smoother = ScrollSmoother.get();
  }

  function toggleService(i: any) {
    divEls.forEach((div) => {
      if (div.dataset.id != i) {
        div.style.visibility = "hidden";
      } else {
        div.style.visibility = "visible";
        activeService = i;
      }
    });
  }

  // afterUpdate(()=>{
  //   smoother.effects('[data-speed]')
  // })

  onMount(() => {
    displayWidth = window.innerWidth;

    toggleTl = gsap.timeline({
      revert: true,
    });

    divEls = document.querySelectorAll("[data-id]");
    serviceDivs = document.querySelectorAll(".service");
    headingEls = document.querySelectorAll(".heading");
    categoryEls = document.querySelectorAll(".category");
    textEls = document.querySelectorAll(".text");
    imgEls = document.querySelectorAll(".img");

    smoother = ScrollSmoother.get();

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

      gsap.set(headingEls[0], {
        lineHeight: 1.12,
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
  class="bg-gradient-to-b from-cyan to-magenta min-h-screen pt-40 flex justify-center"
>
  <div class="w-[85vw] max-w-5xl md:w-[80vw]">
    <div class="relative">
      <div data-speed="1.05" class="z-10 relative">
        {#each services as service, i}
          {#if currentService == i}
          <a href="/service/{service.attributes?.slug}" class="pointer-events-none lg:pointer-events-auto">
            <!-- in:fade={{ duration: 500 }} -->
            <h2
              class="interactable heading text-3xl absolute top-0 sm:text-5xl md:text-7xl lg:text-8xl font-black text-light-cyan z-20"
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
          {#if currentService == i}
          <a href="/service/{service.attributes?.slug}" class="pointer-events-none lg:pointer-events-auto">
            <!-- transition:blur={{ amount: 1000, duration: 1500, delay: 100 }} -->
            <img
              src={PUBLIC_IMG_URL +
                service.attributes?.homePageThumbnail?.data?.attributes?.url}
              alt={service.attributes?.homePageThumbnail?.data?.attributes
                ?.alternativeText}
              class="img interactable w-60 md:w-80 2xl:w-96 object-cover absolute -top-20 right-0 md:left-80 z-0"
              data-labelBold="explore"
              data-label={service.attributes?.homePageCursorLable}
            />
          </a>
          {/if}
        {/each}
      </div>
    </div>
    <div class="flex relative">
      <div
        class="flex flex-col absolute z-20 top-24 md:top-60 md:left-0 left-[4vw]"
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
      <div class="relative h-40" data-speed="1.05">
        {#each services as service, i}
          {#if currentService == i}
          <!-- transition:blur={{ amount: 20, duration: 1500 }} -->
          <div class=" text z-10 absolute top-72 md:top-64 md:left-[40vw] 2xl:left-[30vw]">
              <a href="/service/{service.attributes?.slug}" class="pointer-events-none lg:pointer-events-auto">
                <p
                  class="interactable text-base md:text-lg text-light-cyan w-[90vw] md:w-[350px] pb-10 lg:w-[500px] lg:font-light"
                  data-labelBold="explore"
                  data-label={service.attributes?.homePageCursorLable}
                >
                  {service.attributes?.homePageContent}
                </p>
              </a>
              <a class="border-b-2 lg:hidden border-medium-purple tiny text-light-cyan uppercase hover:scale-95 transition-all duration-200 text-xl font-bold" href="/service/{service.attributes?.slug}">Learn more</a>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>
