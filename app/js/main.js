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
})