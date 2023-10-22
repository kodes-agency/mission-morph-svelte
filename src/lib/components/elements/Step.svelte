<script lang="ts">
    export let heading: string | undefined;
    export let content: string | undefined;
    export let id: string | number | undefined;
  </script>
  
  <div
    class="flex flex-col lg:pl-[15vw] justify-center "
  >
    <div class="flex flex-col max-w-5xl relative z-10 p-6 space-y-4">
      <h2 class="text-4xl lg:text-7xl font-black text-light-cyan">{id}. {heading}</h2>
      <p class="text-white md:text-lg max-w-3xl">{content}</p>
    </div>
  </div>
  