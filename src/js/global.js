

"use strict";


import { addEventOnElements } from "./utils/event";
import { ripple } from "./utils/ripple";
import { urlDecode } from "./utils/urlDecode";



const $header = document.querySelector("[data-header]")

window.addEventListener("scroll", () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})



const $rippleElems = document.querySelectorAll("[data-ripple]")

$rippleElems.forEach($rippleElem => ripple($rippleElem))

const $navTogglers = document.querySelectorAll("[data-nav-toggler]");

const $navbar = document.querySelector("[data-navigation]");

const $scrim = document.querySelector("[data-scrim]");

addEventOnElements($navTogglers, "click", () => {
    $navbar.classList.toggle("show");
    $scrim.classList.toggle("active");
})


window.filterObj = {}

if (window.location.search.slice(1)) {

    const search = urlDecode(window.location.search.slice(1));

    Object.entries(search).forEach(item => {
        const filterKey = item[0];
        const filterValue = item[1];
        window.filterObj[filterKey] = filterValue;

        if (filterKey !== "query") {
            const $filterItem = document.querySelector(`[data-filter="${filterKey}"`);
            $filterItem?.querySelector("[data-filter-chip]").classList.add("selected");

            if ($filterItem) $filterItem.querySelector("[data-filter-value").innerText = filterValue;
        }
    });

}



if (!window.localStorage.getItem("favorite")) {
    const favoriteObj = {
        photos: {},
        videos: {}
    }

    window.localStorage.setItem("favorite", JSON.stringify(favoriteObj))
}



window.addEventListener("loadstart", function () {
    document.body.style.opacity = "0";
});

window.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
});