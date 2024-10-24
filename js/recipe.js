import { baseUrl, baseUserUrl, handleAPIError } from './common.js';

const recipeInfoSection = document.querySelector('#recipe-info');

let recipeID = new URLSearchParams(window.location.search);
recipeID = recipeID.get('id');

const handleRecipe = (data) => {

    const recipe = data.meals[0];

    const MAX_INGREDIENTS = 20;
    let recipeInfo = `
        <header>
            <h2>${recipe.strMeal}</h2>
            <input type="text" id="recipe-id" hidden value="${recipe.idMeal}">
            <button>Mark as favourite</button>
        </header>
        <img src="${recipe.strMealThumb}" alt="">
        <p>${recipe.strInstructions}</p>
        <ul>
    `;
    for (let index = 0; index < MAX_INGREDIENTS; index++) {
        const ingredient = recipe[`strIngredient${index + 1}`];
        if (ingredient !== null && ingredient !== '') {
            const measure = recipe[`strMeasure${index + 1}`];
            recipeInfo += `<li>${ingredient}, ${measure}</li>`;
        }
    }
    recipeInfo += '</ul>';

    let youtubeID = recipe.strYoutube;
    youtubeID = youtubeID.substring(youtubeID.length - 11);

    const thumbnail = new Image();
    thumbnail.src = `http://img.youtube.com/vi/${youtubeID}/mqdefault.jpg`;
    console.log(thumbnail.src);
    thumbnail.addEventListener('load', function() {
        if (this.width !== 120) {
            recipeInfo += `
                <iframe 
                    src="https://www.youtube.com/embed/${youtubeID}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            `;
        }
        recipeInfoSection.innerHTML = recipeInfo; 

        document.querySelector('#recipe-info button').addEventListener('click', (e) => {
            e.preventDefault();
        
            const userID = sessionStorage.getItem('food_repo_user_id');
        
            const params = new URLSearchParams();
            const recipeID = document.querySelector('#recipe-id').value;
            params.append('recipe_id', recipeID);
        
            console.log(recipeID);
        
            fetch(`${baseUserUrl}/users/${userID}/favourites`, {
                method: 'POST',
                body: params
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        });
    })
};

fetch(`${baseUrl}//lookup.php?i=${recipeID}`)
.then(handleAPIError)
.then(handleRecipe)
.catch((error) => {
    recipeInfoSection.innerHTML = `
        <h3>Error</h3>
        <p>Dear user, we are truly sorry to inform that there was an error while getting the data</p>
        <p class="error">${error}</p>
    `;
})