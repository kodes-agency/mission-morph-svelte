<script lang="ts">
    import type { ComponentServiceLayoutStatistics } from "../../../../__generated__/graphql";
    import Stats from "$lib/components/elements/Stats.svelte";
    export let stats: ComponentServiceLayoutStatistics[]
    export let color: string | undefined
</script>

<section id="stats">

    {#each stats as stat, i }
        <Stats 
            figure = {stat.number}
            contet = {stat.paragraph}
            color = {color}
            id = {i}
        />
    {/each}
</section>