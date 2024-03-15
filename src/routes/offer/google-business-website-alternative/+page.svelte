<script lang="ts">
    import PriceCard from "$lib/components/elements/PriceCard.svelte";
    // @ts-ignore
    import gsap from "gsap/dist/gsap";
    // @ts-ignore
    
    import { onMount } from "svelte";

    let gbpImgSection: HTMLElement;
    let comparisonSection: HTMLElement;
    let comparisonSectionMobile: HTMLElement;
    let arrowEl: SVGElement;
    let newImgEl: HTMLImageElement;
    let heroImgEl: HTMLImageElement;

    let gbpDesktopImg: HTMLImageElement;
    let gbpMobileImg: HTMLImageElement;

    onMount(()=>{
        let mm = gsap.matchMedia()

        
        let ctx = gsap.context(() => {
            let tlHero = gsap.timeline();
            tlHero.to(heroImgEl, {
                opacity: 1,
                duration: 0.8,
                delay:1.5
            })
            .from(heroImgEl, {
                y: 100,
                duration: 0.8,
            }, "<")
            mm.add('(min-width: 1024px)', ()=>{
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: gbpDesktopImg,
                        start: "top 200px",
                        scrub: true,
                        pin: true
                    }
                });
        
                tl.to(gbpDesktopImg, {
                    scale: 1.5,

                });

                let tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: comparisonSection,
                        start: "center bottom",
                        end: "center center",
                        scrub: true,
                    }
                });

                tl2.to(gbpDesktopImg, {
                    opacity: 0,
                });


                let tl3 = gsap.timeline({
                    scrollTrigger: {
                        trigger: comparisonSection,
                        start: "top top",
                        scrub: true,
                        pin:true
                    },    
                })

                tl3.from(arrowEl, {
                    rotate: -180
                })

                tl3.from(newImgEl, {
                    opacity: 0,
                    x: -600
                }, "<")
            })

            mm.add('(max-width: 1024px)', ()=>{
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: gbpMobileImg,
                        start: "top 100px",
                        end: "bottom 200px",
                        scrub: true,
                        pin: true
                    }
                });
        
                tl.to(gbpMobileImg, {
                    scale: 1.4,
                });

                let tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: comparisonSection,
                        start: "center bottom",
                        end: "center center",
                        scrub: true,
                    }
                });

                tl2.to(gbpMobileImg, {
                    opacity: 0,
                });

                let tl3 = gsap.timeline({
                        scrollTrigger: {
                            trigger: comparisonSection,
                            start: "top top",
                            end: "bottom 100px",
                            scrub: true,
                            pin:true
                        },    
                    })
    
                tl3.from(arrowEl, {
                    rotate: -90
                })

                tl3.from(newImgEl, {
                    opacity: 0,
                    y: -300
                }, "<")
            })


        });

        return ()=>{
            ctx.revert()
        }
    })


    let priceCards = [
        {
            header: "GBP+",
            subheader: "Everything that Google Business Websites offer but with better design and built in SEO",
            price: "139",
            label: false,
            features: [
                "All the functionality of Google Business Wesbites",
                "Customizable design that makes your website unique",
                "Show only the reviews that portrait your business most accurately",
                "Encourage clients to add reviews directly on your website",
                "Beautiful and responsive UI/UX that engages your clients 10x*",
                "Keyword research and analysis",
                "Meta optimization of 2 single pages"
            ],
            services: [
                "Organic SEO",
                "CMS platform"
            ],
            paymentLink: "https://buy.stripe.com/8wMcPFgPTh1cgo0144",
            bookingLink: "https://calendly.com/missionmorph/30min"
        },
        {
            header: "Advanced",
            subheader: "Transform visitor into clients, increase organic web traffic and improve your brand recognition",
            price: "249",
            label: true,
            features: [
                "All the features from the GBP + package",
                "Get your visitors’ details with custom lead generation forms",
                "Increase web traffic with advanced blog functionality",
                "Advanced web design and animations",
                "Meta optimization of all single pages",
                "Imagery optimization up to 10 images",
                "GBP one time optimisation",
                "5 image banners for your website",
                "5 blog images for your articles"
            ],
            services: [
                "Advanced organic SEO",
                "Basic Local SEO",
                "Web development",
                "Full CMS paltform",
                "Grapic design",
            ],
            paymentLink: "https://buy.stripe.com/6oE8zp1UZcKW5Jm9AB",
            bookingLink: "https://calendly.com/missionmorph/30min"
        },
        {
            header: "Pro",
            subheader: "From advanced custom web functionality to stunning marketing campaigns and managed Local SEO",
            price: "499",
            label: false,
            features: [
                "All the features from the ADVANCED package",
                "Custom web design and functionality that suits your needs",
                "Payment integrations that allow instant conversion",
                "Premium tech support",
                "On-site content optimisation",
                "Imagery optimization of all assets",
                "GBP monthly optimisation",
                "5 additional image banners for your website (10 in total)",
                "5 additional blog images for your articles (10 in total)",
                "External campaign adaptions (2 key visuals + 8 resizes)"
            ],
            services: [
                "Advanced organic SEO",
                "Grapic design",
                "Custom web dev",
                "Advanced Local SEO",
                "Brand design",
                "Full CMS paltform",
            ],
            paymentLink: "https://buy.stripe.com/cN23f5gPTaCOc7K8wy",
            bookingLink: "https://calendly.com/missionmorph/30min"
        }
    ]
