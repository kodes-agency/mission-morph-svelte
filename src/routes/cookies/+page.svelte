<script lang=ts>
    export let data
</script>

<main class="flex flex-col justify-center items-center w-full p-5 py-20 md:p-20 lg:p-40">
    <h1 class="text-5xl md:text-7xl font-bold text-center mb-10 md:mb-20">{data.data.cookiesPage.data.attributes.heading}</h1>
    <div class="content max-w-[90vw]">{@html data.data.cookiesPage.data.attributes.content}</div>
</main>

<style>
    :global(.content ul){
        list-style: inside;
        padding-left: 20px;
    }

    :global(.content ol){
        padding-left: 20px;
    }

    :global(.content h2){
        font-size: 40px;
        font-weight: bold;
    }

</style>