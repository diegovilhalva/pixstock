

"use strict";

import { segment } from "./segment_btn";
import { addEventOnElements } from "./utils/event";
import { ripple } from "./utils/ripple";
import { updateUrl } from "./utils/updateUrl";
import { urlDecode } from "./utils/urlDecode";



const $searchTogglers = document.querySelectorAll(
    "[data-search-toggler]"
);

const $searchView =
    document.querySelector("[data-search-view]");


addEventOnElements($searchTogglers, "click", () => {
    $searchView.classList.toggle("show");
})

const $searchField = document.querySelector("[data-search-field]")


const $searchClearBtn = document.querySelector("[data-search-clear-btn]")


$searchClearBtn.addEventListener("click", () => $searchField.value = "")



const $searchSegment = document.querySelector("[data-segment='search']")

const $activeSegmentBtn = document.querySelector("[data-segment-btn]")


window.searchType = $activeSegmentBtn.dataset.segmentValue

segment($searchSegment, (segmentValue) => {
    window.searchType = segmentValue
})

const $searchBtn = document.querySelector("[data-search-btn]")

$searchBtn.addEventListener("click", () => {
    const $searchValue = $searchField.value.trim();
    if ($searchValue) {
        updateSearchHistory($searchValue);
        window.filterObj.query = $searchValue;
        updateUrl(window.filterObj, window.searchType);
    }
});



$searchField.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && $searchField.value.trim()) {
        $searchBtn.click();
    }
})


let searchHistory = {
    items: [],
};

if (window.localStorage.getItem("search_history")) {
    searchHistory = JSON.parse(window.localStorage.getItem("search_history"))
} else {
    window.localStorage.setItem("search_history", JSON.stringify(searchHistory))
}

const updateSearchHistory = (searchValue) => {
    if (searchHistory.items.includes(searchValue)) {
        searchHistory.items.splice(searchHistory.items.indexOf(searchValue), 1)

    }
    searchHistory.items.unshift(searchValue)
    window.localStorage.setItem("search_history", JSON.stringify(searchHistory))
}



const $searchList =
    document.querySelector("[data-search-list]")

const historyLength = searchHistory.items.length

for (let i = 0; i < historyLength & i <= 6; i++) {
    const $listItem = document.createElement("button")
    $listItem.classList.add("list-item")

    $listItem.innerHTML = `
         <span class="material-symbols-outlined leading-icon" aria-hidden="true">history</span>
            <div class="body-large text">${searchHistory.items[i]}</div>
            <div class="state layer"></div>
    `
    ripple($listItem)

    $listItem.addEventListener("click",() => {
        $searchField.value = $listItem.children[1].textContent
        $searchBtn.click()
    })

    $searchList.appendChild($listItem)

}

const search = urlDecode(window.location.search.slice(1))

if (search.query) $searchField.value = search.query

