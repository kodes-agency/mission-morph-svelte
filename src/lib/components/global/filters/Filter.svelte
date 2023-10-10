<script lang="ts">
  import { page } from "$app/stores";
  import type { BlogCategoryEntity } from "../../../../__generated__/graphql";
  import { goto, invalidateAll } from "$app/navigation";
  import { fade, slide } from "svelte/transition";

  export let categories: BlogCategoryEntity[];
  let urlSearchParams = $page.url.searchParams;
  let activeFilters: string[] = [];
</script>

<div>
  {#if $page.url.searchParams.getAll("category").length > 0}
    <div class="flex justify-center space-x-5" transition:fade>
      {#each $page.url.searchParams.getAll("category") as filter}
        <span
          class="p-1 px-2 bg-light-cyan flex rounded-sm items-center space-x-1
        "
        transition:fade
        >
          <p class=" font-serif">{filter}</p>
          <button
            class="h-4 w-4 flex items-center justify-center rounded-full hover:bg-white"
            on:click={() => {
              activeFilters = urlSearchParams
                .getAll("category")
                .filter((item) => item != filter);
              urlSearchParams.delete("category");
              activeFilters.forEach((filter) => {
                urlSearchParams.append("category", filter);
              });
              goto(`?${urlSearchParams}`);
              invalidateAll;
            }}
            ><svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.320359 10L4.42436 4.672L4.40636 5.554L0.500359 0.459999H2.42636L5.41436 4.384H4.67636L7.66436 0.459999H9.55436L5.59436 5.59L5.61236 4.672L9.75236 10H7.79036L4.64036 5.824L5.34236 5.932L2.24636 10H0.320359Z"
                fill="#181818"
              />
            </svg>
          </button>
        </span>
      {/each}
    </div>
  {/if}
  <div class="flex justify-center py-5 lg:py-10">
    {#each categories as category}
      <button
        class="p-2 px-5 lg:px-10 font-serif text-lg"
        on:click={() => {
          if (
            urlSearchParams
              .getAll("category")
              .includes(category?.attributes?.category)
          ) {
            activeFilters = urlSearchParams
              .getAll("category")
              .filter((item) => item != category.attributes.category);
            urlSearchParams.delete("category");
            activeFilters.forEach((filter) => {
              urlSearchParams.append("category", filter);
            });
          } else {
            activeFilters.push(category.attributes.category);
            urlSearchParams.delete("category");
            activeFilters.forEach((filter) => {
              urlSearchParams.append("category", filter);
            });
          }
          goto(`?${urlSearchParams}`);
          invalidateAll;
        }}>{category.attributes?.category}</button
      >
    {/each}
  </div>
</div>
