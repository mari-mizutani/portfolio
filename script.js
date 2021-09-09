// ---------hero anime.js---------//

//green circle
anime({
    targets: '.circle',
    translateX: {
      value: 250,
      duration: 800
    },
    scale: {
      value: 3,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
  });

//title
anime({
    targets: '.name, .ocupation',
    opacity: ['0', '1'],
    easing:'easeInOutExpo',
    duration: 3000,
});