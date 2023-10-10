<script lang="ts">
  export let content: any;
</script>

<section class="blog-content">
  {@html content}
</section>

<style>
  :global(.blog-content p) {
    font-size: 18px;
  }

  :global(.blog-content li) {
    list-style: inside;
    margin-left: 20px;
    font-size: 18px;
  }
</style>
