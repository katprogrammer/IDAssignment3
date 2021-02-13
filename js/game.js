// Grab game elements
const char = $(".character");
const map = $(".map");

// Status of sprite
var x = 0;
var y = 0;
var heldkey_directions = []; // Which arrow keys/keys are being held down

var speed = 0.5; // Movement speed of the sprite in pixels/frame

// Character movement function
const moveCharacter = () => {
    // Retrieve --pixel-size var from css
    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));

    const held_direction = heldkey_directions[0];
    if (held_direction) {
        if (held_direction === directions.right) {x += speed;}
        if (held_direction === directions.left) {x -= speed;}
        if (held_direction === directions.down) {y += speed;}
        if (held_direction === directions.up) {y -= speed;}
        char.attr("facing", held_direction);
    }
    // If there is no held direction from the player set walking to true or false
    char.attr("walking", held_direction ? "true" : "false")

    char.css("transform", `translate3d( ${x * pixelSize}px,
              ${y * pixelSize}px, 0`);
}

// Creation of game loop
const step = () => {
    moveCharacter();
    window.requestAnimationFrame(() => {
        step();
    })
}
step(); //Initiate first step

// Key direction function
const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
}

const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
}

document.addEventListener("keydown", (e) => {
    // directions variable
    var dir = keys[e.which]; //which returns the keycode/number of the key that has been pressed
    console.log(dir);
    if (dir && heldkey_directions.indexOf(dir) === -1) { //-1 if it cannot be found in the array
        heldkey_directions.unshift(dir); //Adds new items to the start of the held_directions array
    }
})

document.addEventListener("keyup", (e) => {
    var dir = keys[e.which];
    var index = heldkey_directions.indexOf(dir);
    if (index > -1) {
        heldkey_directions.splice(index, 1);
    }
})