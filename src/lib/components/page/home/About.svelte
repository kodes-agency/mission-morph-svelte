<script lang="ts">
    import type { Maybe } from "../../../../__generated__/graphql";
    export let heading: Maybe<string> | undefined
    export let content: Maybe<string> | undefined
    export let src: Maybe<string> | undefined
    export let alt: Maybe<string> | undefined
</script>

<section class="bg-gradient-to-b from-light-purple to-cyan min-h-screen flex flex-col justify-center items-center">
    <div class="p-6 max-w-3xl space-y-10 flex flex-col">
        <img {src} {alt} class="-mb-[105px] ml-[50px]  lg:-mb-[125px] lg:-ml-[280px] w-60 md:w-80 z-0">
        <h2 class="text-6xl md:text-8xl font-black text-light-cyan relative z-1">{heading}</h2>
        <p class="text-light-cyan text-lg max-w-md font-light relative z-1">{content}</p>
        <a href="/about" class="text-light-cyan underline text-lg md:text-xl font-bold">Read more</a>
    </div>
</section>
     