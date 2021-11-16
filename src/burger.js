/**
 * Содержит код, отвечающий за правильное поведение меню в шапке сайта
 */
"use strict"

document.querySelector("#burger-menu").addEventListener("click", event => {
  document.querySelector("#nav").classList.toggle("active");
  event.target.classList.toggle("active");
});
