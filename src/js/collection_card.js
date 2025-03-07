

"use strict";

import { ripple } from "./utils/ripple";

export const collectionCard = collection => {

    const  root = window.location.origin;
  
    const {
      id,
      title,
      media_count
    } = collection;
  
    const $card = document.createElement("div");
    $card.classList.add("grid-card", "two-line", "list-item");
    $card.setAttribute("title", title);
  
    $card.innerHTML = `
      <div>
        <h3 class="body-large">${title}</h3>
  
        <p class="body-medium label">${media_count} ${media_count > 1 ? 'medias': 'media'} </p>
      </div>
  
      <a href="${root}/pages/collections/collection_detail.html?collectionId=${id}&title=${title}" class="state-layer"></a>
    `;
  
    ripple($card);
  
    return $card;
}  