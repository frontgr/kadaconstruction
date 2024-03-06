$(document).ready(function () {
  // Set initial display property of .menu-popup to none
  $(".menu-popup").css("display", "none");

  $(".header__hamburger").click(function () {
    $(".menu-popup").toggle();
    $(".header, .main, .footer").toggleClass(
      "header-blured main-blured footer-blured",
    );
  });

  $(".menu-popup__close").click(function () {
    $(".menu-popup").hide();
    $(".header, .main, .footer").removeClass(
      "header-blured main-blured footer-blured",
    );
  });
  $(".menu-popup__menu-item").click(function () {
    $(".menu-popup").hide();
    $(".header, .main, .footer").removeClass(
      "header-blured main-blured footer-blured",
    );
  });
  $(".menu-popup__logo").click(function () {
    $(".menu-popup").hide();
    $(".header, .main, .footer").removeClass(
      "header-blured main-blured footer-blured",
    );
  });
});
