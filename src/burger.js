/**
 * Содержит код, отвечающий за правильное поведение меню в шапке сайта
 */
"use strict"

const menu = document.querySelector("#nav_menu");
const planets = document.querySelector("#nav_planets");

menu.addEventListener("click", event => {
  const node = event.target;
  node.classList.toggle("active");      // переключаем состояние кнопки меню

  if (node.className.includes("active")) {    // если кнопка находится в активном состоянии, нужно отобразить список планет
    planets.style.display = "block";
    node.firstElementChild.className = "arrow up";
    return;
  }

  // иначе скрыть список
  planets.style.display = "none";
  node.firstElementChild.className = "arrow down";
});

// при клике в любое место страницы, кроме списка планет, нужно скрыть сам список
document.body.addEventListener("click", event => {
  if (!event.target.className.includes("nav__button")) {
    menu.classList.remove("active");
    planets.style.display = "none";
    menu.firstElementChild.className = "arrow down";
  }
});

