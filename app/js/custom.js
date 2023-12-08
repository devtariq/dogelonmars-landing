/**
 * RideNexa - Ride Sharing HTML Template
 *
 * @author themeVillage (https://www.theme-village.com/)
 * @version 1.0.0
 **/

'use strict';

let cosmic = new Swiper('.cosmic-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.comics__btn-next',
    prevEl: '.comics__btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

  window.addEventListener(
    'scroll',
    () => {
      let header = document.querySelector('.navbar');
      header.classList.toggle('header--sticky', window.scrollY > 0);
    },
    {passive: true}
  );