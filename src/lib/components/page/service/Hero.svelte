<script lang="ts">
    import type { Maybe } from "../../../../__generated__/graphql";
    export let heading: Maybe<string> | undefined
    export let content: Maybe<string> | undefined
    export let alt: Maybe<string> | undefined
    export let src:  Maybe<string> | undefined
    export let category: Maybe<string> | undefined
    export let color: Maybe<string> | undefined
    export let scroll: string = "Don't be shy & scroll down ;)"


    const colors = {
        seoText: 'text-seo-text-color',
        seoBg: 'to-seo-bg-color',
        webText: 'text-web-text-color',
        webBg: 'to-web-bg-color',
    }
</script>

<section class=" bg-gradient-to-b from-dark-purple to-{color}-bg-color h-screen flex flex-col items-center justify-center relative">
    <img {src} {alt} class="absolute top-0 left-0 h-screen w-full object-cover z-0 opacity-20">
    <div class="flex flex-col justify-between h-full max-w-5xl relative z-10 py-10">
        <div></div>
        <div class="flex flex-col space-y-10">
            <span class="flex space-x-2">
                <p class="uppercase font-bold text-lg text-{color}-text-color">services:// </p>
                <p class="uppercase font-bold text-lg text-white">{category}</p>
            </span>
            <h1 class="text-8xl leading-[1.2] font-black text-white">{heading}</h1>
            <p class="text-white text-lg max-w-3xl">{content}</p>
        </div>
        <p class=" text-{color}-text-color underline text-sm w-full text-center">{scroll}</p>
    </div>
</section>
    