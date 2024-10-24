export const baseUrl = 'https://www.themealdb.com/api/json/v1/1';
export const baseUserUrl = 'http://localhost:8001'

export const handleAPIError = function(response) {
    if (response.ok) {
        return response.json();
    }
    console.log('There was an error');
}

export const handleAPIResponseError = (error = 'Generic error') => {
    alert('There was an error: ' + error);
}

export const activateLinks = () => {
    const loggedUserID = sessionStorage.getItem('food_repo_user_id');
    if (loggedUserID === null) {
        document.querySelectorAll('li:has(.logged-out)').forEach((option) => {
            option.classList.remove('hidden');
        });
        document.querySelectorAll('li:has(.logged-in)').forEach((option) => {
            option.classList.add('hidden');
        });
    } else {
        document.querySelectorAll('li:has(.logged-out)').forEach((option) => {
            option.classList.add('hidden');
        });
        document.querySelectorAll('li:has(.logged-in)').forEach((option) => {
            option.classList.remove('hidden');
        });
    }
}