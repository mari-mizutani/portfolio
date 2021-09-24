// ===============================================
//hamburger icon
// ===============================================
let hamburger = document.querySelector(".navbar-toggler-icon-custom");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");

hamburger.addEventListener("click",()=>{
  line1.classList.toggle("open1");
  line2.classList.toggle("open2");
  line3.classList.toggle("open3");
})


// ===============================================
//hero
// ===============================================

//green circle
anime({
    targets: '.circle',
    scale: {
      value: 2.5,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
  });

//title
anime({
    targets: '.name, .occupation',
    opacity: ['0', '1'],
    easing:'easeInOutExpo',
    duration: 4000,
});

//arrow
anime({
  targets: '.arrow',
  translateY: -20,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true
});

// ===============================================
//navbar bg color change with scroll 
// ===============================================
const navBg = document.querySelector('.navbar');

window.onscroll=function(){
  let top = window.scrollY;
  if(top>=20){
    navBg.classList.add('nav-bg');
  }else{
    navBg.classList.remove('nav-bg');
  }
};
