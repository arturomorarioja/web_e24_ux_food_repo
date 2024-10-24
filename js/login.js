import { baseUserUrl, handleError } from './common.js';

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
            alert('Successfully logged in');
            window.location.href = 'index.html';
        } else {
            handleError(data.error);
        }
    })
    .catch(handleError)
});