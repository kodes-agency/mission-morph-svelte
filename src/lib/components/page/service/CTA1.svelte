<script lang="ts">
  export let color: string | undefined;

  let countDownStart = 120000;
  let currentCount = countDownStart;

  function countDown() {
    currentCount = currentCount - 1000;
    if (currentCount == 0) {
      clearInterval(interval);
    }
  }

  $: hours = Math.floor(currentCount / 36e5);
  $: mins = Math.floor((currentCount % 36e5) / 6e4);
  $: secs = Math.floor((currentCount % 6e4) / 1000);

  let interval = setInterval(countDown, 1000);
</script>

<section class="bg-black h-screen flex flex-col justify-center items-center">
  <div class="max-w-4xl flex flex-col items-center justify-center space-y-24">
    <h2
      class="text-{color}-text-color text-4xl md:text-5xl lg:text-8xl font-black uppercase text-center"
    >
      Ready to schedule <br />a meeting?
    </h2>
    <div class="flex space-x-1">
      <div class="flex flex-col items-center w-12 md:w-20 lg:w-40">
        <p class="text-white text-4xl md:text-5xl lg:text-8xl font-bold">00</p>
        <p class="text-{color}-text-color text-xs md:text-base lg:text-lg md:uppercase">days</p>
      </div>
      <p class="text-white text-4xl md:text-5xl lg:text-8xl font-bold">:</p>
      <div class="flex flex-col items-center w-12 md:w-20 lg:w-40">
        <p class="text-white text-4xl md:text-5xl lg:text-8xl font-bold">0{hours}</p>
        <p class="text-{color}-text-color text-xs md:text-base lg:text-lg md:uppercase">hours</p>
      </div>
      <p class="text-white text-4xl md:text-5xl lg:text-8xl font-bold">:</p>
      <div class="flex flex-col items-center w-12 md:w-20 lg:w-40">
        <p class="text-white text-4xl md:text-5xl lg:text-8xl font-bold">0{mins}</p>
        <p class="text-{color}-text-color text-xs md:text-base lg:text-lg md:uppercase">minutes</p>
      </div>
      <p class="text-white text-4xl md:text-5xl lg:text-8xl font-bold">:</p>
      <div class="flex flex-col items-center w-12 md:w-20 lg:w-40">
        <p class="text-white text-4xl md:text-5xl lg:text-8xl font-bold">
          {secs.toString().length > 1 ? secs : " 0" + secs}
        </p>
        <p class="text-{color}-text-color text-xs md:text-base lg:text-lg md:uppercase">seconds</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 lg:space-x-40">
      <button
        on:click={() => {
          Calendly.initPopupWidget({
            url: "https://calendly.com/missionmorph/30min?hide_gdpr_banner=1",
          });
          return false;
        }}
        class="font-bold text-xl underline text-{color}-text-color"
        >Yes, I am ready</button
      >
      <a class="md:font-bold text-xl underline text-white" href="#stats"
        >I need convincing</a
      >
    </div>
  </div>
</section>
