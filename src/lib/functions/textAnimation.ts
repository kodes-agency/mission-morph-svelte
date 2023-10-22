import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'

let ctx:any

async function animateText(sectionTarget:HTMLElement ,splitTarget:HTMLElement, fadeTarget?: HTMLElement){
    ctx = await gsap.context(()=>{
        let splitText = new SplitText(splitTarget, {
            type: 'words,chars'
        })

        new SplitText(splitTarget, {
            type: 'lines',
            linesClass: 'splitTargetClass'
        })

        gsap.set('.splitTargetClass', {
            overflow: 'hidden',
            lineHeight: 1.12
        })

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: sectionTarget,
                start: 'top +=400',
                end: '+=500',
            }
        })

        tl.from(splitText.chars, {
            yPercent: 100,
            opacity: 0.5,
            duration: 1,
            stagger: 0.02,
            ease: 'power2.inOut',
        })

        if(fadeTarget){
            tl.from(fadeTarget, {
                opacity: 0,
                duration: 1.5,
            })
        }
    }, sectionTarget)
    return await ctx
}

async function anmCleanUp(){
    await ctx.revert()
}

export {animateText, anmCleanUp}