var timeout;



const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


function updateTime(){
  var time =document.querySelector('.time')
  const date =new Date()
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  time.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`
}
updateTime()
setInterval(updateTime,1000)

var navRight= document.querySelector('.nav-right')
var line= document.querySelector('.line')
function lineAnimatio(){
 navRight.addEventListener('mouseenter',()=>{
    console.log("entered")
    line.style.width="100%"
   
  })
 navRight.addEventListener('mouseleave',()=>{
    console.log("leaved")
    line.style.transformOrigin="right"
    line.style.width="0%"
   
  })
}


function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
firstPageAnim()
function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();
// firstPageAnim();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener('mouseenter',()=>{
    document.querySelector('#minicircle').style.width="40px"
    document.querySelector('#minicircle').style.height="40px"
    document.querySelector('#minicircle>h3').innerHTML='View'
    document.querySelector('#minicircle').style.padding="50px"
    document.querySelector('#minicircle').style.mixBlendMode="none"

 
  })
  elem.addEventListener('mouseleave',()=>{
    document.querySelector('#minicircle').style.width="10px"
    document.querySelector('#minicircle').style.height="10px"
    document.querySelector('#minicircle>h3').innerHTML=''
    document.querySelector('#minicircle').style.padding="0px"
    document.querySelector('#minicircle').style.mixBlendMode="difference"
  })

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

// Menu Animation--->
var tl2=gsap.timeline()
gsap.set(".nav-down-anime",{y:-50,opacity:0})
document.querySelector(".menu").addEventListener("click",()=>{
  // console.log("Hello menu")
  tl2.to('.menu',{
    y:20,
    opacity:0,
    display:"none",
    ease:Power1
  })
  tl2.to('.nav-down-anime',{y:0,duration:2,stagger:0.1,opacity:1, ease:Expo.easeInOut},"<")
})

// var aboutpage=document.querySelector('#about')
// gsap.to('#second',{
//   scrollTrigger:{
//     trigger:'#second',
//     scroller:'#main',
//     markers:true,
//     start:"top 20%",
//     end:"top 0%",
//     scrub:2,

//   }
// })




// Main loading page animation--->

var tl3=gsap.timeline()
gsap.set('.upperja',{y:100})
tl3.to('.text1',{
  y:0,
  
})
tl3.to('.text1',{
  y:-250,
  delay:.4
  
})
tl3.to('.text2',{
  y:-100,
  opacity:1
 
})
tl3.to('.text2',{
  y:-250,
  delay:.4
})
tl3.to('.text3',{
  y:-180,
  
})
tl3.to('.text3',{
  y:-250,
  delay:.4
})
tl3.to('.mainloading2',{
  yPercent:-100,
  duration:2,
  ease:Expo.inOut
})
tl3.to('.mainloading',{
  yPercent:-100,
  ease:Expo.inOut,
  duration:2,
},"<10%")
tl3.to('.yello',{
  yPercent:-100,
  ease:Expo.inOut,
 
},"<5%")

