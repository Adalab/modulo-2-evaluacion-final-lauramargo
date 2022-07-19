'use strict';



// render API
const renderSeries = () => {
    let html = '';
    let classFavorite = '';
    for (const series of seriesAnime) {
        const favoriteFoundIndex = favorites.findIndex((favs) => series.mal_id === favs.mal_id);

        if (favoriteFoundIndex !== -1) {
            classFavorite = 'favourite';
        }
        else {
            classFavorite = '';
        }
        html += `<li class='js-fav ${classFavorite}' id= '${series.mal_id}' >`;
        if (series.images.jpg.image_url !== 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png') {
            html += `<div class="image-container2"><img src='${series.images.jpg.image_url}'class="image2"></div>`;
        }
        else {
            html += `<div class="image-container2"><img src='https://via.placeholder.com/210x295/ffffff/666666/?text=no-photo'class="image2"></div>`;
        }
        html += `<h2 class='${classFavorite}_title2'>${series.title}</h2>`;
        html += `</img></li>`;

    }
    ul.innerHTML = html;
    listenerFav();
};