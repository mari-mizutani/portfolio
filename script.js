// ---------hero anime.js---------//

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