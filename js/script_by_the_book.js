'use strict';

const recipes = [
    {
        name: 'Thai Beef',
        description: 'Thai cuisine is one of contrasts and Thai beef salad is a perfect example. In the dressing alone, sweet meets salty, spicy and sour and in the salad intense chilli meets gentle aromatic herbs and cooling cucumber, all coming together in perfect harmony.'
    },
    {
        name: 'Chip-coated chicken nuggets',
        description: 'Chicken nuggets coated with chicken nugget-flavoured chips? Yep, we went there. These crunchy little morsels make a great kid-friendly snack or party food option.'
    },
    {
        name: 'Miso eggplant with scrambled tofu',
        description: 'Try this melt in your mouth miso baked eggplant recipe that\'s topped with scrambled tofu, making it a healthy, protein-packed vegetarian dinner.'
    }
];

// We grab the container for the recipe card
const recipeInfoSection = document.querySelector('#recipe-info');

recipes.forEach(function(recipe) {
    const recipeLinkText = document.createTextNode(recipe.name);
    const recipeLink = document.createElement('a');
    recipeLink.append(recipeLinkText);
    recipeLink.setAttribute('href', '#');

    recipeLink.addEventListener('click', function() {
        // We empty the recipe info section
        recipeInfoSection.innerHTML = '';

        // We create the h2
        const recipeH2Text = document.createTextNode(recipe.name);
        const recipeH2 = document.createElement('h2');
        recipeH2.append(recipeH2Text);

        // We create the header wrapping the h2
        const recipeHeader = document.createElement('header');
        recipeHeader.append(recipeH2);

        // We create the paragraph with the description
        const recipeDescriptionText = document.createTextNode(recipe.description);
        const recipeDescription = document.createElement('p');
        recipeDescription.append(recipeDescriptionText);

        // Both the header and the description are added to the recipe info area
        recipeInfoSection.append(recipeHeader);
        recipeInfoSection.append(recipeDescription);
    });

    const recipeListItem = document.createElement('li');
    recipeListItem.append(recipeLink);

    document.querySelector('section#recipe-list > ul').append(recipeListItem);
});

/*
recipes.forEach(function(recipe) {
    const listItem = `
        <li><a href="#">${recipe.name}</a></li>
    `;
    document.querySelector('section#recipe-list > ul').innerHTML += listItem;
});
*/