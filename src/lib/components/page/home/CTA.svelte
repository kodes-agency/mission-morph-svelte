<script lang="ts">
  import type { Maybe } from "../../../../__generated__/graphql";
  export let heading: Maybe<string> | undefined;
  export let content: Maybe<string> | undefined;
  export let button: string;
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;
</script>

<section
  class=" bg-gradient-to-b from-magenta to-yellow h-screen flex flex-col items-center justify-center"
>
  <div class="relative max-w-5xl flex flex-col justify-between h-full my-40">
    <img {src} {alt} class="absolute right-0 top-0 w-80 h-auto z-0" />
    <div class="relative z-10 flex space-y-5 flex-col">
      <h2 class=" text-8xl font-black text-light-cyan">{heading}</h2>
      <p class=" text-light-cyan font-light max-w-xl text-xl">{content}</p>
    </div>
    <button
      on:click={() => {
        Calendly.initPopupWidget({
          url: "https://calendly.com/missionmorph/30min?hide_gdpr_banner=1",
        });
        return false;
      }}
      class="text-xl w-fit text-light-cyan font-bold underline">{button}</button
    >
  </div>
</section>
