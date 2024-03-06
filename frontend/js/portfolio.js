let portfolio_show_more = $("#portfolio__showmore");
let portfolio_hide = $("#portfolio__hide");
let portfolio_image = $(".portfolio__image-extra");

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
