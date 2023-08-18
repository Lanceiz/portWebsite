
function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem)
    {
        var parent = document.createElement("span");
        var child = document.createElement("span");
    
        parent.classList.add("parent");
        child.classList.add("child");
    
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
    
        elem.innerHTML = "";
        elem.appendChild(parent);
    })
  }
  function loaderAnimation(){
    var tl = gsap.timeline();
    tl.from("#loader .child span", {
        x:100,
        stagger:0.3,
        ease: Power3.easeInOut,
        duration:1,
        delay:0.5,
        
    })
    tl.to("#loader .parent .child", {
        y:"-100%",
        ease: Circ.easeInOut,
        duration:0.5,
    })
    tl.to("#loader", {
        height:0,
        ease: Circ.easeInOut,
        duration:1,
    })
}
  
revealToSpan();
loaderAnimation();

gsap.to("#scroll-d", {
    y:30,
    repeat:-1,
    duration:0.5,
    yoyo:true,
})

gsap.to("#page2 h1", {
    transform:"translateX(-180%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#wrapper",
        // markers:true,
        start:"top -25%",
        end:"top -100%",
        scrub:5,
        pin:true,
    }
})

const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
  cursor2.style.transform = `translate(${clientX}px, ${clientY}px)`;
});
