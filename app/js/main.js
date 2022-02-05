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


  $('.other-job__tab').on('click', function (e) {
    e.preventDefault();
    $('.other-job__tab').removeClass('other-job__tab--active')
    $(this).addClass('other-job__tab--active');

    $('.other-job__item').removeClass('other-job__item--active')
    $($(this).attr('href')).addClass('other-job__item--active')
  });

  $('.other-job__tab').on('click', function (e) {
    e.preventDefault();
    $('.other-job__tab').removeClass('other-job__tab--active')
    $(this).addClass('other-job__tab--active');

    $('.other-job__item').removeClass('other-job__item--active')
    $($(this).attr('href')).addClass('other-job__item--active')
  });

  if ($(".portfolio__swiper").length) {
    var swiperBig = new Swiper(".portfolio__swiper", {
      slidesPerView: 1,
      spaceBetween: 5,
      watchSlidesProgress: true,
      updateOnWindowResize: !0,
      navigation: {
        nextEl: "[data-work-example] .swiper-button-next",
        prevEl: "[data-work-example] .swiper-button-prev",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 5,
          updateOnWindowResize: !0,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
    swiperBig.on("imagesReady", function () {
        swiperBigFunc(), swiperBig.update();
      }),
      swiperBig.on("beforeResize", function () {
        swiperBigFunc();
      }),
      swiperBig.on("orientationchange", function () {
        swiperBigFunc();
      });
  }

  swiperBigFunc()

  function swiperBigFunc() {
    var e = $(".portfolio__item.swiper-slide").eq(0).width();
    console.log(e);
    return $(".portfolio__inner").css("width", e);
  }
  if (
    ($(".switch-slide__before").addClass("switch-slide__before--active"),
      $(".switch-slide__before").on("click", (e) => {
        $(".portfolio__item.swiper-slide").eq(1) && (swiperBig.slideTo(0, 800, !0), $(".switch-slide__after").removeClass("switch-slide__after--active"), $(".switch-slide__before").addClass("switch-slide__before--active"));
      }),
      $(".switch-slide__after").on("click", (e) => {
        $(".portfolio__item.swiper-slide").eq(0) && (swiperBig.slideTo(1, 800, !0), $(".switch-slide__before").removeClass("switch-slide__before--active"), $(".switch-slide__after").addClass("switch-slide__after--active"));
      }),
      $(".portfolio__subswiper-container").length)
  ) {
    var swiperMini = new Swiper(".portfolio__subswiper-container", {
      slidesPerView: 7,
      spaceBetween: 7,
      centeredSlides: !0,
      loop: !0,
      slideToClickedSlide: !0,
      pagination: {
        el: ".swiper-pagination",
        clickable: !0,
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 5,
        },
        1000: {
          slidesPerView: 7,
        },
      },
    });
    swiperMini.on("slideChange", function () {
      var e = swiperMini.realIndex;
      console.log(e);
      var a = $("[data-swiper-slide-index=" + e + "]").data("img-mini"),
        t = $("[data-swiper-slide-index=" + e + "]").data("title-mini"),
        i = $("[data-swiper-slide-index=" + e + "]").data("day-mini"),
        r = $("[data-swiper-slide-index=" + e + "]").data("total-mini"),
        n = $(".portfolio__swiper .swiper-slide");
      swiperBig.slideTo(0, 800, !0),
        $(".portfolio__swiper .swiper-slide").removeAttr("href"),
        $(".portfolio__swiper .swiper-slide img").removeAttr("src"),
        $(".portfolio__subtitle").text(t),
        $("[data-total] span").text(r),
        $("[data-day] span").text(i);
      for (let e = 0; e < a.length; e++) $(n[e]).attr("href", a[e]), $(n[e]).find("img").attr("src", a[e]);
    });
  }

  const workSlider = new Swiper('.work-process__slider', {
    slidesPerView: 3,
    spaceBetween: 12,
    navigation: {
      nextEl: '.work-process__arrow--next',
      prevEl: '.work-process__arrow--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1000: {
        spaceBetween: 20,
      },
      1200: {
        spaceBetween: 14,
      }
    }
  });

  const reviewSlider = new Swiper('.reviews__slider-container', {
    slidesPerView: 2,
    spaceBetween: 20,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        direction: 'horizontal',
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      1000: {
        slidesPerView: 2,
      },
    }
  });


  $('.modal-toggle').on('click', function (e) {
    e.preventDefault();
    $('.modal').toggleClass('modal--visible');
  });

  const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        direction: 'horizontal',
      },
      770: {
        direction: 'vertical',
      }
    }
  });

  const sliderImages = new Swiper('.slider__images .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheel: true,
    grabCursor: true,
    thumbs: {
      swiper: sliderThumbs
    },
    breakpoints: {
      0: {
        direction: 'horizontal',
      },
      768: {
        direction: 'vertical',
      }
    }
  });
  let otherJob = document.querySelectorAll('.other-job__item');
  otherJob.forEach(function (n) {
    var mySwiper = new Swiper(n.querySelector('.swiper'), {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: n.querySelector('.swiper-button-next'),
        prevEl: n.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
        }
      }
    });
  });

  let fileInput = document.getElementById("file-upload-input");
  let fileSelect = document.getElementsByClassName("form__label")[0];
  fileSelect.onclick = function () {
    fileInput.click();
  }
  fileInput.onchange = function () {
    let filename = fileInput.files[0].name;
    let selectName = document.getElementsByClassName("file-select-button")[0];
    selectName.innerText = filename;
  }
})