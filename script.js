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
function page2animation(){
    var rightElems = document.querySelectorAll(".right-element")
rightElems.forEach(function(element){
    element.addEventListener("mouseenter", function(){
        gsap.to(element.childNodes[3],{
            opacity:1,
            scale:1
        })
    })

    element.addEventListener("mouseleave", function(){
        gsap.to(element.childNodes[3],{
            opacity:0,
            scale:0
    })
    element.addEventListener("mousemove", function(dets){
        gsap.to(element.childNodes[3],{
            x:dets.x - element.getBoundingClientRect().x-50,   
            y:dets.y - element.getBoundingClientRect().y-190 
        })
        })
    })
})

}
page2animation()

function page3VideoAnimation(){
    var page3Center= document.querySelector(".page-3center")
var video = document.querySelector("#page3 video ")
page3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video,{ 
    transform:"scaleX(1) scaleY(2)",
    opacity:1,
    borderRadius:0

    })

})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{ 
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
    

})

}
page3VideoAnimation()
