<script lang="ts">
    import { onMount } from "svelte";
    import ScrollSmoother from 'gsap/dist/ScrollSmoother'

    onMount(()=>{
        let smoother = ScrollSmoother.get()
    })
</script>

<section
  class="bg-gradient-to-b flex flex-col justify-end from-black to-dark-purple min-h-[50vh]"
>
    <div class="flex h-full flex-col items-start md:items-center justify-end pt-20 pb-5 space-y-10 px-5">
      <div class="flex flex-col md:flex-row space-x-0 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-24 ">
        <div class="flex flex-col space-y-1 md:space-y-0">
            <p class=" uppercase font-bold text-medium-purple text-xl">Pages://</p>
            <a href="/" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Home</a>
            <a href="/about" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Abouts us</a>
            <a href="/blog" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Blog</a>
            <a href="/faq" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">FAQ</a>
        </div>
        <div class="flex flex-col space-y-1 md:space-y-0">
            <p class=" uppercase font-bold text-medium-purple text-xl">Services://</p>
            <a href="/service/brand-design" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Brand design</a>
            <a href="/service/web-design-development" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Web development</a>
            <a href="/service/search-engine-optimization" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Local & Organic SEO</a>
        </div>
        <div class="flex flex-col space-y-1 md:space-y-0">
            <p class=" uppercase font-bold text-medium-purple text-xl">Social://</p>
            <a href="/" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">LinkedIn</a>
            <a href="/" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Facebook</a>
            <a href="/" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Instagram</a>
        </div>
        <div class="flex flex-col space-y-1 md:space-y-0">
            <p class=" uppercase font-bold text-medium-purple text-xl">Contact://</p>
            <a href="tel:(555) 555-1234" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">(555) 555-1234</a>
            <a href="mailto:hello@missionmorph.com" class=" uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">hello@missionmorph.com</a>
            <p class="uppercase text-medium-purple lg:text-lg hover:text-white transition-colors duration-200 tiny">Miami, Florida</p>
        </div>
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
