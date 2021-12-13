//Animation
gsap.registerPlugin(ScrollTrigger);

var tlm = gsap.timeline();
tlm
.to("#welcomeText", {
    duration: 1.5,
    x: "+=200",
    yoyo: true,
    ease: "cos.inOut",
    scrollTrigger: {
        scrub : 1,
        trigger: "#welcomeText",
        start: "bottom bottom",
        toggleActions: "play pause resume pause"
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
        toggleActions: "play pause resume pause"
    }
})
.from("#cardProjects", {
    duration: 1.5,
    opacity: 0,
    x: 500,
    ease: "sine.out",
    scrollTrigger: {
        trigger: "#cardProjects",
        start: "left right",
        toggleActions: "play pause resume pause", 
    }
})
.to("#myName", {
    duration: 1,
    x: "+=100",
    ease: "cos.out",
    scrollTrigger: {
        scrub : 1,
        ease: "back",
        trigger: "#aboutmeContainer",
        start: "left right",
        toggleActions: "play pause resume pause"
    }
})
gsap.from("#skillsCard", {
    duration: 1,
    opacity: 0,
    x: 500,
    ease: "sine.out",
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