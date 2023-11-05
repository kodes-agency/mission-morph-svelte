<script lang="ts">
  import type { Blog, BlogCategoryEntity, BlogEntity } from "../../../__generated__/graphql.js";
  import formatDate from "$lib/functions/formatDate";
  import BlogTile from "$lib/components/page/home/Blog.svelte"
  import gsap from 'gsap/dist/gsap'
  import ScrollTrigger from 'gsap/dist/ScrollTrigger'
  import ScrollSmoother from 'gsap/dist/ScrollSmoother'
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { afterUpdate, onMount } from "svelte";
  import { Masonry } from "svelte-bricks";
  export let data;

  let [minColWidth, maxColWidth, gap] = [300, 400, 30];
  let width: number;
  let height: number;

  let blog: Blog;
  $: blog = data.data.blogs.data[0].attributes;

  let blogs: BlogEntity[]
  $: blogs = data.data.homePage?.data?.attributes?.blogs?.data
  

  let blogCategories: BlogCategoryEntity[]
  $: blogCategories = data.data.blogs.data[0].attributes.blogCategories.data


  function WordCount(str:string) {
     return Math.round(str.split(' ')
            .filter(function(n) { return n != '' })
            .length
            / 200)
  }


  let smoother:any

  let sectionEl: HTMLElement
  let pinnedEl: HTMLElement
  let triggerEl: HTMLElement
  let contentEl: HTMLElement
  let readDuration: number
  $: readDuration

  let headings: NodeListOf<HTMLElement>
  $: headings
  
  onMount(()=>{
    smoother = ScrollSmoother.get()

    headings = contentEl.querySelectorAll('h2')
    headings.forEach((heading)=>{
      heading.dataset.id = heading.innerText.replaceAll(' ', '')
    })
    readDuration = WordCount(contentEl.innerText)

    
    let ctx = gsap.context(()=>{
      let mm = gsap.matchMedia()

      mm.add('(min-width: 769px)', ()=>{
        ScrollTrigger.create({
          trigger: triggerEl,
          pin: pinnedEl,
          start: "top +=120px",
          end: "bottom bottom"
        })
      })
    })

    return ()=>{
      ctx.revert()
    }
  })

  afterUpdate(()=>{
    headings = contentEl.querySelectorAll('h2')
    headings.forEach((heading)=>{
      heading.dataset.id = heading.innerText.replaceAll(' ', '')
    })
    readDuration = WordCount(contentEl.innerText)
  })
</script>

<svelte:head>
  <title>{data.data.blogs.data[0].attributes?.seo?.title}</title>
  <meta name="description" content={data.data.blogs.data[0].attributes?.seo?.description}>
</svelte:head>

