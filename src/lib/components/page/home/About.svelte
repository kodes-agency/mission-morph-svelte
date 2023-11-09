<script lang="ts">
  import { onMount } from "svelte";
    import type { Maybe } from "../../../../__generated__/graphql";
    import  ScrollSmoother  from 'gsap/dist/ScrollSmoother'
    import  gsap  from 'gsap/dist/gsap'
    import { animateText, anmCleanUp} from '$lib/functions/textAnimation'

    export let heading: Maybe<string> | undefined
    export let content: Maybe<string> | undefined
    export let src: Maybe<string> | undefined
    export let alt: Maybe<string> | undefined
    import { page } from "$app/stores";
    $: images = $page.data.data.homePage?.data.attributes

    let headingEl: HTMLElement
    let textEl:HTMLElement
    let sectionEl: HTMLElement

    onMount(()=>{
        let smoother = ScrollSmoother.get()

        let ctx = animateText(sectionEl, headingEl, textEl)

        return ()=>{
            anmCleanUp()
        }
    })
</script>

<section bind:this={sectionEl} class="bg-gradient-to-b from-light-purple to-cyan min-h-screen flex flex-col justify-center items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="p-6 max-w-3xl space-y-10 flex flex-col">
        <!-- <div class="relative  w-96 h-72 -mb-[105px] ml-[50px]  lg:-mb-[125px] lg:-ml-[280px]">
            <img data-speed="0.95" class="absolute w-96 h-72" src="{PUBLIC_IMG_URL+images.images[0]?.image?.data[0]?.attributes?.url}" alt="">
            <img data-speed="0.92" class="absolute w-80 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src="{PUBLIC_IMG_URL+images.images[0]?.image?.data[1]?.attributes?.url}" alt="">
        </div> -->
        <img data-speed="0.95" {src} {alt} class="-mb-[105px] ml-auto  lg:-mb-[125px] lg:-ml-[280px] w-56 md:w-80 z-0">
        <h2 bind:this={headingEl} data-speed="1.05" class="text-6xl md:text-8xl uppercase font-black text-light-cyan relative z-1">{heading}</h2>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <p bind:this={textEl} data-speed="1.05" class="text-light-cyan text-lg max-w-md font-light relative z-1">{content}</p>
        <a on:click={()=>{ScrollSmoother.get().scrollTop(0)}} aria-label="About us page - Mission Morph - Miami's ultimate digital agency" data-speed="1.05" href="/about" class="text-light-cyan underline text-lg md:text-xl font-bold tiny">Read more</a>
    </div>
</section>
     