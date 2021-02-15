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

// Game Javascript
// Global Variables
var charimg = ''; // Chosen character profile picture location
var dname = ''; // Display name

var inv = [] // Inventory Array to store items bought and received
var currency = 0; // Money variable for shop

// Default Game Page parameters
$('.gameMenu').hide();
$('.home').hide();
$('.inventory').show();
$('.shop').hide();
$('.fight').hide();
$('.stats').hide();
$('.save').hide();
$('.char').hide();
$('.user').hide();
$('.gameContainer').show();

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
    $('.stats h2').text(`Player: ${dname}`);
    const stats = document.getElementById('stats');
    openStats(stats);
    $('.statsImg').attr('src', charimg);
    // View Stats function to be added
    $('.home').hide();
    $('.inventory').hide();
    $('.shop').hide();
    $('.fight').hide();
    $('.save').hide();

    $('.stats').show(); // Show stats division/menu
})
const closeStatsButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

closeStatsButton.forEach(button => {
    button.addEventListener('click', () => {
        const stats = document.getElementById('stats');
        closeStats(stats);
    })
})
function openStats(stats) {
    if (stats == null) return;
    stats.classList.add('active');
    overlay.classList.add('active');
}
function closeStats(stats) {
    if (stats == null) return;
    stats.classList.remove('active');
    overlay.classList.remove('active');
}
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
var fills = document.querySelectorAll(".healthbar_fill");
var hungerFill = document.querySelectorAll(".hungerbar_fill");
var hydrateFill = document.querySelectorAll(".hydratebar_fill");

var health = 75;
var maxHp = 100;

var hunger = 75;
var maxHunger = 100;

var hydrate = 75;
var maxHydrate = 100;

function renderBar() {
   
   var hpPercent = health / maxHp * 100;
   var foodPercent = hunger / maxHunger * 100;
   var waterPercent = hydrate / maxHydrate * 100;
   
   //Update color
   document.documentElement.style.setProperty('--healthbar-fill', '#57e705');
   document.documentElement.style.setProperty('--healthbar-top',  '#6aff03');

   document.documentElement.style.setProperty('--hungerbar-fill', '#57e705');
   document.documentElement.style.setProperty('--hungerbar-top',  '#6aff03');

   document.documentElement.style.setProperty('--hydratebar-fill', '#57e705');
   document.documentElement.style.setProperty('--hydratebar-top',  '#6aff03');
   
   if (hpPercent <= 50 ) { //yellows
      document.documentElement.style.setProperty('--healthbar-fill', '#d6ed20');
      document.documentElement.style.setProperty('--healthbar-top',  '#d8ff48');   
   }
   if (hpPercent <= 25) { //reds
      document.documentElement.style.setProperty('--healthbar-fill', '#ec290a');
      document.documentElement.style.setProperty('--healthbar-top',  '#ff3818');
   }
   if (foodPercent <= 50 ) { //yellows
      document.documentElement.style.setProperty('--hungerbar-fill', '#d6ed20');
      document.documentElement.style.setProperty('--hungerbar-top',  '#d8ff48');   
   }
   if (foodPercent <= 25) { //reds
      document.documentElement.style.setProperty('--hungerbar-fill', '#ec290a');
      document.documentElement.style.setProperty('--hungerbar-top',  '#ff3818');
   }
   if (waterPercent <= 50 ) { //yellows
      document.documentElement.style.setProperty('--hydratebar-fill', '#d6ed20');
      document.documentElement.style.setProperty('--hydratebar-top',  '#d8ff48');   
   }
   if (waterPercent <= 25) { //reds
      document.documentElement.style.setProperty('--hydratebar-fill', '#ec290a');
      document.documentElement.style.setProperty('--hydratebar-top',  '#ff3818');
   }

   fills.forEach(fill => {
        fill.style.width = hpPercent+"%";
        console.log(fill);
   })
   hungerFill.forEach(fill => {
        fill.style.width = foodPercent+"%";
   })
   hydrateFill.forEach(fill => {
        fill.style.width = waterPercent+"%";
   })            
}

function updateHealth(change) {
   health += change;
   health = health > maxHp ? maxHp : health;
   health = health < 0 ? 0 : health;
    
   renderBar();
}
function updateHunger(change) {
    hunger += change;
    hunger = hunger > maxHunger ? maxHunger : hunger;
    hunger = hunger < 0 ? 0 : hunger;
 
    renderBar();
 }
 function updateHydrate(change) {
    hydrate += change;
    hydrate = hydrate > maxHydrate ? maxHydrate : hydrate;
    hydrate = hydrate < 0 ? 0 : hydrate;
 
    renderBar();
 }


//init
updateHealth(0)
updateHunger(0)
updateHydrate(0)

function checkInventoryItems(inv, currency) {
    if (inv.length === 0) {
        $('.invSpace').innerHTML('<h1>There are currently no items in your inventory.</h1>');
    }
    else {
        inv.forEach(element => {
            // $('.invSpace').innerHTML += `<div class="item"><img src="${}" alt="${}"></div>`;
        });
    }
}

RunAPI();