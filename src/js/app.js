

"use strict";

import { client } from "./api_configure"
import { collectionCard } from "./collection_card";
import { photoCard } from "./photo_card";
import { gridInit, updateGrid } from "./utils/masonry_grid";
import { videoCard } from "./video_card";

const $photoGrid = document.querySelector("[data-photo-grid]")

$photoGrid.innerHTML = `
<div class="skeleton">

</div>
`.repeat(18)

client.photos.curated({page:1,per_page:20},data => {

    $photoGrid.innerHTML = ""
    
    const photoGrid = gridInit($photoGrid)

    data.photos.forEach(photo => {
        const $photoCard = photoCard(photo)
        updateGrid($photoCard,photoGrid.columnsHeight,photoGrid.$columns)
    })  
})



const $videoGrid = document.querySelector("[data-video-grid]");

$videoGrid.innerHTML = `<div class="skeleton"></div>`.repeat(18);

client.videos.popular({ per_page: 20 }, data => {

  $videoGrid.innerHTML = "";
  const videoGrid = gridInit($videoGrid);

  data.videos.forEach(video => {

    const $videoCard = videoCard(video);

    updateGrid($videoCard, videoGrid.columnsHeight, videoGrid.$columns);

  });

})



const  $collectionGrid = document.querySelector("[data-collection-grid]")


client.collections.featured({ per_page: 18 }, data => {

    data.collections.forEach(collection => {
  
      const  $collectionCard = collectionCard(collection);
  
      $collectionGrid.appendChild($collectionCard);
  
    });
  
  });