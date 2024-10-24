import { baseUserUrl, handleError } from './common.js';

document.querySelector('#frmSignup').addEventListener('submit', (e) => {
    e.preventDefault();

    /**
     * Both passwords must match
     */
    const password = e.target.txtPassword.value.trim();
    const repeatPassword = e.target.txtRepeatPassword.value.trim();
    if (password !== repeatPassword) {
        alert('Passwords must match');
        return false;
    }

    const email = e.target.txtEmail.value.trim();
    const firstName = e.target.txtFirstname.value.trim();
    const lastName = e.target.txtLastname.value.trim();

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('first_name', firstName);
    params.append('last_name', lastName);
    params.append('password', password);

    fetch(`${baseUserUrl}/users`, {
        method: 'POST',
        body: params
    })
    .then(response => response.json())
    .then(data => {
        if (Object.keys(data).includes('user_id')) {
            alert('Successful sign up');
            window.location.href = 'index.html';
        } else {
            handleError(data.error);
        }
    })
    .catch(handleError)
});

/**
 * Alternative way of handling API call errors
 */ 

// fetch(`${baseUserUrl}/users`, {
//     method: 'POST',
//     body: params
// })
// .then(response => response.json())
// .then(data => {
//     if (Object.keys(data).includes('user_id')) {
//         alert('Successful sign up');
//         window.location.href = 'index.html';
//     } else {
//         throw new Error(data.error);
//     }
// })
// .catch(error => {
//     alert('There was an error: ' + error);
// });
