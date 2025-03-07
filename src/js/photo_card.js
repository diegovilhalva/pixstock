

"use strict";

import { favorite } from "../../public/pages/favorite/favorite";
import { ripple } from "./utils/ripple"

export const photoCard = photo => {
  const root = window.location.origin

  const { alt, avg_color: backdropColor, width, height, id, src: { large } } = photo

  const $card = document.createElement("div")

  $card.classList.add("card", "grid-item")
  $card.style.backgroundColor = backdropColor
  const favoriteItemObj = JSON.parse(window.localStorage.getItem("favorite"))
  $card.innerHTML = `
                <figure class="card-banner" style="--width:${width}; --height:${height};">
                  <img src="${large}" height="${height}"
                   width="${width}" loading="lazy" alt="${alt}" class="img-cover">
                </figure>
                <div class="card-content">
                  <button class="icon-btn small ${favoriteItemObj.photos[id] ? "active" : ""}" aria-label="Add to favorite" data-ripple data-favorite-btn>
                    <span class="material-symbols-outlined" aria-hidden="true">favorite</span>
                    <div class="state-layer"></div>
                  </button>
                </div>
                <a href="${root}/pages/photos/photo_detail.html?id=${id}" class="state-layer"></a>
    `
  const $cardBanner = $card.querySelector("img")
  $cardBanner.style.opacity = 0
  $cardBanner.addEventListener("load", function () {
    this.animate({
      opacity: 1
    }, { duration: 400, fill: "forwards" })
  })

  const $rippeElems = [$card, $card.querySelector("[data-ripple]")]

  $rippeElems.forEach($rippeElem => ripple($rippeElem))

  const $favoriteBtn = $card.querySelector("[data-favorite-btn]")

  favorite($favoriteBtn, "photos", id)
  return $card
}