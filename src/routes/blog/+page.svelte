<script lang="ts">
  import type { BlogEntity } from "../../__generated__/graphql";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import Masonry from "svelte-bricks";
  import Blog from "$lib/components/elements/Blog.svelte";
  import Filter from "$lib/components/global/filters/Filter.svelte";
  import Hero from "$lib/components/page/blog/Hero.svelte";
  import { page } from "$app/stores";

  export let data;
  let [minColWidth, maxColWidth, gap] = [300, 400, 30];
  let width: number | undefined;
  let height: number;
  let blogs: BlogEntity[]
  $: blogs = data.data.blogs.data;
</script>

{#if $page.url.searchParams.getAll("category").length == 0 }
  <Hero 
    src = {PUBLIC_IMG_URL+data.data.homePage?.data.attributes.blogThumbnail?.data.attributes.url}
    alt  = {data.data.homePage?.data.attributes.blogThumbnail?.data.attributes.alternativeText}
    heading  = {data.data.homePage?.data.attributes.blogHeading}
    content  = {data.data.homePage?.data.attributes.blogContent}
  />
{/if}

<section class="p-6 pt-20 md:p-20 lg:p-60">
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
      src={PUBLIC_IMG_URL + item.attributes?.thumbnail?.data?.attributes?.url}
      alt={item.attributes?.thumbnail?.data?.attributes?.alternativeText}
      category={item.attributes?.blogCategories?.data}
      id={item.id}
      slug={item.attributes?.slug}
      variation={true}
    />
  </Masonry>
</section>