<main bind:this={sectionEl} class="flex flex-col">
    <section class="flex flex-col py-28 md:py-40">
      <div class="max-w-3xl p-5 lg:p-0 lg:ml-[25vw] space-y-10">
        <div class="grid grid-cols-2 lg:flex lg:space-x-20">
          <div class="flex max-w-xs flex-wrap">
            {#each blogCategories as category }
                <p class="py-1 px-4 text-sm m-1 uppercase rounded-sm bg-light-cyan w-fit">{category.attributes?.category}</p>
            {/each}
          </div>
          <p class="m-1">{formatDate(blog.publishedAt)}</p>
          <p class="m-1">{blog.author}</p>
          <p class="m-1">{readDuration} min read</p>
        </div>
        <h1 class="text-4xl md:text-7xl">{blog.title}</h1>
        <p class="">{blog.shortSummary}</p>
        <div class=" flex space-x-1 md:space-x-4">
          <button class="p-1 px-3 text-xs md:text-base border border-black whitespace-nowrap rounded-full">Twitter</button>
          <button class="p-1 px-3 text-xs md:text-base border border-black whitespace-nowrap rounded-full">Facebook</button>
          <button class="p-1 px-3 text-xs md:text-base border border-black whitespace-nowrap rounded-full">Linked In</button>
          <button class="p-1 px-3 text-xs md:text-base border border-black whitespace-nowrap rounded-full">Copy link</button>
        </div>
      </div>
      <img class="py-10 md:py-20 h-auto md:h-[90vh] w-full object-cover" src={PUBLIC_IMG_URL+blog.thumbnail?.data?.attributes?.url} alt={blog.thumbnail?.data?.attributes?.alternativeText}>
      <div bind:this={triggerEl} class="flex p-5 flex-col md:flex-row w-full">
        <div bind:this={pinnedEl} class="flex pb-10 md:pb-0 flex-col md:w-[25vw] md:px-10 space-y-4">
          <p class="font-bold text-xl">Main topics:</p>
          <div class="flex flex-col space-y-2">
            {#if headings }
              {#each headings as heading, i }
                <button 
                  class="tiny text-start"
                  on:click={()=>{
                    ScrollSmoother.get().scrollTo(heading, true, "top 80px")
                  }}
                >{i+1}. {heading.innerText}</button>
              {/each}
            {/if}
          </div>
          <button class="tiny flex w-fit items-center hover:bg-light-cyan hover:scale-95 transition-all duration-200 justify-center border p-1 px-3 rounded-3xl space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" class=" w-5" version="1.1" id="Capa_1" viewBox="0 0 227.216 227.216" xml:space="preserve">
              <path d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317  c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879  C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258  c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865  c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865  c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15  c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879  C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866  c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216  c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875  C203.759,199.715,191.26,212.216,175.897,212.216z"/>
            </svg>
            <p>Share</p>
          </button>
        </div>
        <div class="content md:w-[75vw]" bind:this={contentEl}>
          {@html blog.contents}
        </div>
      </div>
      <div class="flex flex-col items-center justify-center p-5 space-y-10 py-40 md:py-60">
        <p class="font-bold text-3xl md:text-5xl max-w-3xl text-center">{blog.ctaHeading}</p>
        <button
          class="tiny w-fit max-w-xs md:max-w-none border-b-4 hover:scale-95 transition-transform duration-200 border-medium-purple md:font-bold text-xl"
          on:click={() => {
            Calendly.initPopupWidget({
              url: "https://calendly.com/missionmorph/30min?hide_gdpr_banner=1",
            });
            return false;
          }}
        >{blog.ctaButton}</button>
      </div>
      <div class="">
        <p class="text-center font-bold text-3xl md:text-5xl">You may also find interesting...</p>
        <div class="flex flex-wrap items-center justify-center gap-10 p-5 md:p-10 lg:p-10">
          {#if blogs }     
            {#each blogs as item } 
              <a href="/blog/{item.attributes?.slug}">
                <article class="border max-w-sm bg-white border-black flex flex-col hover:scale-95 transition-transform duration-500">
                  <img src={PUBLIC_IMG_URL+item.attributes?.thumbnail?.data?.attributes?.url} alt={item.attributes?.thumbnail?.data?.attributes?.alternativeText} class="w-full h-60 object-cover">
                  <div class="p-4 w-full flex flex-col justify-between h-full">
                      <div class="pb-10">
                          <div class="flex space-x-3">
                              {#each item.attributes?.blogCategories.data as category }
                                  <p class="py-4 font-serif">{category.attributes.category}</p>
                              {/each}
                          </div>
                          <h3 class="text-2xl font-medium">{item.attributes?.title}</h3>
                      </div>
                      <div class="flex justify-between w-full">
                          <p class="font-serif">{formatDate(item.attributes?.publishedAt)}</p>
                          <p class=" underline font-bold">read more</p>
                      </div>
                  </div>
              </article>
              </a>
            {/each}
          {/if}
        </div>
        <div class="flex items-center justify-center py-10">
          <a class="tiny text-black text-2xl border-b-4 border-medium-purple hover:scale-95 transition-all duration-500 text-center" href="/blog">View all blogs</a>
        </div>
      </div>
    </section>
</main>

<style>
  :global(.content p, .content h2, .content h3, .content h4, .content a, .content ul, .content li){
    max-width: 768px;
  }

  :global(.content h2){
    font-size: 40px;  
    line-height: 1;
    padding-top: 20px;
  }

  :global(.content h2 strong){
    font-weight: 400;
  }

  :global(.content li){
    list-style: inside;
    padding-left: 20px;
  }

  :global(.content ul){
    padding-top: 20px;
  }

  :global(.content ol){
    padding-top: 20px;
  }

  :global(.content figcaption){
    font-size: 10px;
    text-align: center;
  }
</style>