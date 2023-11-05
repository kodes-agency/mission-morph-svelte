<script lang="ts">
    import gsap from 'gsap/dist/gsap'
    import ScrollTrigger from 'gsap/dist/ScrollTrigger'
    import ScrollSmoother from 'gsap/dist/ScrollSmoother'
    import { onMount } from 'svelte';

    export let figure: number = 55
    export let contet: string | undefined
    export let color: string | undefined
    export let id: string | undefined

    const colors = {
        seoText: 'text-seo-text-color',
        seoBg: 'to-seo-bg-color',
        webText: 'text-web-text-color',
        webBg: 'to-web-bg-color',
    }


    $: dots = 100 - figure
    
    let dotArray: number[] = []

    for (let i = 0; i < figure; i ++) {
        dotArray.push(1)
    }

    for(let i=0; i < 100 - figure; i ++){
        dotArray.push(0)
    }

    let section:HTMLElement
    let number: HTMLElement
    let text: HTMLElement

    onMount(()=>{
        const ctx = gsap.context(()=>{
            let dots = gsap.utils.toArray(`.dots-${id}`)
            let smoother = ScrollSmoother.get()
    
            let tl = gsap.timeline({            
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "center center",
                    scrub: 1
                },})
    
            tl.to(dots, {
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "center center",
                    scrub: 1
    
                },
                height: '16px',
                stagger: 0.03,
                duration: 1,
            })
    
            tl.from(number, {
                innerText: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "center center",
                    scrub: 1
                },
                snap: {
                    innerText: 1
                }
            })
    
            tl.from(text, {
                opacity: 0,
                duration: 1.5
            }, '+=1')
        }, section)

        return ()=>{
            ctx.revert()
        }
    })

</script>

<section bind:this={section} class=" bg-black flex flex-col px-10 md:px-[10vw] lg:px-[15vw] py-[20vh]">
    <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 max-w-4xl md:items-center ">
        <div data-speed='0.95' class="min-w-[300px] w-[300px] h-[300px] grid grid-cols-10 gap-0 md:gap-3">
            {#each dotArray as dot }
                <div class="h-4 w-4 border border-white rounded-full overflow-hidden">
                    {#if dot }
                        <div class="dots-{id} bg-white w-4 h-0">
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
        <div data-speed="1.05" class="w-full flex flex-col md:justify-center md:pl-8 lg:pl-16 ">
            <div class="flex">
                <h1 bind:this={number} class="text-{color}-text-color text-{id} font-bold text-7xl w-32 md:text-8xl text-end pb-2">{Number(figure)}</h1>
                <h1 class="text-{color}-text-color text-{id} font-bold text-7xl md:text-8xl pb-2">%</h1>
            </div>
            <p bind:this={text} class="text-white ">{contet}</p>
        </div>
    </div>
</section>
    