const heroSwiperEl = document.querySelector('.hero__swiper');
const noveltiesSwiperEl = document.querySelector('.novelties__swiper');

const heroSwiper = new Swiper(heroSwiperEl, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const noveltieSwiper = new Swiper(noveltiesSwiperEl, {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  // loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});