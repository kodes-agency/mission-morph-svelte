<script lang="ts">
  import type { Blog } from "../../../__generated__/graphql.js";
  import gsap from 'gsap/dist/gsap'
  import ScrollTrigger from 'gsap/dist/ScrollTrigger'
  import SingleContent from "$lib/components/page/blog/SingleContent.svelte";
  import SingleHero from "$lib/components/page/blog/SingleHero.svelte";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { onMount } from "svelte";
  export let data;
  let blog: Blog;
  $: blog = data.data.blogs.data[0].attributes;

  let sectionEl: HTMLElement
  let pinnedEl: HTMLElement


  onMount(()=>{
    ScrollTrigger.create({
      trigger: sectionEl,
      pin: pinnedEl,
      start: "top +=100",
      end: `bottom bottom`
    })
  })
</script>

<main bind:this={sectionEl} class="flex flex-col lg:flex-row p-6 lg:p-20 space-y-10 lg:space-x-10 mt-20">
    <div bind:this={pinnedEl} class="h-fit">
        <SingleHero
          title={blog.title}
          date={blog.publishedAt}
          categories={blog.blogCategories?.data}
          src={PUBLIC_IMG_URL + blog.thumbnail?.data?.attributes?.url}
          alt={blog.thumbnail?.data?.attributes?.alternativeText}
        />
    </div>

  <SingleContent content={blog.contents} />
</main>
