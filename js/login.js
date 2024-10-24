import { baseUserUrl, handleAPIResponseError } from './common.js';

document.querySelector('#frmLogin').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.txtEmail.value.trim();
    const password = e.target.txtPassword.value.trim();

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    fetch(`${baseUserUrl}/validation`, {
        method: 'POST',
        body: params
    })
    .then(response => response.json())
    .then(data => {
        if (Object.keys(data).includes('user_id')) {
            alert('Login was successful');

            sessionStorage.setItem('food_repo_user_id', data.user_id);
            window.location.href = 'index.html';
        } else {
            handleAPIResponseError(data.error);
        }
    })
    .catch(handleAPIResponseError);
});