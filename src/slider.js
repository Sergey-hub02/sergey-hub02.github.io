"use strict"

const slides = document.querySelectorAll(".slider__item");
const sliderInner = document.querySelector("#slider-inner");
const wrapper = document.querySelector(".slider__wrapper");

const slideWidth = 100 / slides.length;

let slideIndex = 0;
let wrapperWidth;

const init = () => {
  wrapperWidth = wrapper.offsetWidth;
  sliderInner.style.width = slides.length * wrapperWidth + "px";
  moveInner();
}

const moveInner = () => {
  sliderInner.style.left = "-" + slideIndex * wrapperWidth + "px";
}

window.addEventListener("resize", init);

init();
slides.forEach(slide => {
  slide.style.flexBasis = slideWidth + "%";
});

document.querySelector("#button-prev").addEventListener("click", () => {
  if ((--slideIndex) < 0)
    slideIndex = slides.length - 1;

  moveInner();
});

document.querySelector("#button-next").addEventListener("click", () => {
  if ((++slideIndex) >= slides.length)
    slideIndex = 0;

  moveInner();
});
