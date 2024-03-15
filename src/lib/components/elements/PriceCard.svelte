<script lang="ts">
  export let header: string;
  export let subheader: string;
  export let features: string[];
  export let services: string[];
  export let price: string;
  export let paymentLink: string;
  export let bookingLink: string;
  export let label: boolean;
</script>

<article class="border border-dark-purple {label ? "bg-white" : "bg-[#F7F7F7]"} rounded-3xl h-fit box-content">
    <div class="p-8 space-y-5">
        <div class="flex flex-col space-y-2">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl text-dark-purple font-bold">{header}</h2>
                {#if label }
                    <p class="bg-dark-purple rounded-full py-1 px-2 text-xs text-white">Most popular</p>
                {/if}
            </div>
            <p class="text-sm">{subheader}</p>
        </div>
        <div class="flex flex-col space-y-2">
            <p class="text-3xl text-dark-purple font-bold">${price}/m</p>
            <p class="text-sm opacity-50">Pause or cancel anytime</p>
        </div>
        <div class="space-y-2">
            <button class="w-full tiny bg-dark-purple rounded-full text-white py-4 hover:font-bold hover:bg-cyan  transition-all">
                <a class="h-full py-4 px-16" href="{paymentLink}" target="_blank"> Subscribe today</a>
            </button>
            <button class="w-full tiny underline underline-offset-2 text-dark-purple hover:font-bold  transition-all">
                <a class="" href="{bookingLink}" target="_blank">Book a call</a>
            </button>
        </div>
    </div>
    <div class="p-8 border-t border-dark-purple rounded-3xl h-full space-y-8"> 
        <div class="flex flex-col space-y-1">
            {#each features as feature, i }
                <div class="flex flex-row items-center space-x-2">
                    <p class="font-bold text-lg">
                        +
                    </p>
                    <p class="leading-snug text-sm {i === 0 ? "font-bold" : ""}">
                        {feature}
                    </p>
                </div>
            {/each}
        </div>
        <div>
            <h3 class="font-bold text-lg">Included services</h3>
            <div class="flex flex-row flex-wrap">
                {#each services as service}
                    <div class=" border border-dark-purple rounded-full py-1 px-2 flex items-center justify-center mr-2 mt-2">
                        <p class="text-sm">
                            {service}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</article>
