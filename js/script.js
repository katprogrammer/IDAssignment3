/* jshint esversion: 8 */
// Food API
const food_url = 'https://api.spoonacular.com';
const food_key = 'apiKey=4ce90f9a40a44ef4b178c092397c7877';

async function GetRecipeInformation(food_url, recipeID, food_key) {
    const response = await fetch(`${food_url}/recipes/${recipeID}/information?${food_key}&includeNutrition=false`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const json = await response.json();
    return json;
}

// Main Method
async function RunAPI() {
    // Food IDs
    const brkSmoothyID = '715497';
    const pizzaID = '715495';
    const chilliID = '715424';
    const donutsID = '716276';
    const proShakeID = '794538';

    // const pizzaInfo = await GetRecipeInformation(food_url, pizzaID, food_key).catch(error => console.log(error));
    // const brkSmoothyInfo = await GetRecipeInformation(food_url, brkSmoothyID, food_key).catch(error => console.log(error));
    // const chilliInfo = await GetRecipeInformation(food_url, chilliID, food_key).catch(error => console.log(error));
    // const donutsInfo = await GetRecipeInformation(food_url, donutsD, food_key).catch(error => console.log(error));
    // const proShakeInfo = await GetRecipeInformation(food_url, proShakeID, food_key).catch(error => console.log(error));
}

RunAPI();