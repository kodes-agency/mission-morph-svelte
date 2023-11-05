<script lang=ts>
    import type { ComponentFaqPageFaqSection, Maybe } from "../../../../__generated__/graphql";
    import { Accordion, AccordionItem } from '$lib/components/global/accordion-faq/index'
    export let segments: ComponentFaqPageFaqSection[]
    
</script>

<section class="bg-gray min-h-screen pb-40 p-5">
    <div class="relative left-1/2 w-fit -translate-x-1/2 flex flex-col space-y-10">
        {#each segments as segment }
            <div class="">
                <h2 class="text-4xl md:text-5xl py-4 md:pb-7 text-start font-bold">
                    {segment.segmentTitle}
                </h2>
                <Accordion
                    --accordion-width="90ch"
                    --accordion-color="var(--white)"
                    --text-color="var(--black)"
                >  
                    {#each segment.segmentQuestion as question }
                        <AccordionItem>
                            <svelte:fragment slot="title">
                                <h3 class=" text-black font-bold text-xl text-start">
                                    {question.question}
                                </h3>
                            </svelte:fragment>
                            <svelte:fragment slot="content">
                                <div class="text-black pt-4 text-base faq-content">
                                    {@html question.content}
                                </div>
                            </svelte:fragment>
                        </AccordionItem>
                    {/each}
                </Accordion>
            </div>
        {/each}
    </div>
</section>

<style>
    :global(.faq-content li){
        list-style: inside;
        padding-left: 20px;
    }
</style>