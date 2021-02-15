/* jshint esversion: 8 */
// Food API
const food_url = 'https://api.spoonacular.com';
const food_key = 'apiKey=4ce90f9a40a44ef4b178c092397c7877';
var food = [];
var pizzaInfo = '', chilliInfo = '', donutsInfo = '', brkSmoothyInfo = '', proShakeInfo = '';
var batmanInfo = '', capAmericaInfo = '', thorInfo = '', onePunchInfo = '', grootInfo = '';
var darthVaderInfo = '', carnageInfo = '', lokiInfo = '', magnetoInfo = '', redHulkInfo = '', thanosInfo = '';

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

// For the Spoonacular API, its a bit annoying, but there are daily limits to the number of requests that it can make so do take note***
function InputStoreData(pizzaInfo, brkSmoothyInfo, chilliInfo, donutsInfo, proShakeInfo) {
    var array = [pizzaInfo, brkSmoothyInfo, chilliInfo, donutsInfo, proShakeInfo];
    var content = '';

    for (i = 0; i < array.length; i++) {
        content += `
        <div class="card">
            <div class="card-image"><img id="shopImg" src="${array[i].image}"></div>
            <div class="card-text">
                <h2>${array[i].title}</h2>
            </div>
            <div class="card-stats">
                <div class="stat">
                    <div class="value">${array[i].healthScore}</div>
                    <div class="type">Nutrition</div>
                </div>
                <div class="stat">
                    <div class="value">${array[i].cookingMinutes}</div>
                    <div class="type">HP</div>
                </div>
                <div class="stat">
                    <div class="value">${array[i].readyInMinutes}</div>
                    <div class="type">Energy</div>
                </div>
            </div>
            <div class="card-buy">
                <button type="submit" id="buyItem">Buy Now!</button>
            </div>
        </div>
        `
    }

    $(".shopItems").html(content);
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
    pizzaInfo = await GetRecipeInformation(food_url, pizzaID, food_key).catch(error => console.log(error));
    brkSmoothyInfo = await GetRecipeInformation(food_url, brkSmoothyID, food_key).catch(error => console.log(error));
    chilliInfo = await GetRecipeInformation(food_url, chilliID, food_key).catch(error => console.log(error));
    donutsInfo = await GetRecipeInformation(food_url, donutsID, food_key).catch(error => console.log(error));
    proShakeInfo = await GetRecipeInformation(food_url, proShakeID, food_key).catch(error => console.log(error)); 
    
    InputStoreData(pizzaInfo, brkSmoothyInfo, chilliInfo, donutsInfo, proShakeInfo);

    // SuperHero Information
    // batmanInfo = await GetSuperhero(batmanID).catch(error => console.log(error));
    // capAmericaInfo = await GetSuperhero(capAmericaID).catch(error => console.log(error));
    // thorInfo = await GetSuperhero(thorID).catch(error => console.log(error));
    // onePunchInfo = await GetSuperhero(onePunchID).catch(error => console.log(error));
    // grootInfo = await GetSuperhero(grootID).catch(error => console.log(error));
    
    // SuperVillian Information
    // darthVaderInfo = await GetSuperhero(darthVaderID).catch(error => console.log(error));
    // carnageInfo = await GetSuperhero(carnageID).catch(error => console.log(error));
    // lokiInfo = await GetSuperhero(lokiID).catch(error => console.log(error));
    // magnetoInfo = await GetSuperhero(magnetoID).catch(error => console.log(error));
    // redHulkInfo = await GetSuperhero(redHulkID).catch(error => console.log(error));

    // FinalBoss Information
    // thanosInfo = await GetSuperhero(thanosID).catch(error => console.log(error));
}

// Game Javascript
// Global Variables
var charimg = ''; // Chosen character profile picture location
var dname = ''; // Display name

var inv = [] // Inventory Array to store items bought and received
var currency = 0; // Money variable for shop

// Default Game Page parameters
$('.gameMenu').hide();
$('.home').hide();
$('.inventory').hide();
$('.shop').hide();
$('.fight').hide();
$('.stats').hide();
$('.save').hide();
$('.char').hide();
$('.user').hide();
$('.gameContainer').hide();

// Start game button
$('#startGame').click(function(e) { 
    e.preventDefault();
    
    $('.menu').hide();
    $('.startMenu').hide();
    $('.gameMenu').hide();
    $('.char').hide();
    $('.user').show();
});

// ---------------------------- User / Select Character Section --------------------------
$('#submit').click(function(e) {
    e.preventDefault();

    // Get input display name
    dname = $('#dname').val();;

    // Set input display name
    $('.home h1').text(`THIS IS YOUR HOME ${dname.toUpperCase()}!`);
    $('.user').hide();
    $('.char').show();
})

