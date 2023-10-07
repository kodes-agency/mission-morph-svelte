<script lang="ts">
    
    export let figure: number = 55
    export let contet: string | undefined
    export let color: string | undefined

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

</script>

<section class=" bg-black flex flex-col px-[15vw] py-[20vh]">
    <div class="flex max-w-4xl items-center ">
        <div class="min-w-[300px] h-[300px] grid grid-cols-10 gap-3">
            {#each dotArray as dot }
                <div class="{dot ? "bg-white" : ""} h-4 w-4 border border-white rounded-full"></div>
            {/each}
        </div>
        <div class="w-full flex flex-col justify-center pl-16 ">
            <h1 class="text-{color}-text-color font-bold text-8xl pb-2">{figure}%</h1>
            <p class="text-white ">{contet}</p>
        </div>
    </div>
</section>
    