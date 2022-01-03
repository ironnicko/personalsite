//Animation
gsap.registerPlugin(ScrollTrigger);

var titles = [
    "#d2socials",
    "#iphone_classifier",
    "#online-class-launcher",
    "#graph-for-stock",
];

var tlm = gsap.timeline();
tlm
.to("#welcomeText", {
    duration: 1.5,
    x: "+=150",
    yoyo: true,
    ease: "cos.inOut",
    scrollTrigger: {
        scrub : 1,
        trigger: "#welcomeText",
        start: "bottom bottom",
        end: "top top",
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
        trigger: "html",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause play pause"
    }
})
// .from("#cardProjects", {
//     duration: 1.5,
//     opacity: 0,
//     x: 500,
//     autoAlpha: 1,
//     ease: "sine.out",
//     scrollTrigger: {
//         scrub: 1,
//         trigger: "#second .col",
//         start: "top bottom",
//         end: "bottom top", 
//         toggleActions: "play pause play pause", 
//     }
// })
titles.forEach(item => {
    tlm.from(item, {
    duration: 1.5,
    opacity: 0,
    x: 500,
    ease: "sine.out",
    scrollTrigger: {
        scrub: 0.75,
        trigger: item,
        start: "top top",
        end: "bottom bottom", 
        toggleActions: "restart complete complete reverse", 
    }}
    )
}
)
tlm.to("#myName", {
    duration: 1,
    x: "+=100",
    ease: "cos.out",
    scrollTrigger: {
        scrub : 1,
        ease: "back",
        trigger: "#aboutmeContainer",
        start: "left right",
        toggleActions: "play pause play pause"
    }
})
gsap.from("#skillsCard", {
    duration: 0.5,
    opacity: 0,
    x: 500,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#aboutmeContainer",
        start: "left right",
        end: "bottom bottom",
        toggleActions: "restart complete complete reverse"
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