$("#carlink").on("mouseenter mouseleave", e=>{
    $(".lead").toggle()
    $(".car-head").toggle()
})

//Animation
gsap.registerPlugin(ScrollTrigger);

var tlm = gsap.timeline({delay:1});
tlm
.to("#welcomeText", {
    duration: 1.5,
    x: "+=100",
    yoyo: true,
    ease: "cos.inOut",
    scrollTrigger: {
        scrub : 1,
        trigger: "#welcomeText",
        start: "bottom bottom",
        toggleActions: "play pause play pause"
    }
})
.to("#triangeSVGdiv", {
    duration: 1.5,
    y: 100,
    repeat: -1,
    scale: 1.1,
    yoyo: true,
    pin: true,
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: "#triangeSVGdiv",
        start: "top bottom",
        toggleActions: "play pause play pause"
    }
})
.to("#myName", {
    duration: 2,
    x: "+=100",
    ease: "cos.inOut",
    scrollTrigger: {
        scrub : 1,
        trigger: "#myName",
        start: "left right",
        toggleActions: "play pause play pause"
    }
})
gsap.from("#projectDiv",{
    duration: 1,
    x : -1000,
    ease: "sine.inOut",
    scrollTrigger: {
        start: "top bottom",
        trigger: "#projectDiv",
        toggleActions: "play pause play pause"
    }
})