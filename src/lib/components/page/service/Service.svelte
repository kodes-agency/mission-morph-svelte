<script lang="ts">
  import Accordion from "$lib/components/global/accordion/accordion.svelte";
  import AccordionItem from "$lib/components/global/accordion/accordion-item.svelte";
  import type { ComponentServiceLayoutSubService } from "../../../../__generated__/graphql";
  import { onMount } from "svelte";
  export let subservice: ComponentServiceLayoutSubService[];
  export let color: string | undefined;

  let textColor: string;
  $: if (color == "seo") {
    textColor = "seo-text-color";
  } else if (color == "web") {
    textColor = "web-text-color";
  } else if (color == "brand") {
    textColor = "brand-text-color";
  } 

  onMount(()=>{
    console.log(textColor, color)
  })
</script>

<section
  class=" min-h-screen bg-black flex flex-col lg:pl-[15vw] 2xl:pl-[20vw] p-6 md:p-20 lg:p-40"
>
  <Accordion
    --accordion-width="70ch"
    --accordion-color="var(--white)"
    --text-color="var(--{textColor})"
  >
    {#each subservice as service, i}
      <AccordionItem open={i === 0}>
        <svelte:fragment slot="title">
          <div class="w-full h-px bg-white my-6 lg:my-10" />
          <h2
            class=" text-white font-bold text-start text-3xl md:text-5xl transition-all duration-700 mb-4"
          >
            {service.title}
          </h2>
        </svelte:fragment>
        <svelte:fragment slot="content">
          <div class="flex flex-col space-y-10">
            <p class=" md:text-lg">{@html service.contents}</p>
            <div class="grid grid-cols-2 gap-2 md:gap-6">
              {#each service.features as feature}
                <span class="flex space-x-2 md:space-x-3 items-center">
                  <div>
                    <svg
                      class="w-4 md:w-7"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class=""
                        d="M10.4779 22.968C10.4779 22.77 10.4559 22.682 10.3679 22.682L9.86188 22.924C9.86188 22.814 9.79588 22.748 9.68588 22.704L9.50988 22.682C9.35588 22.682 9.28988 22.704 9.06988 22.836C9.00388 22.704 8.91588 22.55 8.84988 22.418C8.27788 21.318 7.68388 19.668 7.41988 18.942C7.28788 18.568 7.15588 17.798 7.00188 16.632C7.17788 16.742 7.30988 16.786 7.37588 16.786C7.46388 16.786 7.57388 16.632 7.66188 16.324C7.70588 16.39 7.79388 16.412 7.90388 16.412C7.96988 16.412 8.05788 16.39 8.10188 16.324L8.45388 15.796L8.84988 15.928H8.87188C8.91588 15.928 8.98188 15.862 9.09188 15.796C9.20188 15.73 9.28988 15.686 9.35588 15.686L9.42188 15.708C9.77388 15.884 10.0159 16.192 10.1259 16.676C10.3899 17.798 10.6319 18.348 10.9179 18.348C11.1599 18.348 11.4899 18.062 11.8419 17.512C12.1939 16.962 12.5459 16.214 12.9419 15.312C12.9639 15.488 12.9859 15.576 13.0299 15.576C13.1619 15.576 13.4919 14.806 14.3059 13.508C15.5159 11.55 18.5079 7.788 19.2779 7.26C19.8499 6.864 20.2899 6.49 20.5979 6.16C20.5539 6.38 20.5099 6.534 20.5099 6.6C20.5099 6.666 20.5539 6.688 20.5979 6.688L21.2139 6.38V6.468C21.2139 6.578 21.2359 6.644 21.3019 6.644C21.3899 6.644 21.7419 6.292 21.7859 6.16L21.7419 6.468L22.4899 6.028L22.3139 6.424C22.5339 6.27 22.7099 6.182 22.8199 6.182C22.9299 6.182 22.9959 6.358 22.9959 6.468C22.9959 6.644 22.8419 6.886 22.5999 7.194C22.3359 7.546 21.6759 8.228 19.6959 10.494C18.8379 11.462 15.0319 16.632 14.3059 17.864L12.9419 20.174C12.3479 21.164 11.9739 21.802 11.7759 22.044C11.5779 22.286 11.3359 22.528 11.0499 22.748L10.8519 22.638L10.6759 22.748L10.4779 22.968Z"
                        fill="var(--{textColor})"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        stroke="#D9D9D9"
                      />
                    </svg>
                  </div>
                  <p class="text-xs md:text-base lg:text-lg text-white">
                    {feature?.feature}
                  </p>
                </span>
              {/each}
            </div>
          </div>
        </svelte:fragment>

        <svelte:fragment slot="footer">
          <p class="text-sm md:text-base text-{color}-text-color">{service.price}</p>
        </svelte:fragment>
      </AccordionItem>
    {/each}
  </Accordion>
</section>
