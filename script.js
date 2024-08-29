function navAnimation(){
    var nav = document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    tl.to("#navbottom",{
        height:"20vh"
    })
    tl.to("#nav2 h5",{
        display:"block"
    })
    tl.from("#nav2 h5 span",{
        y:25,
        // duration:0.3,
        stagger:{
            amount:0.6
        }
    })
}) 


nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    tl.to("#nav2 h5 span",{
        y:0,
        stagger:{
            amount:0.2
        }
    })
    tl.to("#nav2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#navbottom",{
        height:0,
        duration:0.2
    })
}) 

}
navAnimation()