export const baseUrl = 'https://www.themealdb.com/api/json/v1/1';
<<<<<<< HEAD
export const baseUserUrl = 'http://localhost:8001';
=======
export const baseUserUrl = 'http://localhost:8001'
>>>>>>> 808912f7425359307c16e3ecf0fe3c126fa0b880

export const handleAPIError = function(response) {
    if (response.ok) {
        return response.json();
    }
    console.log('There was an error');
}

<<<<<<< HEAD
export const handleError = (error = 'Generic error') => {
    alert('There was an error: ' + error)
=======
export const handleAPIResponseError = (error = 'Generic error') => {
    alert('There was an error: ' + error);
>>>>>>> 808912f7425359307c16e3ecf0fe3c126fa0b880
}