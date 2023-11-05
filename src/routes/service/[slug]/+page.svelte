<script lang="ts">
  import Hero from "$lib/components/page/service/Hero.svelte";
  import Services from "$lib/components/page/service/Service.svelte";
  import ScrollTrigger from 'gsap/dist/ScrollTrigger'
  import Figures from "$lib/components/page/service/Figures.svelte";
  import CTA1 from "$lib/components/page/service/CTA1.svelte";
  import type { Service } from "../../../__generated__/graphql.js";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { beforeNavigate } from "$app/navigation";

  export let data;

  let service: Service;
  $: service = data.data.services.data[0].attributes;

  if(typeof window !== "undefined"){
      window.onresize = () =>{
        ScrollTrigger.refresh(true)
      }
  }

  beforeNavigate(() => {
    ScrollTrigger.refresh(true)
  });

  

</script>

<svelte:head>
    <title>{service.seo?.title}</title>
    <meta name="description" content={service.seo?.description}>
</svelte:head>

<main>
  <Hero
    heading={service.heroSection?.title}
    color={service.color}
    content={service.heroSection?.content}
    src={PUBLIC_IMG_URL + service.heroSection?.image?.data?.attributes?.url}
    alt={service.heroSection?.image?.data?.attributes?.alternativeText}
    category={service.title}
  />
  <Services subservice={service?.subService} color={service.color} />

  <CTA1 color={service.color} />

  <Figures color={service.color} stats={service.statistics} />
</main>
