'use strict';
const btnResetAll = document.querySelector('.js-btnReset');

function handleResetAll(ev) {
    ev.preventDefault();
    favList.innerHTML = '';
    ul.innerHTML = '';
    localStorage.removeItem('data', JSON.stringify(favorites));
    textUser.value = '';
};


btnResetAll.addEventListener('click', handleResetAll);