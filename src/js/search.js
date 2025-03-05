

"use strict";

import { ripple } from "./utils/ripple";



const $header = document.querySelector("[data-header]")

window.addEventListener("scroll",() => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})



const $rippleElems = document.querySelectorAll("[data-ripple]")

$rippleElems.forEach($rippleElem => ripple($rippleElem))