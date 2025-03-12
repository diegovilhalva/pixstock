"use strict"

import { gridInit, updateGrid } from '../../../src/js/utils/masonry_grid'
import { segment } from "../../../src/js/segment_btn"
import { photoCard } from '../../../src/js/photo_card'
import { videoCard } from '../../../src/js/video_card'

const $favoriteSegment = document.querySelector("[data-segment='favorite']")
let favType = "photos"

segment($favoriteSegment, segmentValue => {
    favType = segmentValue;
    $favGrid.innerHTML = "";
    favGrid = gridInit($favGrid)
    loadFav(favType, favGrid)
})


const $favGrid = document.querySelector("[data-fav-grid]")
let favGrid = gridInit($favGrid)
const favData = JSON.parse(window.localStorage.getItem("favorite"))

const loadFav = function (type, favGridItem) {
    Object.values(favData[type]).forEach(item => {
        let $card

        switch (type) {
            case "photos":
                $card = photoCard(item);
                break;
            case "videos":
                $card = videoCard(item);
                break;
        }
        updateGrid($card,favGridItem.columnsHeight,favGridItem.$columns)
    })
}

loadFav(favType, favGrid)