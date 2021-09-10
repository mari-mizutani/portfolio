// ===============================================
//hero anime.js
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

// ===============================================
//navbar bg color change with scroll 
// ===============================================
const navBg = document.querySelector('.navbar');

window.onscroll=function(){
  let top = window.scrollY;
  if(top>=100){
    navBg.classList.add('nav-bg');
  }else{
    navBg.classList.remove('nav-bg');
  }
}

// ===============================================
//about anime.js
// ===============================================
