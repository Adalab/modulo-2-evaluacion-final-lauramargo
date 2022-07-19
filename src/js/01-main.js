'use strict';

//globals
const textUser = document.querySelector('.js-textUser');
const btnSearch = document.querySelector('.js-btnSearch');
const btnReset = document.querySelector('.js-btnReset');
const ul = document.querySelector('.js-results');
const favList = document.querySelector('.js-favorites');

let seriesAnime = [];
let favorites = [];

function handleDeleteEach(ev) {
    const iconTrash = parseInt(ev.currentTarget.id);

    const newIconFound = favorites.findIndex((idIconF) => idIconF.mal_id === iconTrash);

    if (newIconFound !== -1) {
        favorites.splice(newIconFound, 1);
        renderFavoriteList();
        localStorage.setItem('data', JSON.stringify(favorites));
    }
}

const listenerTrash = () => {
    const trashBtn = document.querySelectorAll('.js_trash');
    for (const eachTrashBtn of trashBtn) {
        eachTrashBtn.addEventListener('click', handleDeleteEach);
    }
};

const renderFavoriteList = () => {
    let html = [];
    for (const eachFavorite of favorites) {
        html += `<li class='js-favs' id= '${eachFavorite.mal_id}' >`;
        if (eachFavorite.images.jpg.image_url !== 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png') {
            html += `<div class="image-container"><img src='${eachFavorite.images.jpg.image_url}'class="image"></div>`;
        }
        else {
            html += `<div class="image-container"><img src='https://via.placeholder.com/210x295/ffffff/666666/?text=no-photo'class="image"></div>`;
        }
        html += `<h2 class='_title'>${eachFavorite.title}</h2>`;
        html += `<button class=' js_trash' id='${eachFavorite.mal_id}'><i class='trashIcon  fa-solid fa-trash-can' ></i></button>`;
        html += `</img></li>`;
    }
    favList.innerHTML = html;
    listenerTrash();
};

function handleClick(event) {

    const idSelected = event.currentTarget.id;

    const newIdSelected = parseInt(idSelected);


    const serieFound = seriesAnime.find((series) => series.mal_id === newIdSelected);


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

// event button search (click)

btnSearch.addEventListener('click', (event) => {
    event.preventDefault();
    showApi();

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
};

function download() {
    const downloadLocal = JSON.parse(localStorage.getItem('data'));
    if (downloadLocal) {
        favorites = downloadLocal;
        renderFavoriteList();
    }
}
download();