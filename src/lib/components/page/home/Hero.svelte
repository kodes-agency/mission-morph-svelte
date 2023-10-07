<script lang="ts">
    import type { Maybe } from "../../../../__generated__/graphql";
    export let heading: Maybe<string> | undefined
    export let scroll: string = "Don't be shy & scroll down ;)"
</script>

<section class=" bg-gradient-to-b from-dark-purple to-light-purple h-screen flex flex-col items-center justify-center p-10">
    <div class="flex flex-col justify-between h-full max-w-4xl">
        <div></div>
        <h1 class=" text-8xl font-black text-light-cyan">{heading}</h1>
        <p class=" text-light-cyan underline text-sm w-full text-center">{scroll}</p>
    </div>
</section>
    