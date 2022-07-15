'use strict';


//globales
const textUser = document.querySelector('.js-textUser');
const btnSearch = document.querySelector('.js-btnSearch');
const btnReset = document.querySelector('.js-btnReset');
const ul = document.querySelector('.js-ul');

let data = [];

// pintar datos de la API
const renderSeries = () => {
    let html = '';
    for (const series of seriesAnime) {
        html += `<li><article><img src='${series.images.jpg.image_url}' />`;
        html += `<h2>${series.title}</h2>`;
        html += `</article></li>`;
    }
    ul.innerHTML = html;
};
//pedir datos del servidor
const showApi = () => {
    fetch(' https://api.jikan.moe/v4/anime')

        .then((response) => response.json())
        .then((dataSeries) => {
            seriesAnime = dataSeries.data;
            renderSeries();
        });
};

showApi();