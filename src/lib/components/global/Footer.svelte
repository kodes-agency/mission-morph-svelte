<script lang="ts">
    import { onMount } from "svelte";
    import ScrollSmoother from 'gsap/dist/ScrollSmoother'

    onMount(()=>{
        let smoother = ScrollSmoother.get()
    })
</script>

<section
  class="bg-gradient-to-b flex flex-col justify-end from-black to-dark-purple min-h-[50vh] -mt-px"
>
    <div class="flex h-full flex-col items-start md:items-center justify-end pt-20 pb-5 space-y-10 px-5">
      <div class="flex flex-col md:flex-row space-x-0 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-24 ">
        <div class="flex flex-col space-y-3 md:space-y-0">
            <p class=" uppercase font-bold text-medium-purple text-xl">Pages://</p>
            <a href="/" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Home</a>
            <a href="/about" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">About us</a>
            <a href="/blog" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Blog</a>
            <a href="/faq" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">FAQ</a>
        </div>
        <div class="flex flex-col space-y-3 md:space-y-0">
            <p class=" uppercase font-bold text-medium-purple text-xl">Services://</p>
            <a href="/service/brand-design" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Brand design</a>
            <a href="/service/web-design-development" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Web development</a>
            <a href="/service/search-engine-optimization" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Local & Organic SEO</a>
        </div>
        <div class="flex flex-col space-y-3 md:space-y-0">
            <p class=" uppercase font-bold text-medium-purple text-xl">Social://</p>
            <a data-sveltekit-noscroll href="https://twitter.com/MissionMorph" target="_blank" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Twitter</a>
            <a data-sveltekit-noscroll href="https://www.linkedin.com/company/mission-morph/" target="_blank" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">LinkedIn</a>
            <a data-sveltekit-noscroll href="https://www.facebook.com/missionmorph" target="_blank" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Facebook</a>
            <a data-sveltekit-noscroll href="https://www.instagram.com/missionmorphofficial/" target="_blank" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Instagram</a>
        </div>
        <address class="flex flex-col not-italic space-y-3 md:space-y-0">
            <p class=" uppercase font-bold text-medium-purple text-xl">Contact://</p>
            <a data-sveltekit-noscroll href="tel:+13053074684" target="_blank" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">+1 (305) 307-4684</a>
            <a data-sveltekit-noscroll href="mailto:office@missionmorph.com" target="_blank" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">office@missionmorph.com</a>
            <a data-sveltekit-noscroll href="https://www.google.com/maps?cid=644257195768476569" target="_blank" class="uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">162 NE 25th St, Miami, FL 33137</a>
        </address>
      </div>

      <div class="flex w">
        <p class="text-medium-purple text-center">
          ©2023 Mission Morph. All rights Reserved. <a
            class="hover:text-web-text-color tiny"
            href="/policy">Privacy Policy.</a
          >
          <a
            class="hover:text-web-text-color tiny"
            href="/cookies">Cookie Policy.</a
          >
        </p>
      </div>
    </div>
</section>
