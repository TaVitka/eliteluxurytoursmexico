import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

let options = {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 400,
  autoplay: {
    delay: 6000,
  },
  centeredSlides: true,
  modules: [Navigation, Scrollbar, Autoplay],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  }
};


const swiperEvent = new Swiper('.slider__slides', options);