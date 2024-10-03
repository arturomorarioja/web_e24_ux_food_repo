import { baseUrl, handleAPIError } from './common.js';

const NUM_RECIPES_TO_SHOW = 10;

// We grab the container for the recipe card
const recipeInfoSection = document.querySelector('#recipe-cards');

const handleRecipe = function(data) {
    const recipe = data.meals[0];

    const recipeCard = document.createElement('article');
    recipeCard.innerHTML = `
        <header>
            <h3><a href="recipe.htm?id=${recipe.idMeal}">${recipe.strMeal}</a></h3>
        </header>
        <a href="recipe.htm?id=${recipe.idMeal}"><img src="${recipe.strMealThumb}" alt=""></a>
        <div>
            <p class="pill foodType">${recipe.strCategory}</p>
            <p class="pill area">${recipe.strArea}</p>
        </div>
    `;

    document.querySelector('section#recipe-cards').append(recipeCard);        

    // const recipeLink = document.createElement('a');
    // recipeLink.innerText = recipe.strMeal;
    // recipeLink.setAttribute('href', '#');

    // recipeLink.addEventListener('click', function() {
    //     // We empty the recipe info section
    //     let recipeInfo = `
    //         <header>
    //             <h2>${recipe.strMeal}</h2>
    //         </header>
    //         <img src="${recipe.strMealThumb}" alt="">
    //         <p>${recipe.strInstructions}</p>
    //         <ul>
    //     `;
    //     for (let index = 0; index < MAX_INGREDIENTS; index++) {
    //         const ingredient = recipe[`strIngredient${index + 1}`];
    //         if (ingredient !== null && ingredient !== '') {
    //             const measure = recipe[`strMeasure${index + 1}`];
    //             recipeInfo += `<li>${ingredient}, ${measure}</li>`;
    //         }
    //     }
    //     recipeInfo += '</ul>';
    //     let youtubeID = recipe.strYoutube;
    //     youtubeID = youtubeID.substring(youtubeID.length - 11);
    //     recipeInfo += `
    //         <iframe 
    //             src="https://www.youtube.com/embed/${youtubeID}?si=MO0O8ATQ_yYp_1wR" 
    //             title="YouTube video player" 
    //             frameborder="0" 
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    //             referrerpolicy="strict-origin-when-cross-origin" 
    //             allowfullscreen>
    //         </iframe>
    //     `;
    //     recipeInfoSection.innerHTML = recipeInfo;
    // });

    // const recipeListItem = document.createElement('li');
    // recipeListItem.append(recipeLink);
}

for (let index = 0; index < NUM_RECIPES_TO_SHOW; index++) {
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