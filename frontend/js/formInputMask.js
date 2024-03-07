$(document).ready(function () {
  $("#phone").inputmask({ mask: "+7 (999) 999-99-99" });
});

let input = $('.form__left-parameters-area-input');
let send_btn = $('.form__right-send__button');

function updatePlaceholder() {
  if (window.innerWidth <= 768) {
        input[0].placeholder = "Площадь помещения";
    } else {
        input[0].placeholder = "Площадь вашего помещения";
  }
  if(window.innerWidth <= 480) {
    send_btn[0].value = "Отправить заявку";
  }else{
    send_btn[0].value = "Отправить заявку для консультации";
  }
}

updatePlaceholder(); // вызываем функцию сразу, чтобы установить начальное значение
window.addEventListener('resize', updatePlaceholder);