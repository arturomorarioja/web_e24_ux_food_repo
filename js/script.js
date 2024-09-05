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

recipes.forEach(function(recipe) {
    const listItem = `
        <li><a href="#">${recipe.name}</a></li>
    `;
    document.querySelector('section#recipe-list > ul').innerHTML += listItem;
});