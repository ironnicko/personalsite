//Animation
gsap.registerPlugin(ScrollTrigger);

var tlm = gsap.timeline();
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
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: "#triangeSVGdiv",
        start: "top bottom",
        toggleActions: "play pause play pause"
    }
})
.from("#cardProjects", {
    duration: 0.1,
    opacity: 0,
    x: 1000,
    ease: "cos.inOut",
    scrollTrigger: {
        trigger: "#projectDiv",
        start: "top top",
        toggleActions: "play pause play pause"
    }
})
.to("#myName", {
    duration: 2,
    x: "+=100",
    ease: "cos.inOut",
    scrollTrigger: {
        scrub : 1,
        trigger: "#aboutmeContainer",
        start: "left right",
        toggleActions: "play pause play pause"
    }
})
gsap.from("#skillsCard", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "cos.inOut",
    scrollTrigger: {
        trigger: "#aboutmeContainer",
        start: "left right",
        toggleActions: "play pause play pause"
    }
})
// gsap.from("#projectDiv",{
//     duration: 1,
//     x : -1000,
//     ease: "sine.inOut",
//     scrollTrigger: {
//         start: "top bottom",
//         trigger: "#projectDiv",
//         toggleActions: "play pause play pause"
//     }
// })