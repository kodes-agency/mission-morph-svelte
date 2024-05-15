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

    let testEl: HTMLElement

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
            let headingSplit = new SplitText(".headingEl", {
                    type: 'lines',
                }
            )

            new SplitText(".headingEl", {
                    type: 'lines',
                    linesClass: 'headingLines',
                }
            )
    
            gsap.set('.headingLines', {
                overflow: 'hidden'
            })
    
            gsap.set(".headingEl", {
                opacity: 1
            })
    
            gsap.from(headingSplit.lines, {
                delay: 0.5,
                yPercent: 100,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.inOut',
            })
        })

        return ()=>{
            ctx.revert()
        }
    })
</script>

<section class=" bg-gradient-to-b from-dark-purple to-light-purple h-screen flex flex-col items-center justify-center p-6 md:p-10 relative z-0">
    <div class="flex flex-col justify-between h-full max-w-5xl relative z-20">
        <div></div>
        <div class="space-y-5 flex flex-col items-center">
            <h1 bind:this={headingEl} data-speed='1.05' class="headingEl text-4xl text-center md:text-6xl uppercase lg:text-7xl font-black opacity-0 transition-all text-light-cyan">On the look <br> for growth?<br> 
            </h1>
            <p class="headingEl text-2xl md:text-3xl font-medium text-center opacity-0 transition-all text-light-cyan">
                Scroll down to find out how <br> we make sure the numbers go up.
            </p>
        </div>
        <p class=" text-light-cyan underline text-sm w-full text-center">Your Digital Transformation Starts Here</p>
    </div>
    <div bind:this={testEl} data-speed="0.90" class="absolute top-16 md:top-20 left-10 overflow-hidden w-52 md:w-80 md:left-40 z-0">
        <img bind:this={vectorLarge} class="" width="357px" height="357px" src="{PUBLIC_IMG_URL+imgLarge.url +"?format=webp&width=600"}" alt="{imgLarge.alternativeText}">
    </div>
    <div data-speed="0.92" class="mix-blend-luminosity w-40 absolute bottom-32 md:bottom-40 overflow-hidden right-32 md:right-40 z-10">
        <img bind:this={vectorMedium} width="218px" height="218px" src="{PUBLIC_IMG_URL+imgMedium.url +"?format=webp&width=500"}" alt="{imgMedium.alternativeText}">
    </div>
    <div data-speed="0.95" class="mix-blend-luminosity absolute bottom-10 right-10 w-12 md:w-auto overflow-hidden md:right-auto md:left-96 z-0">
        <img bind:this={vectorSmall} width="97px" height="97px" src="{PUBLIC_IMG_URL+imgSmall.url +"?format=webp&width=400"}" alt="{imgSmall.alternativeText}">
    </div>
</section>
    