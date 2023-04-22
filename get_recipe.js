/**
 * Get recipe.JS
 * Description:
 * This script was written for a game, it's a simple script that checks
 * if certain ITEM IDs exist within an array and returns a recipe number
 * if said items are found within the possible recipes.
 */
// Add the current ITEM IDs here in this array
let arr = [13, 15, 12];

//Add the ITEM IDS required for each recipe in each of these
const ALL_RECIPES = [
    [13, 15, 12], //Recipe0
    [12, 15, 25], //Recipe1
    [25, 35, 45]  //Recipe2
    ];
// This is how many ingredients each recipe needs
const MAX_INGREDIENTS = [
    3,  //Recipe 0
    3,  //Recipe 1
    3   //Recipe 2
    ];

//Don't touch this, it will scale on it's own.
let ingredient = 0, recipeNumber = 0;
for (recipeNumber = 0; recipeNumber < ALL_RECIPES.length; recipeNumber++) {
    for (x of arr) {
        if (x == ALL_RECIPES[recipeNumber][ingredient]) {
            ingredient++;
            if (ingredient === MAX_INGREDIENTS[recipeNumber]) {
                /**
                 * This is where we return the recipe
                 * this will return the recipe number in the array so
                 * 0 = recipe0, 1 = recipe1, etc
                 */
                console.log(`Got the recipe ${recipeNumber}`)
            }
        } else {
        ingredient = 0;
        }
    }
}