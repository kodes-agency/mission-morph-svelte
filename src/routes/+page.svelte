
<script lang="ts">
    import type { HomePage } from "../__generated__/graphql";
    import Hero from "$lib/components/page/home/Hero.svelte";
    import About from "$lib/components/page/home/About.svelte";
    import Services from "$lib/components/page/home/Services.svelte";
    import Blog from "$lib/components/page/home/Blog.svelte";
    import CTA from "$lib/components/page/home/CTA.svelte";
    import { PUBLIC_IMG_URL } from "$env/static/public";

    export let data

    let page: HomePage = data.data.homePage?.data?.attributes
</script>
<Hero 
    heading={page.heroHeading}
/>
<About 
    heading={page.aboutHeading}
    content={page.aboutContent}
    src={PUBLIC_IMG_URL+page.aboutImage?.data?.attributes?.url}
    alt={page.aboutImage?.data?.attributes?.alternativeText}
/>
<Services 
    services={data.data.services?.data}
    heading={page.servicesHeading}
/>
<CTA 
    heading={page.ctaHeading}
    content={page.ctaContent}
    button="Let's work together"
    src={PUBLIC_IMG_URL+page.ctaImage?.data?.attributes?.url}
    alt={page.ctaImage?.data?.attributes?.alternativeText}
/>
<Blog 
    heading={page.blogHeading}
    content={page.blogContent}
    src={PUBLIC_IMG_URL+page.blogThumbnail?.data?.attributes?.url}
    alt={page.blogThumbnail?.data?.attributes?.alternativeText}
    blogs={page.blogs?.data}
/>