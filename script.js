var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true, // Enable infinite loop
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function startSwiperAutoplay() {
  setInterval(function () {
    swiper.slideNext();
  }, 2500); // Set the delay as needed
}

startSwiperAutoplay();
