/* jshint esversion: 8 */
// Food API
const food_url = 'https://api.spoonacular.com';
const food_key = 'apiKey=4ce90f9a40a44ef4b178c092397c7877';

async function GetRecipeInformation(food_url, recipeID, food_key) {
    const response = await fetch(`${food_url}/recipes/${recipeID}/information?${food_key}&includeNutrition=false`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const json = await response.json();
    return json;
}

// Superhero API
async function GetSuperhero(heroID) {
    const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${heroID}.json`, {
        method: 'GET'
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

    // Superhero IDs
    const batmanID = '69';
    const capAmericaID = '149';
    const thorID = '659';
    const onePunchID = '502';
    const grootID = '303';

    // Final Boss ID
    const thanosID = '655';

    // Villian IDs
    const darthVaderID = '208';
    const carnageID = '162';
    const lokiID = '414';
    const magnetoID = '423';
    const redHulkID = '547';

    // Food Information
    // const pizzaInfo = await GetRecipeInformation(food_url, pizzaID, food_key).catch(error => console.log(error));
    // const brkSmoothyInfo = await GetRecipeInformation(food_url, brkSmoothyID, food_key).catch(error => console.log(error));
    // const chilliInfo = await GetRecipeInformation(food_url, chilliID, food_key).catch(error => console.log(error));
    // const donutsInfo = await GetRecipeInformation(food_url, donutsD, food_key).catch(error => console.log(error));
    // const proShakeInfo = await GetRecipeInformation(food_url, proShakeID, food_key).catch(error => console.log(error));

    // SuperHero Information
    // const batmanInfo = await GetSuperhero(batmanID).catch(error => console.log(error));
    // const capAmericaInfo = await GetSuperhero(capAmericaID).catch(error => console.log(error));
    // const thorInfo = await GetSuperhero(thorID).catch(error => console.log(error));
    // const onePunchInfo = await GetSuperhero(onePunchID).catch(error => console.log(error));
    // const grootInfo = await GetSuperhero(grootID).catch(error => console.log(error));
    
    // SuperVillian Information
    // const darthVaderInfo = await GetSuperhero(darthVaderID).catch(error => console.log(error));
    // const carnageInfo = await GetSuperhero(carnageID).catch(error => console.log(error));
    // const lokiInfo = await GetSuperhero(lokiID).catch(error => console.log(error));
    // const magnetoInfo = await GetSuperhero(magnetoID).catch(error => console.log(error));
    // const redHulkInfo = await GetSuperhero(redHulkID).catch(error => console.log(error));

    // FinalBoss Information
    // const thanosInfo = await GetSuperhero(thanosID).catch(error => console.log(error));
}

RunAPI();