<script lang="ts">
  import type { Maybe } from "../../../../__generated__/graphql";
  import type { BlogEntity } from "../../../../__generated__/graphql";
  import "@splidejs/svelte-splide/css/core";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { Masonry } from "svelte-bricks";
  import Blog from "$lib/components/elements/Blog.svelte";
  import { onMount } from "svelte";
  import  ScrollSmoother  from "gsap/dist/ScrollSmoother";
  import { animateText, anmCleanUp} from '$lib/functions/textAnimation'
  export let heading: Maybe<string> | undefined;
  export let content: Maybe<string> | undefined;
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;
  export let blogs: BlogEntity[];

  let [minColWidth, maxColWidth, gap] = [300, 400, 30];
  let width: number | undefined;
  let height: number;
  
  let bgImage: HTMLImageElement
  let sectionEl: HTMLElement
  let headingEl: HTMLElement
  let textEl: HTMLElement
  let displayWidth: number


  onMount(()=>{
    displayWidth = window.innerWidth
    let smoother = ScrollSmoother.get();
    let ctx = animateText(sectionEl, headingEl, textEl)

    return ()=>{
        anmCleanUp()
    }
  })


  

</script>

<section bind:this={sectionEl} class="min-h-[200vh] bg-black p-3 lg:p-10">
    <div class="h-screen flex flex-col items-center justify-center relative p-6">
      <img
        data-speed="0.95"
        bind:this={bgImage}
        {src}
        {alt} 
        class="absolute 
         top-0 left-0 w-full h-screen object-cover z-0 grayscale"
      />
      <div class="relative z-10 items-center flex flex-col space-y-8">
        <h2 bind:this={headingEl} data-speed="1.05" class="text-5xl lg:text-8xl font-bold font-serif text-white text-center">
          {heading}
        </h2>
        <p bind:this={textEl} data-speed="1.05" class=" text-white font-serif text-xl max-w-3xl text-center">
          {content}
        </p>
      </div>
    </div>
  <div class="min-h-screen p-5 lg:p-10 md:p-20 ">
    <Masonry
      items={blogs}
      {minColWidth}
      {maxColWidth}
      {gap}
      let:item
      bind:width
      bind:height
    >
    <div data-speed="1.05">
      <Blog
        title={item.attributes?.title}
        date={item.attributes?.publishedAt}
        src={PUBLIC_IMG_URL + item.attributes?.thumbnail?.data?.attributes?.url}
        alt={item.attributes?.thumbnail?.data?.attributes?.alternativeText}
        category={item.attributes?.blogCategories?.data}
        id={item.id}
        slug={item.attributes?.slug}
        variation={false}
        readMore={displayWidth < 1024 ? "Read more" : ""}
      />
    </div>
    </Masonry>
    <div class="flex items-center justify-center py-20">
      <a class="tiny text-white text-2xl border-b-4 border-medium-purple hover:scale-95 transition-all duration-500 text-center" href="/blog">View all blogs</a>
    </div>
  </div>
</section>
