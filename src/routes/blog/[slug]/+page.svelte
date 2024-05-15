<script lang="ts">
  import type { Blog, BlogCategoryEntity, BlogEntity } from "../../../__generated__/graphql.js";
  import { page } from "$app/stores";
  import formatDate from "$lib/functions/formatDate";
  import gsap from 'gsap/dist/gsap'
  import type { timeline } from "gsap/types/timeline"
  import ScrollTrigger from 'gsap/dist/ScrollTrigger'
  import ScrollSmoother from 'gsap/dist/ScrollSmoother'
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { afterUpdate, onMount } from "svelte";

  export let data;

  let smoother:any

  

  let blog: Blog;
  $: blog = data.data.blogs.data[0].attributes;

  let blogs: BlogEntity[]
  $: blogs = data.data.homePage?.data?.attributes?.blogs?.data

  let blogCategories: BlogCategoryEntity[]
  $: blogCategories = data.data.blogs.data[0].attributes.blogCategories.data

  let sectionEl: HTMLElement
  let pinnedEl: HTMLElement
  let triggerEl: HTMLElement
  let buttonShareWrapperEl: HTMLElement
  let buttonEl: HTMLElement
  let contentEl: HTMLElement
  let readDuration: number
  let buttonTl: timeline
  let headings: NodeListOf<HTMLElement>
  let isCopied = false

  $: readDuration
  $: headings


  function WordCount(str:string) {
     return Math.round(str.split(' ')
            .filter(function(n) { return n != '' })
            .length
            / 200)
  }


  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText($page.url.href);
      isCopied = true
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  const shareButtonsInit = async () => {
      // Select all our buttons with the js-share-button class
    var shareButtons = document.querySelectorAll('.js-share-button');


    for (var i = 0; i < shareButtons.length; i++) {

      // Add a click handler to each of our buttons
      shareButtons[i].addEventListener('click', function(e) {
        e.preventDefault();

        // Get the service from the data attribute
        var service = this.getAttribute('data-service'),
            url = '';

        // Check which service we want and attach the right url.
        // window.location give the current url.
        //
        // IMPORTANT! Always remember we need to encode our urls
        //            and variables we are sending.
        switch (service) {
          case 'facebook':
            url+= 'https://www.facebook.com/sharer/sharer.php?u='
              + encodeURIComponent(window.location);
            break;
          case 'twitter':
            url+='https://twitter.com/intent/tweet/?text=' + encodeURIComponent(this.title);
            url+='&url=' + encodeURIComponent(window.location);
            break;
          default:
            console.log('There is no such share service in your `switch`!');
            break;
        }

        window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=500,height=300');

      });

    }
  }
  
  
  onMount(()=>{
    let contentAs = contentEl.querySelectorAll('a')

    contentAs.forEach((a)=>{
      a.setAttribute('target', '_blank')
    })

    smoother = ScrollSmoother.get()
    headings = contentEl.querySelectorAll('h2')
    headings.forEach((heading)=>{
      heading.dataset.id = heading.innerText.replaceAll(' ', '')
    })
    readDuration = WordCount(contentEl.innerText)

    shareButtonsInit()
    
    let ctx = gsap.context(()=>{

      buttonTl = gsap.timeline({
        reversed: true
      })

      buttonTl.set(buttonShareWrapperEl, {
        visibility: "visible"
      })

      buttonTl.to(buttonEl, {
        backgroundColor: "rgb(189 255 255)"
      })

      buttonTl.from(buttonShareWrapperEl, { 
        y: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out"
      }, "-=0.5")

      let mm = gsap.matchMedia()

      mm.add('(min-width: 769px)', ()=>{
        ScrollTrigger.create({
          trigger: triggerEl,
          pin: pinnedEl,
          start: "top +=120px",
          end: "bottom center"
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

  <meta property="og:title" content="{data.data.blogs.data[0].attributes?.seo?.title}" />
  <meta property="og:site_name" content="Mission Morph"/>
  <meta property="og:url" content="httsp://missionmorph.com" />
  <meta property="og:description" content="{data.data.blogs.data[0].attributes?.seo?.description}" />
  <meta property="og:type" content="article" />
  <meta property="article:author" content="https://www.facebook.com/missionmorph" />
  <meta property="article:publisher" content="https://www.facebook.com/" />
  <meta property="og:image" content="{PUBLIC_IMG_URL+blog.thumbnail?.data?.attributes?.url}" />

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:creator" content="@MissionMorph"> 
  <meta name="twitter:title" content="{data.data.blogs.data[0].attributes?.seo?.title}">
  <meta name="twitter:description" content="{data.data.blogs.data[0].attributes?.seo?.description}">
  <meta name="twitter:image:src" content="{PUBLIC_IMG_URL+blog.thumbnail?.data?.attributes?.url}"/>
  
</svelte:head>

<main bind:this={sectionEl} class="flex flex-col bg-white">
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
      </div>
      <img class="py-10 md:py-20 h-auto md:h-[90vh] w-full object-cover" src={PUBLIC_IMG_URL+blog.thumbnail?.data?.attributes?.url+"?format=webp"} alt={blog.thumbnail?.data?.attributes?.alternativeText}>
      <div bind:this={triggerEl} class="flex p-5 flex-col md:flex-row w-full">
        <div bind:this={pinnedEl} class="flex pb-10 md:pb-0 flex-col md:w-[30vw] lg:w-[25vw] md:px-10 space-y-4">
          <p class="font-bold text-xl">Main topics:</p>
          <div class="flex flex-col space-y-2">
            {#if headings }
              {#each headings as heading, i }
                <button 
                  class="tiny text-start  group w-fit"
                  on:click={()=>{
                    ScrollSmoother.get().scrollTo(heading, true, "top 80px")
                  }}
                >{i+1}. {heading.innerText}
                  <div class="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-black">
                  </div>
              </button>
              {/each}
            {/if}
          </div>
          <div class="relative pb-10 md:pb-0">
            <button 
              bind:this={buttonEl}
              on:click={()=>{
                buttonTl.reversed(!buttonTl.reversed())
              }}
              class="tiny bg-white flex w-fit items-center hover:scale-95 transition-all duration-200 justify-center border p-1 px-3 rounded-3xl space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" class=" w-5" version="1.1" id="Capa_1" viewBox="0 0 227.216 227.216" xml:space="preserve">
                <path d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317  c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879  C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258  c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865  c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865  c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15  c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879  C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866  c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216  c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875  C203.759,199.715,191.26,212.216,175.897,212.216z"/>
              </svg>
              <p>Share</p>
            </button>
            <div bind:this={buttonShareWrapperEl} class="absolute invisible top-auto left-auto flex mt-2 md:flex-col space-x-2 md:space-x-0 md:space-y-2 bg-light-cyan md:mt-2 p-4 border rounded-3xl">
              <div class="flex space-x-2">
                <button data-service="facebook" class="js-share-button border p-2  tiny bg-white rounded-full flex items-center justify-center hover:scale-95 transition-all duration-200">
                    <svg class="fill-black w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </button>
                <button data-service="twitter" title={data.data.blogs.data[0].attributes?.seo?.title} class="js-share-button border p-2 tiny bg-white rounded-full flex items-center justify-center hover:scale-95 transition-all duration-200">
                  <svg class="fill-black w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>                </button>
                <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent($page.url.href)}&title=${encodeURIComponent(data.data.blogs.data[0].attributes?.seo?.title)}&source=${encodeURIComponent('Mission Morph')}`} class="border p-2 tiny bg-white rounded-full flex items-center justify-center hover:scale-95 transition-all duration-200">
                  <svg class="fill-black w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>                
                </a>
                </div>
              <button on:click={copyContent} class="border tiny px-2  p-1 {isCopied ?  "bg-green text-white" : "bg-white"} text-sm rounded-full flex items-center justify-center hover:scale-95 transition-all duration-200">
                {!isCopied ? "Copy link" : "Copied!"}
              </button>
            </div>
          </div>


        </div>
        <div class="content md:w-[70vw] lg:w-[75vw]" bind:this={contentEl}>
          {@html blog.contents}
        </div>
      </div>
      <div class="flex flex-col items-center justify-center p-5 space-y-10 py-40 md:py-60">
        <p class="font-bold text-3xl md:text-5xl max-w-3xl text-center">{blog.ctaHeading}</p>
        <button
          class="{$page.url.href.includes("google-shut-down-google-business-websites") ? "google-book-app" : ""} tiny w-fit max-w-xs md:max-w-none border-b-4 hover:scale-95 transition-transform duration-200 border-medium-purple md:font-bold text-xl"
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
        <div class="flex flex-wrap justify-center gap-10 p-5 md:p-10 lg:p-10">
          {#if blogs }     
            {#each blogs as item } 
              <a href="/blog/{item.attributes?.slug}">
                <article class="border max-w-sm bg-white border-black flex flex-col hover:scale-95 transition-transform duration-500">
                  <img src={PUBLIC_IMG_URL+item.attributes?.thumbnail?.data?.attributes?.url+"?format=webp&width=500"} alt={item.attributes?.thumbnail?.data?.attributes?.alternativeText} class="w-full h-60 object-cover">
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

  :global(.content a){
    text-decoration: underline;
    font-weight: 500;
    text-decoration-color: blueviolet;
  }

  :global(.content a:hover){
    font-weight: 600;
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