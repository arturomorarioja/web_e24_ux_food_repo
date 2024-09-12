'use strict';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';
const numRecipesToShow = 10;

for (let index = 0; index < numRecipesToShow; index++) {
    fetch(`${baseUrl}/random.php`)
    .then(response => response.json())
    .then(data => {
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
    });
}

// We grab the container for the recipe card
const recipeInfoSection = document.querySelector('#recipe-info');

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