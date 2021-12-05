$("#carlink").on("mouseenter mouseleave", e=>{
    $(".lead").toggle()
    $(".car-head").toggle()
})

//Animation [GSAP]

// const circle = $(".svg-circle")
// const tlm = gsap.timeline()
// gsap.registerPlugin(ScrollTrigger)

// tlm.set('.actual', {transformOrigin: 'center center'})
// .fromTo('.actual', { opacity: 0, scale: 0.8, cy: "+=200"}, {opacity: 1, scale: 1, cy: 0, duration: 1, immediateRender: false})

// circle.on("scroll", e => {
//     tlm.to(circle, 1, {scaleX:2, scaleY:2})
//     .to(circle, 1, {scaleX:1, scaleY:1})
// }
// )