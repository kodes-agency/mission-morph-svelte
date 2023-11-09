
<script lang="ts">
    import type { HomePage } from "../__generated__/graphql";
    import Hero from "$lib/components/page/home/Hero.svelte";
    import About from "$lib/components/page/home/About.svelte";
    import Services from "$lib/components/page/home/Services.svelte";
    import Blog from "$lib/components/page/home/Blog.svelte";
    import CTA from "$lib/components/page/home/CTA.svelte";
    import { PUBLIC_IMG_URL } from "$env/static/public";
    export let data

    let displayWidth: number
    if(typeof window !== "undefined"){
        displayWidth = window.innerWidth
    }
    let page: HomePage = data.data.homePage?.data?.attributes
</script>

<svelte:head>
    <title>{page.seo?.title}</title>
    <meta name="description" content={page.seo?.description}>
</svelte:head>
<div class=" -space-y-px">
    <Hero 
        heading={page.heroHeading}
        imgLarge={page.heroVercorLarge?.data?.attributes}
        imgMedium={page.heroVercorMedium?.data?.attributes}
        imgSmall={page.heroVercorSmall?.data?.attributes}
    />
    <About 
        heading={page.aboutHeading}
        content={page.aboutContent}
        src={PUBLIC_IMG_URL+page.aboutImage?.data?.attributes?.url+"?format=webp&width=500"}
        alt={page.aboutImage?.data?.attributes?.alternativeText}
    />
    <Services 
        services={data.data.services?.data}
    />
    <CTA 
        heading={page.ctaHeading}
        content={page.ctaContent}
        button="Let's work together"
        src={PUBLIC_IMG_URL+page.ctaImage?.data?.attributes?.url+"?format=webp&width=600"}
        alt={page.ctaImage?.data?.attributes?.alternativeText}
    />
    <Blog 
        heading={page.blogHeading}
        content={page.blogContent}
        src={PUBLIC_IMG_URL+page.blogThumbnail?.data?.attributes?.url+`${displayWidth < 800 ? "?format=webp&width=800" : "?format=webp"}`}
        alt={page.blogThumbnail?.data?.attributes?.alternativeText}
        blogs={page.blogs?.data}
    />
</div>