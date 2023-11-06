<script lang="ts">
  import { page } from "$app/stores";

  $: {
    // @ts-ignore
    if (typeof gtag !== "undefined") {
        // @ts-ignore
      gtag("config", "G-E01M0L9W91", {
        page_title: document.title,
        page_path: $page.url.pathname,
      });
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=MEASUREMENT_ID"
  >
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-E01M0L9W91");
  </script>
</svelte:head>
