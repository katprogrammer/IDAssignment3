// Global Variables
var charimg = ''; // Chosen character profile picture location
var dname = ''; // Display name

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