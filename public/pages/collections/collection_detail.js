

"use strict";

import { client } from "../../../src/js/api_configure";
import {gridInit,updateGrid}  from "../../../src/js/utils/masonry_grid"
import {photoCard}  from "../../../src/js/photo_card"
import {videoCard} from "../../../src/js/video_card"
import {urlDecode} from "../../../src/js/utils/urlDecode"

const $collectionGrid =  document.querySelector("[data-collection-grid]")
const $title = document.querySelector("[data-title]")
const collectionGrid = gridInit($collectionGrid)
const perPage = 30
let currentPage = 1
let totalPage = 0
const collectionObj = urlDecode(window.location.search.slice(1))

$title.textContent = `${collectionObj.title} collections`
document.title = `${collectionObj.title} collections`

const loadCollection = function (page) {
    client.collections.detail(collectionObj.collectionId,{per_page:perPage,page:page},data => {
        totalPage = Math.ceil(data.total_results / perPage)

        data.media.forEach(item => {
            let $card
            switch (item.type.toLowerCase()) {
                case "photo":
                    $card = photoCard(item)
                    break;
            
                case "video":
                    $card = videoCard(item)
                    break;
            }
            updateGrid($card,collectionGrid.columnsHeight,collectionGrid.$columns)
            isLoaded = true;
            if (currentPage >= totalPage) $loader.style.display = "none";
        })
    })
}

loadCollection(currentPage)

const $loader = document.querySelector("[data-loader]");
let isLoaded = true;

window.addEventListener("scroll", function () {

  if ($loader.getBoundingClientRect().top < (window.innerHeight * 2) && currentPage <= totalPage && isLoaded) {

    currentPage++;
    loadCollection(currentPage);
    isLoaded = false;

  }

})