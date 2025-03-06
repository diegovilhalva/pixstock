

"use strict";


import { addEventOnElements } from "./utils/event";
import { ripple } from "./utils/ripple";



const $header = document.querySelector("[data-header]")

window.addEventListener("scroll",() => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})



const $rippleElems = document.querySelectorAll("[data-ripple]")

$rippleElems.forEach($rippleElem => ripple($rippleElem))

const  $navTogglers = document.querySelectorAll("[data-nav-toggler]");

const $navbar = document.querySelector("[data-navigation]");

const $scrim = document.querySelector("[data-scrim]");

addEventOnElements($navTogglers, "click", () => {
    $navbar.classList.toggle("show");
    $scrim.classList.toggle("active");
})


window.filterObj = {}



