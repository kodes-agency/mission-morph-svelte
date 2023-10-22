<script lang="ts">
    import { onMount } from "svelte";
    import { PUBLIC_IMG_URL } from "$env/static/public";
    import type { Maybe } from "../../../../__generated__/graphql";
    import gsap from 'gsap/dist/gsap'
    import SplitText from 'gsap/dist/SplitText'
    import ScrollSmoother  from 'gsap/dist/ScrollSmoother'
    export let heading: Maybe<string> | undefined
    export let scroll: string = "Don't be shy & scroll down ;)"
    export let imgLarge:any
    export let imgMedium:any
    export let imgSmall:any

    const spinningLarge = [
        { transform: "rotate(0)" },
        { transform: "rotate(360deg)"  },
    ];

    const timingLarge = {
        duration: 200000,
        iterations: Infinity,
    };


    const spinningMedium = [
        { transform: "rotate(0)" },
        { transform: "rotate(360deg)" },
    ];

    const timingMedium = {
        duration: 100000,
        iterations: Infinity,
    };

    const spinningSmall = [
        { transform: "rotate(0)" },
        { transform: "rotate(360deg)" },
    ];

    const timingSmall = {
        duration: 50000,
        iterations: Infinity,
    };

    let vectorLarge: HTMLElement
    let vectorMedium: HTMLElement
    let vectorSmall: HTMLElement
    let headingEl: HTMLElement

    onMount(()=>{
        vectorLarge.animate(spinningLarge, timingLarge);
        vectorMedium.animate(spinningMedium, timingMedium);
        vectorSmall.animate(spinningSmall, timingSmall);

        let smoother = ScrollSmoother.get()

        const ctx = gsap.context(()=>{
            let headingSplit = new SplitText(headingEl, {
                    type: 'lines, chars',
                }
            )
            new SplitText(headingEl, {
                    type: 'lines',
                    linesClass: 'headingLines'
                }
            )
    
            gsap.set('.headingLines', {
                overflow: 'hidden'
            })
    
            gsap.set(headingEl, {
                opacity: 1
            })
    
            gsap.from(headingSplit.chars, {
                delay: 0.5,
                yPercent: 100,
                duration: 2,
                stagger: 0.02,
                ease: 'power4.inOut',
            })
        })

        return ()=>{
            ctx.revert()
        }
    })
</script>

<section class=" bg-gradient-to-b from-dark-purple to-light-purple h-screen flex flex-col items-center justify-center p-6 md:p-10 relative">
    <div class="flex flex-col justify-between h-full max-w-5xl relative z-10">
        <div></div>
        <h1 bind:this={headingEl} data-speed='1.05' class="text-5xl text-center md:text-6xl md:text-start lg:text-8xl font-black opacity-0 transition-all text-light-cyan">{heading}</h1>
        <p class=" text-light-cyan underline text-sm w-full text-center">{scroll}</p>
    </div>
    <div data-speed="0.90" class="absolute top-20 left-40 z-0 mix-blend-luminosity">
        <img bind:this={vectorLarge} src="{PUBLIC_IMG_URL+imgLarge.url}" alt="{imgLarge.alternativeText}">
    </div>
    <div data-speed="0.92" class="mix-blend-luminosity absolute bottom-40 right-40 z-0">
        <img bind:this={vectorMedium} src="{PUBLIC_IMG_URL+imgMedium.url}" alt="{imgMedium.alternativeText}">
    </div>
    <div data-speed="0.95" class="mix-blend-luminosity absolute bottom-10 left-96 z-0">
        <img bind:this={vectorSmall} src="{PUBLIC_IMG_URL+imgSmall.url}" alt="{imgSmall.alternativeText}">
    </div>
</section>
    