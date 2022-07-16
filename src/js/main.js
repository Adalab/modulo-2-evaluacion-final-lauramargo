'use strict';
// preguntar a profes
//xk me salen unoas imagenes con el titulo encima de la img y otros con el titulo debajo



//globals
const textUser = document.querySelector('.js-textUser');
const btnSearch = document.querySelector('.js-btnSearch');
const btnReset = document.querySelector('.js-btnReset');
const ul = document.querySelector('.js-ul');

let seriesAnime = [];
let favorites = [];

function handleClick(event) {
    console.log(event.currentTarget.id);
}

function listenerFav() {
    const liFav = document.querySelectorAll('.js-fav');
    for (const li of liFav) {
        li.addEventListener('click', handleClick);
    }
}

// render API
const renderSeries = () => {
    let html = '';
    for (const series of seriesAnime) {
        html += `<li class="js-fav" id= '${series.mal_id}' >`;
        html += `<h2>${series.title}</h2>`;
        html += `<img src='${series.images.jpg.image_url}'>`;
        html += `</img></li>`;

    }
    ul.innerHTML = html;
    listenerFav();


};



const changeImage = (seriesAnime) => {
    let serieImageUrl = series.images.jpg.image_url;
    if (serieImageUrl === 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png') {
        series.images.jpg.image_url = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    }
    else {
        series.images.jpg.image_url
    }
};



// event button search (click)

btnSearch.addEventListener('click', (event) => {
    event.preventDefault();

    showApi();
    listenerFav();
    renderSeries();
});


//ask to server 
const showApi = () => {
    const userText = textUser.value;
    fetch(`https://api.jikan.moe/v4/anime?q=${userText}`)
        .then((response) => response.json())
        .then((dataSeries) => {
            seriesAnime = dataSeries.data;
            renderSeries();
        });
}; // que no se muestre hasta dar click*/


