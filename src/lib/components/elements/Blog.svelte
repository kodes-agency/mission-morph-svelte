<script lang="ts">
    import type { Maybe } from "../../../__generated__/graphql";
    import formatDate from "$lib/functions/formatDate";
    export let src: Maybe<string>
    export let alt: Maybe<string>
    export let category: any
    export let title: Maybe<string>
    export let date: Maybe<string>
    export let id: Maybe<string> | Maybe<number>
    export let slug: Maybe<string>
</script>

<a href="/blog/{slug}">
    {#if Number(id) % 3 === 0 && id != 0 } 
        <article class="border border-black bg-black flex flex-col ">
            <div class="p-4 w-full flex flex-col justify-between h-full">
                <div class="pb-10">
                    <div class="flex space-x-3">
                        {#each category as category }
                            <p class="text-white py-4 font-serif">{category.attributes.category}</p>
                        {/each}
                    </div>
                    <h3 class="text-white text-2xl font-medium">{title}</h3>
                </div>
                <div class=" flex justify-between w-full">
                    <p class="text-white font-serif">{formatDate(date)}</p>
                    <p class="text-white  underline font-bold">read more</p>
                </div>
            </div>
        </article>
    {:else}
        <article class="border border-black flex flex-col ">
            <img {src} {alt} class="w-full h-60 object-cover">
            <div class="p-4 w-full flex flex-col justify-between h-full">
                <div class="pb-10">
                    <div class="flex space-x-3">
                        {#each category as category }
                            <p class="py-4 font-serif">{category.attributes.category}</p>
                        {/each}
                    </div>
                    <h3 class="text-2xl font-medium">{title}</h3>
                </div>
                <div class="flex justify-between w-full">
                    <p class="font-serif">{formatDate(date)}</p>
                    <p class=" underline font-bold">read more</p>
                </div>
            </div>
        </article>
    {/if}
    
</a>