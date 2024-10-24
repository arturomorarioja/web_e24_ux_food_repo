import { activateLinks } from './common.js';

activateLinks();

document.querySelector('#utility button').addEventListener('click', (e) => {
    e.preventDefault();

    sessionStorage.removeItem('food_repo_user_id');
    window.location.reload();
});