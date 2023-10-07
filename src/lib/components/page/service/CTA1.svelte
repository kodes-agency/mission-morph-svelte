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
        <h2 class="text-{color}-text-color text-8xl font-black uppercase text-center">Ready to schedule <br>a meeting?</h2>
        <div class="flex space-x-1">
          <div class="flex flex-col items-center w-40">
            <p class="text-white text-8xl font-bold">00</p>
            <p class="text-{color}-text-color text-lg uppercase">days</p>
          </div>
          <p class="text-white text-8xl font-bold">:</p>
          <div class="flex flex-col items-center w-40">
            <p class="text-white text-8xl font-bold">0{hours}</p>
            <p class="text-{color}-text-color text-lg uppercase">hours</p>
          </div>
          <p class="text-white text-8xl font-bold">:</p>
          <div class="flex flex-col items-center w-40">
            <p class="text-white text-8xl font-bold">0{mins}</p>
            <p class="text-{color}-text-color text-lg uppercase">minutes</p>
          </div>
          <p class="text-white text-8xl font-bold">: </p>
          <div class="flex flex-col items-center w-40">
            <p class="text-white text-8xl font-bold">
              {secs.toString().length > 1 ? secs : " 0" + secs}
            </p>
            <p class="text-{color}-text-color text-lg uppercase">seconds</p>
          </div>
        </div>
        <div class="flex space-x-40">
            <a class="font-bold text-xl underline text-{color}-text-color" href="/contact">Yes, I am ready</a>
            <a class="font-bold text-xl underline text-white" href="#stats">I need convincing</a>
        </div>
    </div>
</section>
