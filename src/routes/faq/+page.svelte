<script lang="ts">
  import type { FaqPageEntity } from "../../__generated__/graphql.js";
  import Hero from "$lib/components/page/faq/Hero.svelte";
  import Content from "$lib/components/page/faq/Content.svelte";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  export let data;

  let pageData: FaqPageEntity;
  $: pageData = data.data.faqPage.data;
  
</script>

<svelte:head>
    <title>{pageData.attributes?.seo?.title}</title>
    <meta name="description" content={pageData.attributes?.seo?.description}>
</svelte:head>

<Hero
  heading={pageData.attributes?.heroHeading}
  content={pageData.attributes?.heroContent}
  src={PUBLIC_IMG_URL + pageData.attributes?.heroThumbnail?.data?.attributes?.url}
  alt={pageData.attributes?.heroThumbnail?.data?.attributes?.alternativeText}
/>
<Content segments={pageData.attributes?.faqSegment} />
