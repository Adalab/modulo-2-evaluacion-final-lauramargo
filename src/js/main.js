'use strict';
// preguntar a profes
//xk me salen unoas imagenes con el titulo encima de la img y otros con el titulo debajo



//globals
const textUser = document.querySelector('.js-textUser');
const btnSearch = document.querySelector('.js-btnSearch');
const btnReset = document.querySelector('.js-btnReset');
const ul = document.querySelector('.js-results');
const favList = document.querySelector('.js-favorites');


let seriesAnime = [];
let favorites = [];

const renderFavoriteList = () => {
    let html = [];
    for (const eachFavorite of favorites) {
        html += `<li class='js-fav' id= '${eachFavorite.mal_id}' >`;
        if (eachFavorite.images.jpg.image_url !== 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png') {
            html += `<img src='${eachFavorite.images.jpg.image_url}'>`;
        }
        else {
            html += `<img src='https://via.placeholder.com/210x295/ffffff/666666/?text=no-photo''>`;
        }
        html += `<h2 class='_title'>${eachFavorite.title}</h2>`;
        html += '<button> <i class=" trash fa-solid fa-trash-can"></i></button>'
        html += `</img></li>`;
    }
    favList.innerHTML = html;
    listenerFav();


};

function handleClick(event) {
    //console.log(event.currentTarget.id);
    const idSelected = event.currentTarget.id;
    //console.log(typeof idSelected);
    const newIdSelected = parseInt(idSelected);
    //console.log(newIdSelected);

    const serieFound = seriesAnime.find((series) => series.mal_id === newIdSelected);
    //console.log(serieFound);

    const favouriteFound = favorites.findIndex((favs) => favs.mal_id === newIdSelected);

    if (favouriteFound === -1) {
        favorites.push(serieFound);
    }
    else {
        favorites.splice(favouriteFound, 1);
    }


    renderSeries();
    renderFavoriteList();
    localStorage.setItem('data', JSON.stringify(favorites));
}

function listenerFav() {
    const liFav = document.querySelectorAll('.js-fav');
    for (const li of liFav) {
        li.addEventListener('click', handleClick);
    }
};

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
            html += `<img src='${series.images.jpg.image_url}'>`;
        }
        else {
            html += `<img src='https://via.placeholder.com/210x295/ffffff/666666/?text=no-photo''>`;
        }
        html += `<h2 class='${classFavorite}_title'>${series.title}</h2>`;
        html += `</img></li>`;

    }
    ul.innerHTML = html;
    listenerFav();
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

        });
}; // que no se muestre hasta dar click*/

function download() {
    const downloadLocal = JSON.parse(localStorage.getItem('data'));
    if (downloadLocal) {
        favorites = downloadLocal;
        renderFavoriteList();
    }

}
download();

