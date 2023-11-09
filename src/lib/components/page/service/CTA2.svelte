<script lang="ts">
    export let color: string | undefined
</script>

<section class="py-20 md:py-40 bg-black flex flex-col items-center justify-center space-y-20 p-5">
    <h2 class=" max-w-4xl text-5xl md:text-8xl text-{color}-text-color font-bold text-center">Let's answer all your questions!</h2>
    <button
        on:click={() => {
        Calendly.initPopupWidget({
            url: "https://calendly.com/missionmorph/30min?hide_gdpr_banner=1",
        });
        return false;
        }}
        class="font-bold text-2xl hover:scale-95 transition-all duration-500 tiny underline text-white"
        >Click here to schedule a free consultation</button
    >
</section>