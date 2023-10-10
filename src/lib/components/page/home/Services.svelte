<script lang="ts">
  import type { Maybe } from "../../../../__generated__/graphql";
  import type { ServiceEntity } from "../../../../__generated__/graphql";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { onMount } from "svelte";

  export let heading: Maybe<string> | undefined;
  export let services: Array<ServiceEntity>;
    let serviceDivs: HTMLElement[]
    let activeService = "0"

    function toggleService(i:any){
        serviceDivs.forEach((div)=>{
            if(div.dataset.id != i){
                div.style.display = "none"
            } else {
                div.style.display = "flex"
                activeService = i
            }
        })
    }

  onMount(() => {
    // @ts-ignore
    serviceDivs = document.querySelectorAll(".service");
    serviceDivs.forEach((div) => {
      if(div.dataset.id != activeService) {
        div.style.display = "none"
      }
    });
  });
</script>

<section
  class=" bg-gradient-to-b from-cyan to-magenta min-h-screen flex flex-col lg:items-center lg:justify-center"
>
<div class="relative flex flex-col max-w-5xl p-6">
  <div class="flex flex-col space-y-5 relative z-10">
    <h2 class="text-5xl md:text-8xl font-black text-light-cyan">{heading}</h2>
    <div class="flex flex-wrap lg:flex-col lg:space-x-0 pb-5 lg:pt-10 lg:space-y-10">
        {#each services as service, i}
          <button
            class="my-2 mr-5 w-fit font-black text-light-cyan uppercase lg:text-xl border border-medium-purple rounded-full p-1 px-6 {i == Number(activeService) ? " bg-light-purple" : " bg-transparent"}"
            on:click={()=>{toggleService(i)}}
            >{service.attributes?.homePageTitle}</button
          >
        {/each}
    </div>
  </div>
  {#each services as service, i}
    <div class="service relative lg:absolute lg:-top-16 lg:left-48 flex flex-col lg:flex-row items-end" data-id={i}>
        <img
          src={PUBLIC_IMG_URL +
            service.attributes?.homePageThumbnail?.data?.attributes?.url}
          alt={service.attributes?.homePageThumbnail?.data?.attributes
            ?.alternativeText}
          class="w-52 h-72 object-cover lg:w-80 lg:h-auto absolute -top-40 lg:top-0 lg:static lg:-mr-10 z-0"
        />
        <p class=" text-lg text-light-cyan pb-10 max-w-lg lg:font-light z-10">{service.attributes?.homePageContent}</p>
    </div>
  {/each}
</div>
</section>