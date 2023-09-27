
<script lang="ts">
    import type { HomePage, BlogEntity } from "../__generated__/graphql";
    import Hero from "$lib/components/page/home/Hero.svelte";
    import About from "$lib/components/page/home/About.svelte";
    import Services from "$lib/components/page/home/Services.svelte";
    import { PUBLIC_IMG_URL } from "$env/static/public";

    export let data

    console.log(data.data)
    let page: HomePage = data.data.homePage?.data?.attributes
    let blogs: Array<BlogEntity> = data.data.blog?.data
</script>
<Hero 
    heading={page.heroHeading}
    scroll="Don't be shy & scroll down ;)"
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
