<script lang="ts">
  import { animateText, anmCleanUp} from '$lib/functions/textAnimation'
  import { onMount } from 'svelte';
  export let heading;
  export let content;
  export let button;

  let sectionEl: HTMLElement
  let headingEl: HTMLElement
  let textEl: HTMLElement

  onMount(()=>{
    animateText(sectionEl, headingEl, textEl)

    return()=>{
      anmCleanUp()
    }
  })
</script>

<section
  bind:this={sectionEl}
  class="h-screen bg-gradient-to-b from-dark-purple to-black flex relative flex-col items-center "
>
<div class="hidden lg:static border-l-2 border-white w-px top-0 absolute left-1/2 h-40 "><p class=""></p></div>
  <div class="max-w-3xl space-y-10 p-6 pt-20 z-20">
    <h2 bind:this={headingEl} class=" text-medium-purple font-bold text-9xl text-center">{heading}</h2>
    <p bind:this={textEl} class="lg:text-lg text-white uppercase">{content}</p>
    <div class="flex items-center pt-10 justify-center">
      <button
        on:click={() => {
          Calendly.initPopupWidget({
            url: "https://calendly.com/missionmorph/30min?hide_gdpr_banner=1",
          });
          return false;
        }}
        class="text-white border-b-4 border-medium-purple font-bold w-fit lg:text-2xl hover:scale-95 transition-all duration-500"
        >{button}<button />
      </button>
    </div>
  </div>
</section>
