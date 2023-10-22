<script lang="ts">
    import type { Maybe } from "../../../../__generated__/graphql";
    import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
    import { onMount } from "svelte";
    export let heading: Maybe<string> | undefined
    export let content: Maybe<string> | undefined
    export let alt: Maybe<string> | undefined
    export let src:  Maybe<string> | undefined
    export let category: Maybe<string> | undefined
    export let color: Maybe<string> | undefined
    export let scroll: string = "Don't be shy & scroll down ;)"

    onMount(()=>{
        let smoother = ScrollSmoother.get()
    })


    const colors = {
        seoText: 'text-seo-text-color',
        seoBg: 'to-seo-bg-color',
        webText: 'text-web-text-color',
        webBg: 'to-web-bg-color',
        brandText: 'text-brand-text-color',
        brandBg: 'to-brand-bg-color',
    }
</script>

<section class="pt-10 bg-gradient-to-b from-dark-purple to-{color}-bg-color min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
    <img data-speed="0.95" {src} {alt} class="absolute top-0 left-0 h-full w-full object-cover z-0 opacity-20">
    <div data-speed="1.05" class="flex flex-col justify-between h-full max-w-5xl relative z-10 py-10">
        <div></div>
        <div class="flex flex-col space-y-10 p-6">
            <span class="flex space-x-2">
                <p class="uppercase font-bold text-sm md:text-lg text-{color}-text-color">services:// </p>
                <p class="uppercase font-bold text-sm md:text-lg text-white">{category}</p>
            </span>
            <h1 class="text-3xl md:text-5xl lg:text-8xl leading-[1.2] font-black text-white">{heading}</h1>
            <p class="text-white md:text-lg max-w-3xl">{content}</p>
        </div>
        <p class=" text-{color}-text-color underline text-sm w-full text-center pt-20">{scroll}</p>
    </div>
</section>
    