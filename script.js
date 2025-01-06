function loader(){
let element = document.querySelector("#line1-part1 h5");
let grow = 0 ; 
let interval = setInterval(() => {
    grow++ ; 
    if(grow === 100) clearInterval(interval)
    element.innerHTML = grow ; 
} , 45)

var tl = gsap.timeline() ; 
tl.from(".line h1" , {
    y:150,
    stagger: 0.2,
    duration: 0.6,
    delay:0.5
})
tl.from("#line1-part1 , .line h2" , {
    opacity: 0 
})
tl.to("#loader" , {
    opacity:0,
    delay: 3,
    duration: 0.5
})
tl.from("#page1" , {
    delay: 0.2, 
    y: 1600 , 
    opacity: 0 ,
    ease: Power4 ,
    duration: 0.5 ,
})
tl.to("#loader" , {
    display: "none"
})
tl.from("#nav" , {
    opacity: 0,
})
tl.from("#hero1 h1, #hero2 h1 ,  #hero4 h1" , {
    y: 150,
    opacity: 0,
    stagger: 0.2,
})
}
loader();

function cursorAnimation(){
    document.addEventListener("mousemove" , function (e){ 
        gsap.to("#crsr" , {
            left: e.clientX, 
            top: e.clientY,
        })
    });
    Shery.makeMagnet("#nav-part2 h4", {});
}
cursorAnimation() ; 
function cursor(){
    Shery.mouseFollower({
        skew:true,
        ease: "cubic-bezier(0.23 , 1 , 0.32 , 1)",
        duration: 1,
    });
    var element = document.querySelector("#video-container") ; 
    element.addEventListener("mouseenter" , () => { 
        element.addEventListener("mousemove" , (e) => {
            gsap.to(".mousefollower" ,  {
                opacity: 0 
            })
            gsap.to("#video-cursor" , {
                left: e.x - 600,
                y:e.y - 50
            })
        })
    })
    element.addEventListener("mouseleave" , () => {
        gsap.to(".mousefollower" , {
            opacity: 1
        })
        gsap.to("#video-cursor" , {
            left: "70%",
            top: "-15%"
        })
    })
}
cursor() ; 
function shery(){
    Shery.imageEffect(".image-div" , {
        style: 5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.03,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.53,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey: true,
    })
}
shery() ; 

document.addEventListener("mousemove", (e) => { 
    gsap.to("#flag", {
        x: e.x,
        y: e.y,
        transform: "translate(-50%, -50%)" // Proper string for the CSS transform
    });
});

document.querySelector("#hero3").addEventListener("mouseenter" , () => {
    gsap.to("#flag" , {
        opacity:1
    })
})

document.querySelector("#hero3").addEventListener("mouseleave" , () => {
    gsap.to("#flag" , {
        opacity:0
    })
})