</script>

    <section class="h-[90vh] lg:h-screen bg-gray flex flex-col items-center pt-[25vh] relative">
        <h1 class="opacity-0 absolute top-0">Google is shutting down all free business websites</h1>
        <h2 class="text-8xl lg:text-[300px] font-bold opacity-5 text-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[150px]">ERROR</h2>
        <div class="space-y-4 lg:space-y-10 flex flex-col items-center">
            <svg class="w-16" width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_934_124)">
                <path d="M116.1 12.9V0H0V129H129V12.9H116.1ZM116.1 64.5V116.1H12.9V12.9H77.4V51.6H116.1V64.5ZM116.1 38.7H90.3V12.9H103.2V25.8H116.1V38.7Z" fill="#500852"/>
                <path d="M51.5992 38.7V25.8H38.6992V38.7V51.6H51.5992V38.7Z" fill="#500852"/>
                <path d="M77.3992 77.4H64.4992H51.5992H38.6992V90.3H51.5992H64.4992H77.3992H90.2992V77.4H77.3992Z" fill="#500852"/>
                <path d="M38.7008 90.3H25.8008V103.2H38.7008V90.3Z" fill="#500852"/>
                <path d="M103.201 90.3H90.3008V103.2H103.201V90.3Z" fill="#500852"/>
                </g>
                <defs>
                <clipPath id="clip0_934_124">
                <rect width="129" height="129" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <div class="space-y-4 px-10">
                <h2 class="text-4xl lg:text-5xl font-bold text-dark-purple text-center">Your site cannot be reached</h2>
                <p class="text-xl text-center">This is  not what you want your customers to see <br class="hidden lg:block"> when they google your business.</p>
            </div>
        </div>
        <img bind:this={heroImgEl} class="absolute w-[90vw] sm:w-[400px] opacity-0 lg:w-[500px] bottom-20 lg:bottom-40" src="/assets/external/Sorry-msg.png" alt="">
    </section>
    
    <section bind:this={gbpImgSection} class="h-[150vh] bg-gradient-to-b from-gray to-light-cyan relative overflow-hidden">
            <img bind:this={gbpMobileImg} class="absolute max-h-[80vh] object-contain top-[300px] lg:hidden left-1/2 -translate-x-1/2 -translate-y-1/2" src="/assets/external/phone.png" width="800px" alt="">
            <img bind:this={gbpDesktopImg} class="absolute top-[300px] hidden lg:block left-1/2 -translate-x-1/2 -translate-y-1/2" src="/assets/external/laptop.png" width="800px" alt="">
    </section>
    
    <section bind:this={comparisonSection} class="min-h-screen space-y-5 pt-10 flex flex-col items-center lg:justify-center bg-light-cyan p-5">
        <h2 class="text-3xl lg:text-5xl font-bold text-dark-purple text-center">Change. <br class="lg:hidden"> For the better.</h2>
        <p class=" text-xl text-center max-w-[1000px] pb-10">Not just a replacement, but a game changer. Our managed solutions can help you stand out from the basic GBP look, increasing the amount of visitors and conversions. </p>
        <div bind:this={comparisonSectionMobile} class="relative flex flex-col lg:flex-row space-y-10 lg:space-y-0 md:px-10 lg:space-x-20">
            <img class="max-w-[500px] w-[90vw]" src="/assets/external/comp-old.png" alt="">
            <img bind:this={newImgEl} class="max-w-[500px] w-[90vw]" src="/assets/external/comp-new.png" alt="">
            <svg bind:this={arrowEl} class="absolute w-16 rotate-90 lg:rotate-0 lg:w-28 right-1/2 top-1/2 translate-x-1/2 -translate-y-3/4 lg:-translate-y-1/2" width="133" height="129" viewBox="0 0 133 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5484 8.64037L63.1383 2.08255C65.9286 -0.694184 70.4406 -0.694184 73.2012 2.08255L130.907 59.4782C133.698 62.255 133.698 66.745 130.907 69.4922L73.2012 126.917C70.4109 129.694 65.8989 129.694 63.1383 126.917L56.5484 120.36C53.7284 117.553 53.7878 112.975 56.6671 110.228L92.4366 76.3159H7.12421C3.17621 76.3159 0 73.1551 0 69.2264V59.7736C0 55.8449 3.17621 52.6841 7.12421 52.6841H92.4366L56.6671 18.7725C53.7581 16.0253 53.6987 11.4466 56.5484 8.64037Z" fill="#500852"/>
            </svg>
        </div>
    </section>
    
    <section class="pb-40 lg:py-40 bg-gradient-to-b to-gray from-light-cyan flex flex-col items-center justify-center space-y-4">
        <h2 class="text-3xl lg:text-5xl font-bold text-dark-purple">Stand out your way</h2>
        <p class="text-xl text-center max-w-[1000px]">Pick one of our 3 custom solutions and get to your audience now!</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 lg:w-[95vw] xl:w-[80vw] pt-10 max-w-[1200px]">
            {#each priceCards as priceCard}
                <PriceCard
                    header={priceCard.header}
                    subheader={priceCard.subheader}
                    features={priceCard.features}
                    services={priceCard.services}
                    price={priceCard.price}
                    paymentLink={priceCard.paymentLink}
                    label={priceCard.label}
                    bookingLink={priceCard.bookingLink}
                />
            {/each}
        </div>
    </section>
    
    <section class="lg:pt-40 pb-60 bg-gray flex flex-col items-center justify-center">
        <div class="space-y-10">
            <div class="space-y-4 flex flex-col items-center px-10">
                <h2 class="text-3xl lg:text-5xl font-bold text-dark-purple">Got any questions?</h2>
                <p class="text-xl text-center">Our teams would be happy to answer all of your questions.</p>
            </div>
            <div class=" space-y-10">
                <div class="flex flex-col items-center justify-center">
                    <p class=" uppercase text-lg">Call us</p>
                    <a class=" bg-light-cyan tiny rounded-full py-2 underline underline-offset-2 w-80 flex items-center justify-center hover:font-bold" href="tel:+1 (305) 307-4684">
                        +1 (305) 307-4684
                    </a>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class=" uppercase text-lg">or write us an email</p>
                    <a class=" bg-light-cyan tiny rounded-full py-2 underline underline-offset-2 w-80 flex items-center justify-center hover:font-bold" href="mailto:info@missionmorph.com">
                        info@missionmorph.com
                    </a>
                </div>
            </div>
        </div>
    </section>
