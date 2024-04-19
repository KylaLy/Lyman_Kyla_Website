gsap.registerPlugin(ScrollTrigger);

gsap.from("#text",{
    xPercent: -100,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".text-anim",
        start: "top 65%",
        markers: true,
    }
})
gsap.from("#image",{
    xPercent: 100,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim",
        start: "top 65%",
        markers: true,
    }
})
gsap.to("#catering", {
    duration: 5,
    ease: "power2.out",
    y: -50,
    scrollTrigger: {
        trigger: ".text-anim",
        start: "top 80%",
        markers: true,
    }
    });