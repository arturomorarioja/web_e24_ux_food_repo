import { baseUserUrl, handleAPIResponseError } from './common.js';

document.querySelector('#frmSignup').addEventListener('submit', (e) => {
    e.preventDefault();

    const password = e.target.txtPassword.value.trim();
    const repeatPassword = e.target.txtRepeatPassword.value.trim();

    if (password !== repeatPassword) {
        alert('Passwords must match');
        return false;
    }

    const firstName = e.target.txtFirstname.value.trim();
    const lastName = e.target.txtLastname.value.trim();
    const email = e.target.txtEmail.value.trim();

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
            alert('Sign up was successful');
            window.location.href = 'login.htm';            
        } else {
            handleAPIResponseError(data.error);
        }
    })
    .catch(handleAPIResponseError);
});

/**
 * Alternative error check implementation
 */

// fetch(`${baseUserUrl}/users`, {
//     method: 'POST',
//     body: params
// })
// .then(response => response.json())
// .then(data => {
//     if (Object.keys(data).includes('user_id')) {
//         window.location.href = 'login.htm';
//     } else {
//         throw new Error(data.error);
//     }
// })
// .catch((error) => {
//     alert('There was an error: ' + error);
// });
