/* jshint esversion: 8 */
// Food API
const food_url = 'https://api.spoonacular.com';
const food_key = 'apiKey=cc7e99136a574acab302540ea45c383d';
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
    var storeItems = [];
    var storeItemsImg = [];
    var storeItemsName = [];

    for (i = 0; i < array.length; i++) {
        content += `
        <div class="card" data-id="${array[i].id}">
            <div class="card-image"><img id="shopImg" src="${array[i].image}" alt="shop item"></div>
            
            <div class="card-text">
                <h2>${array[i].title}</h2>
            </div>

            <div class="card-stats">
                <div class="stat">
                    <div class="value value1">${array[i].pricePerServing}</div>
                    <div class="type">Nutrition</div>
                </div>
                
                <div class="stat">
                    <div class="value value2">${array[i].healthScore}</div>
                    <div class="type">HP</div>
                </div>

                <div class="stat">
                    <div class="value value3">${array[i].readyInMinutes}</div>
                    <div class="type">Energy</div>
                </div>
            </div>

            <div class="card-buy">
                <button type="submit" id="buyItem" class="buyItem">Buy Now!</button>
            </div>
        </div>
        `

        storeItems.push(array[i].id);
        storeItemsImg.push(array[i].image);
        storeItemsName.push(array[i].title);
    }

    console.log(storeItems);

    var items = {
        id: storeItems,
        image: storeItemsImg,
        name: storeItemsName
    }

    $('.shopItems').html(content);
    return items;
}

function InputVillianData(thanosInfo) {
    var array = [thanosInfo];
    var villianImage = [];
    var villianName = [];

    var media = window.matchMedia("(max-width: 700px)");
    var bool = Responsiveness(media);

    if (bool) {
        for (var i = 0; i < array.length; i++) {
            villianImage.push(array[i].images.sm);
            villianName.push(array[i].name);
        }
    }
    else {
        for (var i = 0; i < array.length; i++) {
            villianImage.push(array[i].images.md);
            villianName.push(array[i].name);
        }
    }

    var villians = {
        image: villianImage,
        name: villianName
    }

    return villians;
}

function Responsiveness(x) {
    if (x.matches) { // If media query matches
        var bool = true;
    } 
    else {
        var bool = false;
    }

    return bool
}

// Main Method
async function loadData() {
    // Food IDs
    const brkSmoothyID = '715497';
    const pizzaID = '715495';
    const chilliID = '715424';
    const donutsID = '716276';
    const proShakeID = '794538';

    // Villian IDs
    const thanosID = '655';
    const darthVaderID = '208';
    const magnetoID = '423';

    // Food Information
    pizzaInfo = await GetRecipeInformation(food_url, pizzaID, food_key).catch(error => console.log(error));
    brkSmoothyInfo = await GetRecipeInformation(food_url, brkSmoothyID, food_key).catch(error => console.log(error));
    chilliInfo = await GetRecipeInformation(food_url, chilliID, food_key).catch(error => console.log(error));
    donutsInfo = await GetRecipeInformation(food_url, donutsID, food_key).catch(error => console.log(error));
    proShakeInfo = await GetRecipeInformation(food_url, proShakeID, food_key).catch(error => console.log(error)); 

    // SuperVillian Information
    thanosInfo = await GetSuperhero(thanosID).catch(error => console.log(error));

    console.log(thanosInfo);
}

