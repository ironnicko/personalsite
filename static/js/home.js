$("#carlink").on("mouseenter mouseleave", e=>{
    $(".lead").toggle()
    $(".car-head").toggle()
})

//Animation [GSAP]

const flightPath = {
    curviness : 1.25,
    autoRotate : true,
    values: [
        {x:100, y:-20}
    ]
}
// gsap.registerPlugin(MotionPathPlugin);
// const circle = $(".svg-circle")
// const tlm = gsap.timeline()
// tlm.to(circle, 1, {
//     x: 100,
//     y: -80,
//     ease : Power1.easeInOut,
//     rotateY: -5
// })
// .to(circle, 1, {
//     x: 500,
//     y: 200,
//     scaleX : 2,
//     scaleY: 2,
//     rotateY: 5
// })
// .to(circle, 1, {
//     y:"-=500" 
// })

// gsap.registerPlugin(ScrollTrigger)

// tlm.set('.actual', {transformOrigin: 'center center'})
// .fromTo('.actual', { opacity: 0, scale: 0.8, cy: "+=200"}, {opacity: 1, scale: 1, cy: 0, duration: 1, immediateRender: false})

// circle.on("scroll", e => {
//     tlm.to(circle, 1, {scaleX:2, scaleY:2})
//     .to(circle, 1, {scaleX:1, scaleY:1})
// }
// )