$('#bam').click(function(e) { // Chose Bam
    e.preventDefault();

    // Save chosen character
    charimg = $('#bam').attr('src');

    // Set chosen character
    $('.charPP').attr('src', charimg);

    $('.char').hide();
    $('.menu').show();
    $('.gameContainer').show();
    $('.gameMenu').show();
    $('.home').show();
})

$('#jinsung').click(function(e) { // Chose Jinsung
    e.preventDefault();

    // Save chosen character
    charimg = $('#jinsung').attr('src');

    // Set chosen character
    $('.charPP').attr('src', charimg);

    $('.char').hide();
    $('.menu').show();
    $('.gameMenu').show();
    $('.gameContainer').show();
    $('.home').show();
})

$('#khun').click(function(e) { // Chose Khun
    e.preventDefault();

    // Save chosen character
    charimg = $('#khun').attr('src');

    // Set chosen character
    $('.charPP').attr('src', charimg);

    $('.char').hide();
    $('.menu').show();
    $('.gameMenu').show();
    $('.gameContainer').show();
    $('.home').show();
})

$('#androssi').click(function(e) { // Chose Androssi
    e.preventDefault();

    // Save chosen character
    charimg = $('#androssi').attr('src');

    // Set chosen character
    $('.charPP').attr('src', charimg);

    $('.char').hide();
    $('.menu').show();
    $('.gameMenu').show();
    $('.gameContainer').show();
    $('.home').show();
})

$('#yuri').click(function(e) { // Chose Yuri
    e.preventDefault();

    // Save chosen character
    charimg = $('#yuri').attr('src');

    // Set chosen character
    $('.charPP').attr('src', charimg);

    $('.char').hide();
    $('.menu').show();
    $('.gameMenu').show();
    $('.gameContainer').show();
    $('.home').show();
})

$('#garam').click(function(e) { // Chose Garam
    e.preventDefault();

    // Save chosen character
    charimg = $('#garam').attr('src');

    // Set chosen character
    $('.charPP').attr('src', charimg);

    $('.char').hide();
    $('.menu').show();
    $('.gameMenu').show();
    $('.gameContainer').show();
    $('.home').show();
})

// ---------------------------- Game functions section --------------------------
// Load game button
$('#loadGame').click(function(e) {
    e.preventDefault();

    // Load game function to be added
})

// Save game button
$('#saveGame').click(function(e) {
    e.preventDefault();

    // Save game function to be added
    $('.home').hide();
    $('.inventory').hide();
    $('.shop').hide();
    $('.fight').hide();
    $('.stats').hide();

    $('.save').show(); // Show save game division/menu
})

// Home button
$('#home').click(function(e) {
    e.preventDefault();

    // Save game function to be added
    $('.home').hide();
    $('.inventory').hide();
    $('.shop').hide();
    $('.fight').hide();
    $('.stats').hide();
    $('.save').hide(); 
    
    $('.home').show(); // Show home division/menu
})

// View stats button
$('#viewStats').click(function(e) {
    e.preventDefault();

    // View Stats function to be added
    $('.home').hide();
    $('.inventory').hide();
    $('.shop').hide();
    $('.fight').hide();
    $('.save').hide();

    $('.stats').show(); // Show stats division/menu
})

// Inventory button
$('#inventory').click(function(e) {
    e.preventDefault();


    // Inventory function to be added
    $('.home').hide();
    $('.shop').hide();
    $('.fight').hide();
    $('.stats').hide();
    $('.save').hide();

    $('.inventory').show(); // Show inventory division/menu
})

// ---------------------------- Shop functions section --------------------------
// Shop button
$('#shop').click(function(e) {
    e.preventDefault();

    // Shop function to be added
    $('.home').hide();
    $('.inventory').hide();
    $('.fight').hide();
    $('.stats').hide();
    $('.save').hide();

    $('.shop').show(); // Show shop division/menu
})

// Buy Item button
$('#buyItem').click(function(e) {
    e.preventDefault();

    
})

// Exit Game Button
$('#exitGame').click(function(e) {
    e.preventDefault();

    // Exit game function to be added
    $('.home').hide();
    $('.inventory').hide();
    $('.shop').hide();
    $('.fight').hide();
    $('.stats').hide();
    $('.save').hide();
})

// Function for when a user purchases an item from the store
// It will validate if currency is sufficient, it will also
// add the newly purchased item into the global inv array.
function purchaseItem(currency) {

}

// Function for when a user selects an item in the inventory for use,
// it will create a pop-up box for user to select use/not to use and
// it will also update the statistics of the player accordingly.
function useItem(inv) { 

}

function checkInventoryItems(inv, currency) {
    if (inv.length === 0) {
        $('.invSpace').innerHTML('<h1>There are currently no items in your inventory.</h1>');
    }
    else {
        inv.forEach(x => {
            // if (x === )
            // $('.invSpace').innerHTML += `<div class="item"><img src="${x.img}" alt="${x.name}"></div>`;
        });
    }
}

RunAPI(food);