async function RunGame() {
    // Game function parameters
    $('.gameMenu').hide();
    $('.login').show();
    $('.homeGame').hide();
    $('.inventory').hide();
    $('.shop').hide();
    $('.fight').hide();
    $('.stats').hide();
    $('.save').hide();
    $('.char').hide();
    $('.user').hide();
    $('.gameContainer').hide();

    await loadData(); // Load data for function use later on

    // Global Variables
    var charimg = ''; // Chosen character profile picture location
    var dname = ''; // Display name
    var password = '';
    var playerID = '';
    var inv = [] // Inventory Array to store items bought and received
    var currency = 200; // Money variable for shop
    $('.currency').text(`Your currently have: ${currency} gold left.`);
    $('.currency').attr('data-currency', currency);
    var storeItems = InputStoreData(pizzaInfo, brkSmoothyInfo, chilliInfo, donutsInfo, proShakeInfo);
    localStorage.setItem(inventory, []);

    // Functions
    function SaveInfo(dname, password, charimg, health, hunger, hydrate) {
        var currency = parseInt($('.currency').attr('data-currency'));
        var inv;

        if (localStorage.getItem(inventory) === "") {
            console.log(localStorage.getItem(inventory));
            inv = "empty"
            console.log(inv);
        }
        else {
            inv = localStorage.getItem(inventory);
        }

        console.log(currency);
        console.log(inv);
        
        var jsondata = {
            "username" : dname,
            "password" : password,
            "character" : charimg,
            "health" : health,
            "hunger" : hunger,
            "hydration" : hydrate,
            "earnings" : currency,
            "inventory" : inv
        }

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://sabaibaru-1c32.restdb.io/rest/player-log-in",
            "method": "POST",
            "headers": {
            "content-type": "application/json",
            "x-apikey": "602b72be5ad3610fb5bb60b5",
            "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

    function SaveGame(dname, password, charimg, health, hunger, hydrate) {
        var currency = parseInt($('.currency').attr('data-currency'));
        var inv;

        if (localStorage.getItem(inventory) === "") {
            console.log(localStorage.getItem(inventory));
            inv = "empty"
            console.log(inv);
        }
        else {
            inv = localStorage.getItem(inventory);
        }

        console.log(inv);

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://sabaibaru-1c32.restdb.io/rest/player-log-in",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "602b72be5ad3610fb5bb60b5",
                "cache-control": "no-cache"
            }
        }
        $.ajax(settings).done(function (response) {
            for (i = 0; i < response.length; i++) {
                if (dname === response[i].username) {
                    playerID = response[i]._id;
                    charimg = response[i].character;
                }
            }

            // PUT a updated document to the player-log-in collection (update player login information)
            var jsondata = {
                "username" : dname,
                "password" : password,
                "character" : charimg,
                "health" : health,
                "hunger" : hunger,
                "hydration" : hydrate,
                "earnings" : currency,
                "inventory" : inv
            }
            console.log(currency);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://sabaibaru-1c32.restdb.io/rest/player-log-in/${playerID}`,
                "method": "PUT",
                "headers": {
                "content-type": "application/json",
                "x-apikey": "602b72be5ad3610fb5bb60b5",
                "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
            }
            console.log(JSON.stringify(jsondata));

            $.ajax(settings).done(function (response) {
                console.log(response);
                alert("Game saved successfully");
            });
        });
    }

    function SetStorage(inv) {
        var tempInv = localStorage.getItem(inventory);
        
        if (tempInv != "empty") {
            var x = tempInv.split(",");

            if (x.length > 1) {
                x.forEach((item) => {
                    inv.push(item);
                })
            }
            else if (x.length == 1) {
                inv.push(x[0]);
            }
            else {
                inv = [];
            }
        }
    }

    function UseItem() {
        
    }

    // Start game button
    $('#startGame').click(function(e) { 
        e.preventDefault();
        
        $('.menu').hide();
        $('.startMenu').hide();
        $('.gameMenu').hide();
        $('.char').hide();
        $('.login').hide();
        $('.user').show();
    });

    // ---------------------------- User / Select Character Section --------------------------
    $('#register').submit(function(e) {
        e.preventDefault();
        var exist = 0;
        // Get input display name
        dname = $('.dname').val();
        password = $('.password').val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://sabaibaru-1c32.restdb.io/rest/player-log-in",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "602b72be5ad3610fb5bb60b5",
                "cache-control": "no-cache"
            }
        }
        $.ajax(settings).done(function (response) {
            for(i = 0; i< response.length; i++) {
                if (response[i].username === dname) {
                    exist += 1;
                }
            }
            if (exist >= 1) {
                document.getElementById("register").reset();
                let errMsg = document.getElementById("regErrText");
                errMsg.innerHTML += "Username already exists please try again";
                errMsg.style.color = "red";
                errMsg.style.fontFamily = 'VT323', monospace;
            }
            else {
                $('.startGame').hide();
                $('.login').hide();
                $('.startMenu').hide();
                $('.user').hide();
                $('.char').show();
            }
            console.log(response);
        });
    })

    $('#login').submit(function(e) {
        e.preventDefault();
        var wrongCount = 0;
        // Get input display name
        dname = $('.loginname').val();
        password = $('.loginpassword').val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://sabaibaru-1c32.restdb.io/rest/player-log-in",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "602b72be5ad3610fb5bb60b5",
                "cache-control": "no-cache"
            }
        }
        $.ajax(settings).done(function (response) {
            // Set Stats
            for(i = 0; i< response.length; i++) {
                if (response[i].username == dname && response[i].password != password || response[i].username != dname && response[i].password != password) {
                    wrongCount += 1;
                }
                else if (response[i].username == dname && response[i].password == password) {
                    chosedimg = response[i].character;
                    health = response[i].health;
                    hunger = response[i].hunger;
                    hydrate = response[i].hydration;
                    renderBar();

                    // Set inventory
                    localStorage.setItem(inventory, response[i].inventory)

                    // Set Storage after log in
                    SetStorage(inv);
                }
            }

            if (wrongCount === response.length) {
                document.getElementById("login").reset();
                let errMsg = document.getElementById("logErrText");
                errMsg.innerHTML = "Invalid Username/Password";
                errMsg.style.color = "red";
                errMsg.style.fontFamily = 'VT323', monospace;
            }
            else {
                console.log("Correct password and username");
                $('.statsImg').attr('src', chosedimg);
                $('.statsImg').attr('alt', 'char img');
                $('#userCharacterImg').attr('src', chosedimg);

                $('.user').hide();
                $('.startGame').hide();
                $('.login').hide();
                $('.startMenu').hide();
                $('.char').hide();
                
                $('.menu').show();
                $('.gameMenu').show();
                $('.gameContainer').show();
                $('.homeGame').show();
            }
        });

        var villians = InputVillianData(thanosInfo);
        $('#villianName').html(villians.name[0]);
        $('#villianCharacterImg').attr('src', `${villians.image[0]}`)
        $('#villianCharacterImg').attr('alt', `${villians.name[0]}`);
        $('.homeGameGold').html(`Current amount of gold: ${$('.currency').attr('data-currency')}`)
    })

    $('#bam').click(function(e) { // Chose Bam
        console.log(currency);
        e.preventDefault();

        // Save chosen character
        charimg = $('#bam').attr('src');

        $('.statsImg').attr('src', charimg);
        $('.statsImg').attr('alt', 'char img');
        $('#userCharacterImg').attr('src', charimg);

        SaveInfo(dname, password, charimg, health, hunger, hydrate, currency);

        $('.char').hide();
        $('.menu').show();
        $('.gameContainer').show();
        $('.gameMenu').show();
        $('.homeGame').show();

        var villians = InputVillianData(thanosInfo);
        $('#villianName').html(villians.name[0]);
        $('#villianCharacterImg').attr('src', `${villians.image[0]}`)
        $('#villianCharacterImg').attr('alt', `${villians.name[0]}`);
        $('.homeGameGold').html(`Current amount of gold: ${$('.currency').attr('data-currency')}`)
    })

    $('#jinsung').click(function(e) { // Chose Jinsung
        console.log(currency);
        e.preventDefault();

        // Save chosen character
        charimg = $('#jinsung').attr('src');

        // Set chosen character
        $('.statsImg').attr('src', charimg);
        $('.statsImg').attr('alt', 'char img');
        $('#userCharacterImg').attr('src', charimg);
        
        SaveInfo(dname, password, charimg, health, hunger, hydrate, currency, inv);

        $('.char').hide();
        $('.menu').show();
        $('.gameMenu').show();
        $('.gameContainer').show();
        $('.homeGame').show();

        var villians = InputVillianData(thanosInfo);
        $('#villianName').html(villians.name[0]);
        $('#villianCharacterImg').attr('src', `${villians.image[0]}`)
        $('#villianCharacterImg').attr('alt', `${villians.name[0]}`);
        $('.homeGameGold').html(`Current amount of gold: ${$('.currency').attr('data-currency')}`)
    })

    $('#khun').click(function(e) { // Chose Khun
        console.log(currency);
        e.preventDefault();

        // Save chosen character
        charimg = $('#khun').attr('src');
        
        // Set chosen character
        $('.statsImg').attr('src', charimg);
        $('.statsImg').attr('alt', 'char img');
        $('#userCharacterImg').attr('src', charimg);

        SaveInfo(dname, password, charimg, health, hunger, hydrate, currency, inv);

        $('.char').hide();
        $('.menu').show();
        $('.gameMenu').show();
        $('.gameContainer').show();
        $('.homeGame').show();

        var villians = InputVillianData(thanosInfo);
        $('#villianName').html(villians.name[0]);
        $('#villianCharacterImg').attr('src', `${villians.image[0]}`)
        $('#villianCharacterImg').attr('alt', `${villians.name[0]}`);
        $('.homeGameGold').html(`Current amount of gold: ${$('.currency').attr('data-currency')}`)
    })

    $('#androssi').click(function(e) { // Chose Androssi
        console.log(currency);
        e.preventDefault();

        // Save chosen character
        charimg = $('#androssi').attr('src');

        // Set chosen character
        $('.statsImg').attr('src', charimg);
        $('.statsImg').attr('alt', 'char img');
        $('#userCharacterImg').attr('src', charimg);

        SaveInfo(dname, password, charimg, health, hunger, hydrate, currency, inv);
        
        $('.char').hide();
        $('.menu').show();
        $('.gameMenu').show();
        $('.gameContainer').show();
        $('.homeGame').show();

        var villians = InputVillianData(thanosInfo);
        $('#villianName').html(villians.name[0]);
        $('#villianCharacterImg').attr('src', `${villians.image[0]}`)
        $('#villianCharacterImg').attr('alt', `${villians.name[0]}`);
        $('.homeGameGold').html(`Current amount of gold: ${$('.currency').attr('data-currency')}`)
    })

    $('#yuri').click(function(e) { // Chose Yuri
        console.log(currency);
        e.preventDefault();

        // Save chosen character
        charimg = $('#yuri').attr('src');

        // Set chosen character
        $('.statsImg').attr('src', charimg);
        $('.statsImg').attr('alt', 'char img');
        $('#userCharacterImg').attr('src', charimg);
         
        SaveInfo(dname, password, charimg, health, hunger, hydrate, currency, inv);

        $('.char').hide();
        $('.menu').show();
        $('.gameMenu').show();
        $('.gameContainer').show();
        $('.homeGame').show();

        var villians = InputVillianData(thanosInfo);
        $('#villianName').html(villians.name[0]);
        $('#villianCharacterImg').attr('src', `${villians.image[0]}`)
        $('#villianCharacterImg').attr('alt', `${villians.name[0]}`);
        $('.homeGameGold').html(`Current amount of gold: ${$('.currency').attr('data-currency')}`)
    })

    $('#garam').click(function(e) { // Chose Garam
        console.log(currency);
        e.preventDefault();

        // Save chosen character
        charimg = $('#garam').attr('src');

        $('.statsImg').attr('src', charimg);

        SaveInfo(dname, password, charimg, health, hunger, hydrate, currency, inv);

        // Set chosen character
        $('.statsImg').attr('src', charimg);
        $('.statsImg').attr('alt', 'char img');
        $('#userCharacterImg').attr('src', charimg);

        $('.char').hide();
        $('.menu').show();
        $('.gameMenu').show();
        $('.gameContainer').show();
        $('.homeGame').show();

        var villians = InputVillianData(thanosInfo);
        $('#villianName').html(villians.name[0]);
        $('#villianCharacterImg').attr('src', `${villians.image[0]}`)
        $('#villianCharacterImg').attr('alt', `${villians.name[0]}`);
        $('.homeGameGold').html(`Current amount of gold: ${$('.currency').attr('data-currency')}`)
    })

    // ---------------------------- Game functions section --------------------------
    // Save game button
    $('#saveGame').click(function(e) {
        e.preventDefault();
        
        SaveGame(dname, password, charimg, health, hunger, hydrate);

        // Save game function to be added
        $('.homeGame').hide();
        $('.inventory').hide();
        $('.shop').hide();
        $('.fight').hide();
        $('.stats').hide();

        $('.save').show(); // Show save game division/menu
    });

    // Home button
    $('#homeGame').click(function(e) {
        e.preventDefault();

        // Save game function to be added
        $('.inventory').hide();
        $('.shop').hide();
        $('.fight').hide();
        $('.stats').hide();
        $('.save').hide(); 
        
        $('.homeGame').show(); // Show home division/menu
    })
    
    function AddGold() {
        var currency = parseInt($('.currency').attr('data-currency'));
        currency += 1
        $('.currency').attr('data-currency', currency);
        console.log($('.currency').attr('data-currency'));
    }

    $('#clickAttack').click(function() {
        AddGold();
        $('.homeGameGold').html(`Current amount of gold: ${$('.currency').attr('data-currency')}`)
    })

    // View stats button
    $('#viewStats').click(function(e) {
        e.preventDefault();

        $('.stats h2').text(`Player: ${dname}`);
        const stats = document.getElementById('stats');
        openStats(stats);
        // View Stats function to be added
        $('.homeGame').hide();
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

    // ---------------------------- Inventory functions section --------------------------
    $('#inventory').click(function(e) {
        e.preventDefault();

        function checkInventoryItems(inv, storeItems) {
            if (inv.length === 0 || inv[0] === "") {
                $('.invSpace').html('<h1 class="invText">There are currently no items in your inventory.<br>Buy some from the store!</h1>');
            }
            else {
                var content = ''
                
                inv.forEach((x) => {
                    for (var i = 0; i < storeItems.id.length; i++) {
                        if (x == storeItems.id[i]) {
                            content += `<div class="item" data-id-item="${storeItems.id[i]}" data-bs-toggle="modal" data-bs-target="#myModal"><img src="${storeItems.image[i]}" alt="${storeItems.name[i]}"></div>`;
                        }
                    }
                });
        
                $('.invSpace').html(content);
            }
        }

        checkInventoryItems(inv, storeItems);

        $('.homeGame').hide();
        $('.shop').hide();
        $('.fight').hide();
        $('.stats').hide();
        $('.save').hide();
        $('.inventory').show(); // Show inventory division/menu

        $('.item').click(function(e) {
            var itemDelete = e.target.parentElement.getAttribute('data-id-item');
            if ($('.card').attr('data-id') === itemDelete) {
                var healthPoints = $('.card').childNodes[6].childNodes[1].querySelector('.value2').innerHTML;
                var hydrateAndHungerPoints = $('.card').childNodes[6].childNodes[1].querySelector('.value3').innerHTML;
            }

            $('#yesSel').unbind('click').click(function() {
                updateHealth(healthPoints);
                updateHunger(hydrateAndHungerPoints);
                updateHydrate(hydrateAndHungerPoints);
                for (var i = 0; i < inv.length; i++) { 
                    if (inv[i] === itemDelete) {
                        if (inv.length === 1) {
                            inv.shift();
                            break;
                        }
                        else {
                            const index = inv.indexOf(itemDelete);

                            if (index != -1) {
                                inv.splice(index, 1);
                                break;
                            }
                            break;
                        }
                    }
                }

                e.target.parentElement.remove();
                checkInventoryItems(inv, storeItems);
                localStorage.setItem(inventory, inv);
            })
        })
    })

    // ---------------------------- Shop functions section --------------------------
    // Shop button
    $('#shop').click(function(e) {
        e.preventDefault();

        $('.currency').text(`Your currently have: ${$('.currency').attr('data-currency')} gold left.`);
        // Shop function to be added
        $('.homeGame').hide();
        $('.inventory').hide();
        $('.fight').hide();
        $('.stats').hide();
        $('.save').hide();

        $('.shop').show(); // Show shop division/menu
        BuyItem(inv);
    })
    
    function BuyItem(inv) {
        var tempMoney = parseInt($('.currency').attr('data-currency'));

        if (tempMoney <= 0) {
            alert("You have insufficient gold! Go battle some monsters!");
        }
        else {
            $('.buyItem').unbind('click').click(function(e) {
                var targetButton = e.target;
                var chosenItem = targetButton.parentElement.parentElement;
                if (tempMoney < Math.floor(parseInt(chosenItem.childNodes[5].childNodes[1].querySelector('.value1').innerHTML) / 4)) {
                    alert("You do not have enough gold to purchase this!");
                }
                else {
                    inv.push(chosenItem.getAttribute('data-id'));
                    localStorage.setItem(inventory, inv);
                    
                    tempMoney -= Math.floor(parseInt(chosenItem.childNodes[5].childNodes[1].querySelector('.value1').innerHTML) / 4);
                    $('.currency').text(`Your currently have: ${tempMoney} gold left.`);
                    $('.currency').attr('data-currency', `${tempMoney}`);

                    // Complete purchase
                    alert("Your purchase was successful, enjoy!")
                    return tempMoney;
                }
            });
        }
    }

    $('#exitGame').click(function() {
        window.location = '../index.html';
    })
}

RunGame();

// Constant Decrease in hydration and hunger
setInterval(function() {
    updateHunger(-1);
    updateHydrate(-1);
}, 180000); // 3 Minute interval once the game starts

var healthAlert50 = false;
var healthAlert0 = false;

var hungerAlert50 = false;
var hungerAlert0 = false;

var hydrateAlert50 = false;
var hydrateAlert0 = false;

var fills = document.querySelectorAll(".healthbar_fill");
var hungerFill = document.querySelectorAll(".hungerbar_fill");
var hydrateFill = document.querySelectorAll(".hydratebar_fill");

var health = 100;
var maxHp = 100;

var hunger = 100;
var maxHunger = 100;

var hydrate = 100;
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

    if (hungerAlert50 != true) {
        if (hunger < 50) {
            alert("You're low on hunger! Go eat!")
            hungerAlert50 = true;
        }
        else if (hunger > 50) {
            hungerAlert50 = false;
        }
    }
    else if (hungerAlert0 != true) {
        if (hunger == 0) {
            alert("You are famished! Eat something!");
            hungerAlert0 = true;
        }
        else if (hunger > 50) {
            hungerAlert0 = false;
        }
    }

    renderBar();
}

function updateHydrate(change) {
    hydrate += change;
    hydrate = hydrate > maxHydrate ? maxHydrate : hydrate;
    hydrate = hydrate < 0 ? 0 : hydrate;

    if (hydrateAlert50 != true) {
        if (hydrate < 50) {
            alert("You're low on water! Go eat!")
            hydrateAlert50 = true;
        }
        else if (hydrate > 50) {
            hydrateAlert50 = false;
        }
    }
    else if (hydrateAlert0 != true) {
        if (hydrate == 0) {
            alert("You are thirsty! Eat something!");
            hydrateAlert0 = true;
        }
        else if (hydrate > 50) {
            hydrateAlert0 = false;
        }
    }

    renderBar();
}

//init
updateHealth(0);
updateHunger(0);
updateHydrate(0);