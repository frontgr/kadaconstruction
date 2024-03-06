const slider = document.querySelector(".reviews__box");
const leftBlock = document.querySelector(".reviews__block-left");
const rightBlock = document.querySelector(".reviews__block-right");
leftBlock.style.display = "none";
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("reviews__box--active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("reviews__box--active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("reviews__box--active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
  console.log(slider.scrollLeft);
  if (slider.scrollLeft === 0) {
    leftBlock.style.display = "none";
  } else {
    leftBlock.style.display = "block";
  }
  if (slider.scrollLeft === 3890 && window.innerWidth >= 1440) {
    rightBlock.style.display = "none";
  } else if (slider.scrollLeft === 4280 && window.innerWidth <= 1440) {
    rightBlock.style.display = "none";
  } else if (slider.scrollLeft === 4480 && window.innerWidth <= 1024) {
    rightBlock.style.display = "none";
  } else {
    rightBlock.style.display = "block";
  }
});
