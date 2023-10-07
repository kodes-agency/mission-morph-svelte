<script lang="ts">
    export let heading: string | undefined;
    export let content: string | undefined;
    export let id: string | number | undefined;
  </script>
  
  <div
    class="min-w-[100vw] bg-gradient-to-b from-green to-dark-purple h-screen flex flex-col pl-[15vw] justify-center relative"
  >
    <div class="flex flex-col max-w-5xl relative z-10 py-10 space-y-4">
      <h2 class="text-7xl font-black text-light-cyan">{id}. {heading}</h2>
      <p class="text-white text-lg max-w-3xl">{content}</p>
    </div>
  </div>
  