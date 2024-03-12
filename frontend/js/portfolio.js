let portfolio_show_more = $("#portfolio__showmore");
let portfolio_hide = $("#portfolio__hide");
let portfolio_image = $(".portfolio__image-extra");
let isFirstLoad = true;
portfolio_show_more.on("click", function () {
  portfolio_show_more.css("display", "none");
  portfolio_hide.css("display", "block");

  portfolio_image.each((index, el) => {
    $(el).removeClass("portfolio__image-extra");
  });
});
portfolio_hide.on("click", function () {
  portfolio_hide.css("display", "none");
  portfolio_show_more.css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, 200);

  portfolio_image.each((index, el) => {
    $(el).addClass("portfolio__image-extra");
  });
});
$(document).ready(function () {
  function changeImageAttributes() {
    var screenWidth = $(window).width();
    if (screenWidth < 768) {
      $("#14th").attr("src", "../images/portfolio/portfolio__img-9.png");
      $("#1st").attr("src", "../images/portfolio/portfolio__img-10.png");
      $("#4th").attr("src", "../images/portfolio/portfolio__img-11.png");

      $("#1st-t").text("Капитальный ремонт квартиры под ключ");
      $("#10th-t").text("Ремонт и отделка спальной комнаты");

      $("#11th-t").text("Ремонт и обустройство гардеробной комнаты");
      $("#4th-t").text("Монтаж камина и обустройство каминной");

      $("#9th").attr("src", "../images/portfolio/portfolio__img-14.png");
      $("#10th").attr("src", "../images/portfolio/portfolio__img-1.png");
      $("#11th").attr("src", "../images/portfolio/portfolio__img-4.png");
    } else {
      $("#14th").attr("src", "../images/portfolio/portfolio__img-14.png");
      $("#1st").attr("src", "../images/portfolio/portfolio__img-1.png");
      $("#4th").attr("src", "../images/portfolio/portfolio__img-4.png");
      $("#9th").attr("src", "../images/portfolio/portfolio__img-9.png");
      $("#10th").attr("src", "../images/portfolio/portfolio__img-10.png");
      $("#11th").attr("src", "../images/portfolio/portfolio__img-11.png");

      $("#1st-t").text("Ремонт и отделка спальной комнаты");
      $("#10th-t").text("Капитальный ремонт квартиры под ключ");

      $("#11th-t").text("Монтаж камина и обустройство каминной");
      $("#4th-t").text("Ремонт и обустройство гардеробной комнаты");
    }
  }
  changeImageAttributes();
  $(window).resize(changeImageAttributes);
});
