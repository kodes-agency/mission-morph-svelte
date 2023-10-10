<script lang="ts">
  import type { Maybe } from "../../../../__generated__/graphql";
  import type { BlogEntity } from "../../../../__generated__/graphql";
  import "@splidejs/svelte-splide/css/core";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { Masonry } from "svelte-bricks";
  import Blog from "$lib/components/elements/Blog.svelte";

  export let heading: Maybe<string> | undefined;
  export let content: Maybe<string> | undefined;
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;
  export let blogs: BlogEntity[];
  console.log(blogs)

  let [minColWidth, maxColWidth, gap] = [300, 400, 30];
  let width: number | undefined;
  let height: number;


  

</script>

<section class="min-h-[200vh] bg-black lg:p-10">
    <div class="h-screen flex flex-col items-center justify-center relative p-6">
      <img
        {src}
        {alt} 
        class="absolute 
         top-0 left-0 w-full h-screen object-cover z-0 grayscale"
      />
      <div class="relative z-10 items-center flex flex-col space-y-8">
        <h2 class="text-5xl lg:text-8xl font-bold font-serif text-white text-center">
          {heading}
        </h2>
        <p class=" text-white font-serif text-xl max-w-3xl text-center">
          {content}
        </p>
      </div>
    </div>
  <div class="min-h-screen p-10 md:p-20 ">
    <!-- <div class=" max-w-3xl flex flex-col space-y-10">
      <div class="flex justify-between -mb-8">
        <div />
        <p class=" text-lg text-white">{currentIndex + 1}/{blogs.length}</p>
      </div>
      <div class=" h-px w-full bg-white" />
      <Splide
        hasTrack={false}
        aria-label="Featured blogs"
        options={{
          rewind: true,
          autoplay: true,
        }}
        on:moved={(e) => {
          // @ts-ignore
          currentIndex = e?.detail.index;
        }}
      >
        <div class="flex items-center">
          <div class="splide__arrows pr-10 -ml-[67px]">
            <button class="splide__arrow splide__arrow--prev">
              <svg
                width="27"
                height="54"
                viewBox="0 0 27 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_28_3952)">
                  <path
                    d="M26.0358 54.0001C25.7851 54.0001 25.5305 53.8996 25.3415 53.7063L0.270098 27.6728C-0.0924739 27.2978 -0.0924739 26.7063 0.270098 26.3313L25.3415 0.29396C25.7118 -0.088772 26.3212 -0.10037 26.707 0.270764C27.0888 0.641898 27.1004 1.25272 26.7301 1.63932L2.30281 27.0001L26.7262 52.361C27.0965 52.7437 27.085 53.3584 26.7031 53.7295C26.5141 53.9112 26.275 54.0001 26.032 54.0001H26.0358Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_3952">
                    <rect width="27" height="54" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <SplideTrack>
            {#each blogs as blog}
              <SplideSlide>
                <a href="/blog/{blog.attributes?.slug}" class="max-w-[100vw]">
                  <article class="flex flex-col space-x-10 max-w-[90vw]">
                    <img
                      class=" aspect-square object-cover h-60"
                      src={PUBLIC_IMG_URL +
                        blog.attributes?.thumbnail?.data?.attributes?.url}
                      alt={blog.attributes?.thumbnail?.data?.attributes
                        ?.alternativeText}
                    />
                    <div class="flex flex-col space-y-5 justify-evenly">
                      <h3 class=" text-2xl font-bold text-medium-purple">
                        {blog.attributes?.title}
                      </h3>
                      <p class=" text-lg text-white">
                        {blog.attributes?.seo?.description}
                      </p>
  
                      <p class=" text-white">
                        {formatDate(blog.attributes?.publishedAt)}
                      </p>
                    </div>
                  </article>
                </a>
              </SplideSlide>
            {/each}
          </SplideTrack>
          <div class="splide__arrows pl-10 -mr-[67px]">
            <button class="splide__arrow splide__arrow--next rotate-180">
              <svg
                width="27"
                height="54"
                viewBox="0 0 27 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_28_3952)">
                  <path
                    d="M26.0358 54.0001C25.7851 54.0001 25.5305 53.8996 25.3415 53.7063L0.270098 27.6728C-0.0924739 27.2978 -0.0924739 26.7063 0.270098 26.3313L25.3415 0.29396C25.7118 -0.088772 26.3212 -0.10037 26.707 0.270764C27.0888 0.641898 27.1004 1.25272 26.7301 1.63932L2.30281 27.0001L26.7262 52.361C27.0965 52.7437 27.085 53.3584 26.7031 53.7295C26.5141 53.9112 26.275 54.0001 26.032 54.0001H26.0358Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_3952">
                    <rect width="27" height="54" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </Splide>
    </div> -->
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
      variation={false}
    />
    </Masonry>
  </div>
</section>
