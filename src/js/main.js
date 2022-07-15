'use strict';
// preguntar a profes
//xk me salen unoas imagenes con el titulo encima de la img y otros con el titulo debajo
// no vuelvas a borrar lo del html += de final art y li 


//globales
const textUser = document.querySelector('.js-textUser');
const btnSearch = document.querySelector('.js-btnSearch');
const btnReset = document.querySelector('.js-btnReset');
const ul = document.querySelector('.js-ul');

let seriesAnime = [];

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
/*const showApi = () => {
    fetch(' https://api.jikan.moe/v4/anime')

        .then((response) => response.json())
        .then((dataSeries) => {
            seriesAnime = dataSeries.data;
            renderSeries();
        });
};*/ // que no se muestre hasta dar click*/


// eventos

btnSearch.addEventListener('click', (event) => {
    event.preventDefault();
    const userText = textUser.value;
    fetch(`https://api.jikan.moe/v4/anime?q=${userText}`)
    fetch(' https://api.jikan.moe/v4/anime')

        .then((response) => response.json())
        .then((dataSeries) => {
            console.log(dataSeries.data);
            seriesAnime = dataSeries.data;
            renderSeries();
        });
});




/*showApi();*/