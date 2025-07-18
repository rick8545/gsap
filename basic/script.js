gsap.to("#page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        triger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
}) ;

var path="M 10 250 Q 95 250 990 250";
var finalPath="M 10 250 Q 95 250 990 250";

var string=document.querySelector("#string");

string.addEventListener("mousemove",function(dets)
{
    const bounds = string.getBoundingClientRect();
    const x = dets.clientX - bounds.left;
    const y = dets.clientY - bounds.top;

    path=`M 10 250 Q ${dets.x} ${dets.y} 990 250`

    gsap.to("svg path",{
        attr:{d:path},
        duration:2.5,
        ease: "elastic.out(1,0.3)",
    })
})

string.addEventListener("mouseleave",function()
{
    path=finalPath;

    gsap.to("svg path",{
        attr:{d:path}
    })
})