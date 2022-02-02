$(function () {
  const headers = document.querySelectorAll(".faq__head");

  headers.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('faq__head--active')) {
        item.classList.remove('faq__head--active');
        this.nextElementSibling.classList.remove('faq__text--active');
      } else {
        item.classList.add('faq__head--active');
        this.nextElementSibling.classList.add('faq__text--active');
      }
    });
  })

  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.other-job__tab').on('click', function (e) {
    e.preventDefault();
    $('.other-job__tab').removeClass('other-job__tab--active')
    $(this).addClass('other-job__tab--active');

    $('.other-job__item').removeClass('other-job__item--active')
    $($(this).attr('href')).addClass('other-job__item--active')
  });

  const workSlider = new Swiper('.work-process__slider', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.other-job__tab').on('click', function (e) {
    e.preventDefault();
    $('.other-job__tab').removeClass('other-job__tab--active')
    $(this).addClass('other-job__tab--active');

    $('.other-job__item').removeClass('other-job__item--active')
    $($(this).attr('href')).addClass('other-job__item--active')
  });
})