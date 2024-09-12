'use strict';

const baseUrl = 'https://www.themaldb.com/api/json/v1/1';
const numRecipesToShow = 10;

// We grab the container for the recipe card
const recipeInfoSection = document.querySelector('#recipe-info');

const handleRecipe = function(data) {
    const recipe = data.meals[0];

    const recipeLink = document.createElement('a');
    recipeLink.innerText = recipe.strMeal;
    recipeLink.setAttribute('href', '#');

    recipeLink.addEventListener('click', function() {
        // We empty the recipe info section
        recipeInfoSection.innerHTML = `
            <header>
                <h2>${recipe.strMeal}</h2>
            </header>
            <p>${recipe.strInstructions}</p>
        `;
    });

    const recipeListItem = document.createElement('li');
    recipeListItem.append(recipeLink);

    document.querySelector('section#recipe-list > ul').append(recipeListItem);        
}

const handleAPIError = function(response) {
    if (response.ok) {
        return response.json();
    }
    console.log('There was an error');
}

for (let index = 0; index < numRecipesToShow; index++) {
    fetch(`${baseUrl}/random.php`)
    .then(handleAPIError)
    .then(handleRecipe)
    .catch((error) => {
        recipeInfoSection.innerHTML = `
            <h3>Error</h3>
            <p>Dear user, we are truly sorry to inform that there was an error while getting the data</p>
            <p class="error">${error}</p>
        `;
    })
}

// recipes.forEach(function(recipe) {
//     const recipeLink = document.createElement('a');
//     recipeLink.innerText = recipe.name;
//     recipeLink.setAttribute('href', '#');

//     recipeLink.addEventListener('click', function() {
//         // We empty the recipe info section
//         recipeInfoSection.innerHTML = `
//             <header>
//                 <h2>${recipe.name}</h2>
//             </header>
//             <p>${recipe.description}</p>
//         `;
//     });

//     const recipeListItem = document.createElement('li');
//     recipeListItem.append(recipeLink);

//     document.querySelector('section#recipe-list > ul').append(recipeListItem);
// });