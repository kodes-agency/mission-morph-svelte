<script lang="ts">
  export let src: string | undefined;
  export let alt: string | undefined;
  export let heading: string | undefined;
  export let content: string | undefined;
</script>

<section
  class=" bg-gradient-to-b from-black to-green h-screen flex flex-col items-center justify-center relative"
>
  <img
    {src}
    {alt}
    class="absolute top-0 left-0 h-screen w-full object-cover z-0 mix-blend-darken"
  />
  <div class="flex flex-col max-w-5xl relative z-10 p-6 py-10 space-y-4">
    <h1 class="text-4xl md:text-8xl font-black text-light-cyan">{@html heading}</h1>
    <p class="text-white text-lg max-w-3xl">{content}</p>
  </div>
</section>
