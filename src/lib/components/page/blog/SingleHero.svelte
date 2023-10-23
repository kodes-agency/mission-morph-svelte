<script lang="ts">
    import formatDate from "$lib/functions/formatDate";
    export let title: string
    export let date: Date
    export let categories: any
    export let src: string
    export let alt: string
</script>

<section class="flex flex-col-reverse lg:flex-col space-y-6 md:space-y-10 min-w-[30vw]">
    <h1 class="text-4xl md:text-5xl lg:text-5xl font-serif font-medium text-black">{title}</h1>
    <div class="flex py-2 justify-between w-full">
        <p class=" text-base font-serif">{formatDate(date)}</p>
        <span class=" flex space-x-2">
            {#each categories as category }
                <p class=" text-black font-serif">{category.attributes.category}</p>
            {/each}
        </span>
    </div>
    <img {src} {alt} class="w-full">
</section>