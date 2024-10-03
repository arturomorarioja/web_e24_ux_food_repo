export const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

export const handleAPIError = function(response) {
    if (response.ok) {
        return response.json();
    }
    console.log('There was an error');
}