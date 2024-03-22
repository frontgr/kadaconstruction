document.addEventListener("DOMContentLoaded", function () {
  var fromIndex = localStorage.getItem("fromIndex");
  if (fromIndex === "true") {
    var button = document.getElementById("portfolio__showmore");
    button.scrollIntoView({ behavior: "smooth", block: "start" });
    button.click();
    localStorage.removeItem("fromIndex");
  }
});
