<script lang="ts">
  import type { BlogEntity } from "../../__generated__/graphql";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import Masonry from "svelte-bricks";
  import Blog from "$lib/components/elements/Blog.svelte";
  import Filter from "$lib/components/global/filters/Filter.svelte";
  import Hero from "$lib/components/page/blog/Hero.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let data;
  let displayWidth: number
  let [minColWidth, maxColWidth, gap] = [300, 400, 30];
  let width: number | undefined;
  let height: number;
  let blogs: BlogEntity[];
  $: blogs = data.data.blogs.data;

  onMount(()=>{
    displayWidth = window.innerWidth
  })
</script>

<Hero
  src={PUBLIC_IMG_URL +
    data.data.homePage?.data.attributes.blogThumbnail?.data.attributes.url+"?format=webp"}
  alt={data.data.homePage?.data.attributes.blogThumbnail?.data.attributes
    .alternativeText}
  heading={data.data.homePage?.data.attributes.blogHeading}
  content={data.data.homePage?.data.attributes.blogContent}
/>

<section class="p-6 pt-20 md:p-20 lg:px-60 bg-gray">
  <Filter categories={data.data.blogCategories?.data} />
  <Masonry
    items={blogs}
    {minColWidth}
    {maxColWidth}
    {gap}
    let:item
    bind:width
    bind:height
  >
    <Blog
      title={item.attributes?.title}
      date={item.attributes?.publishedAt}
      src={PUBLIC_IMG_URL + item.attributes?.thumbnail?.data?.attributes?.url+"?format=webp&width=500"}
      alt={item.attributes?.thumbnail?.data?.attributes?.alternativeText}
      category={item.attributes?.blogCategories?.data}
      id={item.id}
      slug={item.attributes?.slug}
      variation={true}
      readMore={displayWidth < 1024 ? "Read more" : ""}
    />
  </Masonry>
</section>
