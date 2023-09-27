<script lang="ts">
    import type { Maybe } from "../../../../__generated__/graphql";
    export let heading: Maybe<string> | undefined
    export let scroll: string
</script>

<section class=" bg-gradient-to-b from-dark-purple to-light-purple h-screen flex flex-col items-center justify-between p-10">
    <div></div>
    <h1 class=" text-8xl font-black text-light-cyan">{@html heading}</h1>
    <p class=" text-light-cyan underline text-sm">{scroll}</p>
</section>
    