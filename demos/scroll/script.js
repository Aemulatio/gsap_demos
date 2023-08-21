gsap.registerPlugin(ScrollTrigger);


const t1 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".b",
            start: "-35% center",
            end: "250% center",
            scrub: true,
            markers: true,
        }
    }
)

t1.to(".b", {
    x: "65vw",
    rotation: 360,
}).to(".b", {
    x: "+=5vw"
})

const circle = gsap.timeline({
    scrollTrigger: {
        trigger: ".rounded",
        markers: true,
        scrub: true,
        start: "-400px center",
        end: "300px center",
    }
})


circle.to(".rounded", {
    scale: 20,
    borderRadius: "20%",
})



const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
