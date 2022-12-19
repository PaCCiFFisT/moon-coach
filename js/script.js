const swiper = new Swiper('.swiper', {
  // Optional parameters
  preventInteractionOnTransition: true,
  autoHeight: true,
  direction: 'vertical',
  loop: true,
  speed: 10000,
  slidesPerView: 'auto',
  autoplay:{
    delay:0,
  }

});

const swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
  preventInteractionOnTransition: true,
  autoHeight: true,
  direction: 'vertical',
  loop: true,
  speed: 10000,
  slidesPerView: 'auto',
  autoplay:{
    reverseDirection: true,
    delay:0,
  }

});
