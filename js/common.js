export const baseUrl = 'https://www.themealdb.com/api/json/v1/1';
export const baseUserUrl = 'http://localhost:8001';

export const handleAPIError = function(response) {
    if (response.ok) {
        return response.json();
    }
    console.log('There was an error');
}

export const handleError = (error = 'Generic error') => {
    alert('There was an error: ' + error)
}