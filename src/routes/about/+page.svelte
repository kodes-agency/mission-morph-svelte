<script lang="ts">
    import type { AboutPage } from '../../__generated__/graphql.js';
    import Hero from '$lib/components/page/about/Hero.svelte';
    import Steps from '$lib/components/page/about/Steps.svelte';
    import CTA from '$lib/components/page/about/CTA.svelte';
    import ScrollSmoother from 'gsap/dist/ScrollSmoother'

    import { PUBLIC_IMG_URL } from '$env/static/public';
    import { onMount } from 'svelte';
    export let data

    let page: AboutPage
    $:page = data.data.aboutPage.data.attributes

</script>


<svelte:head>
    <title>{page.seo?.title}</title>
    <meta name="description" content={page.seo?.description}>
</svelte:head>
<div class=" -space-y-px">
    <Hero 
        heading = {page.heroHeading}
        content = {page.heroContent}
        src = {PUBLIC_IMG_URL+page.heroThumbnail?.data?.attributes?.url+"?format=webp"}
        alt = {page.heroThumbnail?.data?.attributes?.alternativeText}
    />
    <Steps 
        steps={page.step}
    />
    <CTA 
        heading={page.ctaHeading}
        content={page.ctaContent}
        button={page.ctaButton}
    />
</div>
