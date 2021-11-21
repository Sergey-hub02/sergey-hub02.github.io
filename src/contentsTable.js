/**
 * Код, отвечающий за создание автособираемого оглавления
 * На странице могут быть только заголовки h2
 */
"use strict"

let sections = [];
const contentsTable = document.querySelector("#contentsTable");

// выбираем все секции, у которых есть атрибут id
[...document.querySelectorAll(".section")].forEach(section => {
  if (section.getAttribute("id") !== null)
    sections.push(section);
});

// массив всех заголовков страницы
const headings = sections.map(section => {
  return section.querySelector(".section__title");
});

// создание списка заголовков
const ol = document.createElement("ol");
ol.className = "orderedlist";

headings.forEach((heading, index) => {
  const li = document.createElement("li");

  li.className = "orderedlist__item";
  li.innerHTML = `<a href="#${sections[index].getAttribute("id")}">${heading.textContent}</a>`;

  ol.appendChild(li);
});

contentsTable.appendChild(ol);
