$(function () {
  let navBar = $('.header__bottom');
  let navPos = navBar.offset().top;
  $(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    if (scrollPos >= navPos) {
      navBar.addClass('header__bottom--fixed');
    } else {
      navBar.removeClass('header__bottom--fixed');
    }
  });

  let inputs = $('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);

  $('.nav__link--menu').on('click', function (e) {
    e.preventDefault
    $('.submenu__list').toggleClass('submenu__list--active')
  })
  const submenuBtn = document.querySelectorAll('.submenu__btn')
  submenuBtn.forEach((el) => {
    el.addEventListener('click', () => {
      el.nextElementSibling.classList.toggle('dropdown--active')
    })
  })

  $('.fixed-menu__btn').on('click', function (el) {
    $('.fixed-menu__btn').toggleClass('fixed-menu__btn--active')
    $('.fixed-menu__inner').toggleClass('fixed-menu__inner--visible')
  })

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
      autoplay: {
        delay: 5000,
      },
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
        h = $("[data-swiper-slide-index=" + e + "]").data("href"),
        n = $(".portfolio__swiper .swiper-slide");
      console.log(h);
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
    autoplay: {
      delay: 5000,
    },
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

  $('.toggle').on('click', function (e) {
    $('.body').toggleClass('body--hidden')
    $('.burger-btn').toggleClass('burger-btn--active')
    $('.header-menu').toggleClass('header-menu--visible');
  });

  const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      320: {
        direction: 'horizontal',
        spaceBetween: 10,
      },
      1000: {
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
    }
  });
  let otherJob = document.querySelectorAll('.other-job__item');
  otherJob.forEach(function (n) {
    var mySwiper = new Swiper(n.querySelector('.swiper'), {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: ('.swiper-button-next'),
        prevEl: ('.swiper-button-prev'),
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
  let fileSelect = document.getElementsByClassName("form__label--file")[0];
  fileSelect.onclick = function () {
    fileInput.click();
  }
  fileInput.onchange = function () {
    let filename = fileInput.files[0].name;
    let selectName = document.getElementsByClassName("file-select-button")[0];
    selectName.innerText = filename;
  }

  function DynamicAdapt(type) {
    this.type = type;
  }

  DynamicAdapt.prototype.init = function () {
    const _this = this;
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    this.nodes = document.querySelectorAll("[data-da]");

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    });

    for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
        return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    }
  };

  DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
    } else {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        if (оbject.element.classList.contains(this.daClassname)) {
          this.moveBack(оbject.parent, оbject.element, оbject.index);
        }
      }
    }
  };

  DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
    }
    if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
  }

  DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
      parent.insertAdjacentElement('beforeend', element);
    }
  }

  DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  };

  DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return -1;
          }

          if (a.place === "last" || b.place === "first") {
            return 1;
          }

          return a.place - b.place;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return 1;
          }

          if (a.place === "last" || b.place === "first") {
            return -1;
          }

          return b.place - a.place;
        }

        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  };

  const da = new DynamicAdapt("max");
  da.init();
})