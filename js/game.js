// Default Game Page parameters
$('.gameMenu').hide();
$('.home').hide();
$('.inventory').hide();
$('.shop').hide();
$('.fight').hide();
$('.stats').hide();
$('.save').hide();

// Start game button
$('#startGame').click(function(e) { 
    e.preventDefault();

    $('.startMenu').hide();
    $('.gameMenu').show();
    $('.home').show(); // Show home game page division/menu
});

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