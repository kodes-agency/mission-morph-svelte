<script lang="ts">
  import "../app.css";
  import gsap from "gsap/dist/gsap.js";
  import ScrollSmoother from "gsap/dist/ScrollSmoother.js";
  import ScrollTrigger from "gsap/dist/ScrollTrigger.js";
  import SplitText from "gsap/dist/SplitText.js";
  import Header from "$lib/components/global/Header.svelte";
  import Footer from "$lib/components/global/Footer.svelte";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import { fade, blur } from "svelte/transition";

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
  }

  let cursor: HTMLElement;
  let cursorLabel: string;
  let cursorLabelBold: string;
  let spinner: HTMLElement;

  let smoother: any;
  let interacting: any;
  let small: any;

  $: cursor;

  const animateCursor = (e: any, interacting: boolean, small?: any) => {
    const x = e.clientX - cursor.offsetWidth / 2,
      y = e.clientY - cursor.offsetHeight / 2;

    gsap.to(cursor, {
      transform: `translate(${x}px, ${y}px)`,
      height: `${interacting ? "100px" : "20px"}`,
      width: `${interacting ? "100px" : "20px"}`,
      duration: 0.3,
    });

    gsap.to(cursor, {
      scale: `${small ? "0.2" : "1"}`,
    });
  };

  onMount(() => {
    smoother = ScrollSmoother.create({
      smooth: 1.2, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      // smoothTouch: 0.1
    });

    smoother.effects("[data-speed], [data-lag]", {});

    let mm = gsap.matchMedia();
    // create the scrollSmoother before your scrollTriggers

    mm.add("(min-width: 1024px)", () => {
      window.onmousemove = (e) => {
        const interactable = e.target.closest(".interactable"),
          label = "";
        interacting = interactable !== null;
        const tiny = e.target.closest(".tiny");
        small = tiny !== null;

        if (interacting) {
          cursorLabel = interactable.dataset.label
            ? interactable.dataset.label
            : "";
          cursorLabelBold = interactable.dataset.labelbold
            ? interactable.dataset.labelbold
            : "";
        } else {
          cursorLabel = "";
          cursorLabelBold = "";
        }

        animateCursor(e, interacting, small);
      };

      window.onscroll = (e) => {
        cursorLabel = "";
        cursorLabelBold = "";
        gsap.to(cursor, {
          height: "20px",
          width: "20px",
        });
      };
    });

    let links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (!link.ariaDisabled) {
        link.addEventListener("click", (e) => {
          // if (
          //   e.ctrlKey ||
          //   e.shiftKey ||
          //   e.metaKey ||
          //   (e.button && e.button == 1) // middle click, >IE9 + everyone else
          //   ) {
          //     console.log('scroll'+window.scrollY)
          //   ScrollSmoother.get().scrollTo(window.scrollY)
          // } else {
          // }
          ScrollSmoother.get().scrollTop(0);
        });
      }
    });
  });

  afterNavigate(() => {
    ScrollSmoother.get().effects("[data-speed], [data-lag]", {});
    let links = document.querySelectorAll("a");

    links.forEach((link) => {
      if (!link.ariaDisabled) {
        link.addEventListener("click", (e) => {
          // if (
          //   e.ctrlKey ||
          //   e.shiftKey ||
          //   e.metaKey ||
          //   (e.button && e.button == 1) // middle click, >IE9 + everyone else
          // ) {
          //   return
          // } else {
          // }
          ScrollSmoother.get().scrollTop(0);
        });
      }
    });
  });
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<div
  id="cursor"
  class="fixed top-0 left-0 z-[1000] pointer-events-none h-5 w-5 rounded-full bg-light-cyan hidden md:flex items-center justify-center"
  bind:this={cursor}
>
  <div class="relative w-full h-full flex items-center justify-center">
    <div class="flex flex-col items-center justify-center space-y-1">
      {#if cursorLabel}
        <svg
          class=" animate-bounce"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 2C18.5 1.17157 17.8284 0.5 17 0.5H3.5C2.67157 0.5 2 1.17157 2 2C2 2.82843 2.67157 3.5 3.5 3.5H15.5V15.5C15.5 16.3284 16.1716 17 17 17C17.8284 17 18.5 16.3284 18.5 15.5V2ZM3.06066 18.0607L18.0607 3.06066L15.9393 0.93934L0.93934 15.9393L3.06066 18.0607Z"
            fill="black"
          />
        </svg>
      {/if}
      {#if cursorLabelBold}
        <p in:fade class=" leading-none text-xs font-bold text-center">
          {cursorLabelBold}
        </p>
      {/if}
      {#if cursorLabel}
        <p in:fade class=" leading-none text-xs text-center">{cursorLabel}</p>
      {/if}
    </div>
  </div>
</div>

<Header />
<div id="smooth-wrapper">
  <div id="smooth-content">
    <slot />
    <Footer />
  </div>
</div>
