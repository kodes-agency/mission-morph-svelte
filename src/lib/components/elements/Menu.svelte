<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let links: NodeListOf<HTMLElement>

  onMount(() => {
    links = document.querySelectorAll(".links");
  });

  function mouseEnterBlur(e: Event) {
    links.forEach((link) => {
      if (link !== e.target) {
        link.style.filter = "blur(4px)";
        link.style.opacity = "0.4";
      } else {
        link.style.filter = "blur(0px)";
        link.style.opacity = "1";
      }
    });
  }

  function mouseLeaveBlur(e: Event) {
    links.forEach((link) => {
      link.style.filter = "blur(0px)";
      link.style.opacity = "1";
    });
  }
</script>

<section
  class="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-[100] backdrop-blur-sm"
>
  <div class="bg-light-cyan h-1/2 pl-20 flex flex-col justify-around">
    <div class="flex space-x-60 items-center">
      <div class="flex flex-col space-y-3">
        <p class="transition-all duration-150 font-bold uppercase text-4xl">
          PAGES://
        </p>
        <a
          on:mouseenter={(e) => {
            mouseEnterBlur(e);
          }}
          on:mouseleave={(e) => {
            mouseLeaveBlur(e);
          }}
          class="links transition-all duration-150 uppercase text-4xl {$page
            .route.id == '/'
            ? 'italic'
            : 'not-italic'} "
          href="/">Home</a
        >
        <a
          on:mouseenter={(e) => {
            mouseEnterBlur(e);
          }}
          on:mouseleave={(e) => {
            mouseLeaveBlur(e);
          }}
          class="links transition-all duration-150 uppercase text-4xl"
          href="/about">About</a
        >
        <a
          on:mouseenter={(e) => {
            mouseEnterBlur(e);
          }}
          on:mouseleave={(e) => {
            mouseLeaveBlur(e);
          }}
          class="links transition-all duration-150 uppercase text-4xl"
          href="/blog">Blog</a
        >
      </div>
      <div class="flex flex-col space-y-3">
        <p class="transition-all duration-150 font-bold uppercase text-4xl">
          SERVICES://
        </p>

        <a
          on:mouseenter={(e) => {
            mouseEnterBlur(e);
          }}
          on:mouseleave={(e) => {
            mouseLeaveBlur(e);
          }}
          class="links transition-all duration-150 uppercase text-4xl"
          href="/service/web-design-development">Web Development</a
        >
        <a
          on:mouseenter={(e) => {
            mouseEnterBlur(e);
          }}
          on:mouseleave={(e) => {
            mouseLeaveBlur(e);
          }}
          class="links transition-all duration-150 uppercase text-4xl"
          href="/service/brand-design">Branding & Design</a
        >
        <a
          on:mouseenter={(e) => {
            mouseEnterBlur(e);
          }}
          on:mouseleave={(e) => {
            mouseLeaveBlur(e);
          }}
          class="links transition-all duration-150 uppercase text-4xl"
          href="/service/search-engine-optimization">Local & Organic SEO</a
        >
      </div>
    </div>
    <div class="flex">
      <p>
        ©2023 Mission Morph. All rights Reserved. <a
          class="hover:underline hover:font-bold"
          href="/privacy">Privacy Policy</a
        >
      </p>
    </div>
  </div>
</section>

<style>
</style>
