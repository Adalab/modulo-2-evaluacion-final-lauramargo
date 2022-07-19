'use strict';
const deleteAllFavs = document.querySelector('.js_deleteFavs');

function handleDeleteAll(ev) {
    ev.preventDefault();
    favList.innerHTML = '';
    if (ul.innerHTML !== '') {
        ul.classList = ('');
        renderSeries();
    }
};



deleteAllFavs.addEventListener('click', handleDeleteAll);