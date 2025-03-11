
"use strict";

import { client } from "../../../src/js/api_configure";
import { menu } from "../../../src/js/menu";
import { photoCard } from "../../../src/js/photo_card";
import { gridInit, updateGrid } from "../../../src/js/utils/masonry_grid";
import { ripple } from "../../../src/js/utils/ripple";
import { favorite } from "../../../src/js/favorite";



const $rippleElems = document.querySelectorAll("[data-ripple]");

$rippleElems.forEach($rippleElem => ripple($rippleElem));




window.addEventListener("loadstart", function () {
  document.body.style.opacity = "0";
});

window.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = "1";
});




const  $menuWrappers = document.querySelectorAll("[data-menu-wrapper]");

$menuWrappers.forEach($menuWrapper => {
  menu($menuWrapper);
});


const favoritePhotos = JSON.parse(window.localStorage.getItem("favorite")).photos;
const $favoriteBtn = document.querySelector("[data-add-favorite]");
const photoId = window.location.search.split("=")[1];

$favoriteBtn.classList[favoritePhotos[photoId] ? "add" : "remove"]("active");

favorite($favoriteBtn, "photos", photoId);



const $detailWrapper = document.querySelector("[data-detail-wrapper]");
const $downloadLink = document.querySelector("[data-download-link]");
const $downloadMenu = document.querySelector("[data-download-menu]");

client.photos.detail(photoId, data => {

  

  const {
    avg_color,
    height,
    width,
    photographer,
    alt,
    src
  } = data;

  $downloadLink.href = src.original;

  Object.entries(src).forEach(item => {
    const [key, value] = item;

    $downloadMenu.innerHTML += `
      <a href="${value}" download class="menu-item" data-ripple data-menu-item>
        <span class="label-large text">${key}</span>

        <div class="state-layer"></div>
      </a>
    `;
  });

  $detailWrapper.innerHTML = `
    <figure class="detail-banner" style="aspect-ratio: ${width} / ${height}; background-color: ${avg_color}">
      <img src="${src.large2x}" width="${width}" height="${height}" alt="${alt}" class="img-cover">
    </figure>

    <p class="title-small">Photograph by <span class="color-primary">${photographer}</span></p>
  `;

  const  $detailImg = $detailWrapper.querySelector("img");

  $detailImg.style.opacity = 0;

  $detailImg.addEventListener("load", function () {

    this.animate({
      opacity: 1
    }, { duration: 400, fill: "forwards" });

    if (alt) {
      client.photos.search({ query: alt, page: 1, per_page: 30 }, data => {
        loadSimilar(data);
      });
    } else {
      $loader.style.display = "none";
      $photoGrid.innerHTML = "<p>No similar photo found.</p>";
    }

  });

});




const  $photoGrid = document.querySelector("[data-photo-grid]");
const  photoGrid = gridInit($photoGrid);
const  $loader = document.querySelector("[data-loader]");

const loadSimilar = function (data) {

  data.photos.forEach(photo => {

    const  $card = photoCard(photo);

    updateGrid($card, photoGrid.columnsHeight, photoGrid.$columns);
    $loader.style.display = "none";

  });

}