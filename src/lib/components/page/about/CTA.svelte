<script lang="ts">
  export let heading;
  export let content;
  export let button;
</script>

<section
  class="h-screen bg-gradient-to-b from-dark-purple to-black flex flex-col items-center justify-center"
>
  <div class="max-w-3xl space-y-10 p-6">
    <h2 class=" text-medium-purple font-bold text-7xl">{heading}</h2>
    <p class=" lg:text-lg text-white font-bold uppercase">{content}</p>
    <div>
      <button
        on:click={() => {
          Calendly.initPopupWidget({
            url: "https://calendly.com/missionmorph/30min?hide_gdpr_banner=1",
          });
          return false;
        }}
        class=" text-medium-purple font-bold underline w-fit text-start lg:text-lg"
        >{button}<button />
      </button>
    </div>
  </div>
</section>
