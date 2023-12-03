let w1p1 = "If I could travel back to the 1970s to change the history of the Internet, I would want to prevent the relationship between the military and the Internet's creation. Although I understand that this relationship was mutualistic and America's military goals were arguably necessary to push for these inventions, I believe that the Internet's creation could have undergone under different circumstances. I would need funding to achieve these changes and the funds necessary are very likely large,so I would most likely have to get that funding from the U.S. government’s Department of Defense. However, as my goals are not geared towards military use, receiving such funds would be unlikely. Instead, I think I would resort to ethical hacking in order to make such changes possible.";

let imageOffset = 0;
let verticalOffset = 0;

let rightKey = false;
let leftKey = false;
let upKey = false;
let downKey = false;

setInterval(moveImage,20);

function myFunction() {
    // document: JS object defined by browser, represents HTML document
    // innerHTML = variable on HTML element object (here, header); innerHTML = everything inside element
    document.getElementById("mainHeader").innerHTML = "BOO!";
    document.getElementById("mainHeader").style.fontSize = "80px";
    document.getElementById("sticky").src = "https://i.pinimg.com/originals/e4/c7/33/e4c733a8482eb7f28b0b5563b3af96d0.jpg";
}

function toggleText() {
    document.getElementById("paragraph").innerHTML = w1p1;
}

function moveImage() {
    if (rightKey) {
        if (imageOffset >= window.screen.width) {
            console.log("hi world");
        } else {
            imageOffset = imageOffset + 3;
        }
    }
    if (leftKey) {imageOffset = imageOffset - 3;}
    if (upKey) {verticalOffset -= 3;}
    if (downKey) {verticalOffset += 3;}
    document.getElementById("movingImage").style.left = imageOffset + "px";
    document.getElementById("movingImage").style.top = verticalOffset + "px";
}

// keydown = built-in browser event, pressing on key, not holding key down
// keyDown : saying want that function to run when keydown event happens
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(event) {
    // space = key code for space
    if (event.keyCode == 32) {
        // alert method = popup window when pressing down on any key
        // window.alert("hi world");
        // JS on multiple elements with same className
        let array = document.getElementsByClassName("content"); // returns an array of elements, not 1 element
        let i = 0;
        while (i < array.length) {
            array[i].style.rotate = i * 30 + "deg";
            i++;
        }
    }
    // 'd' = 68, 'a' = 65
    // 4 if statements, not if-else to allow diagonal movement
    if (event.keyCode == 68) {rightKey = true;}
    if (event.keyCode == 65) {leftKey = true;}
    if (event.keyCode == 87) {upKey = true;}
    if (event.keyCode == 83) {downKey = true;}
}

// checking if keys are being released => moves only when key is strictly down
function keyUp(event) {
    if (event.keyCode == 68) {rightKey = false;}
    if (event.keyCode == 65) {leftKey = false;}
    if (event.keyCode == 87) {upKey = false;}
    if (event.keyCode == 83) {downKey = false;}
}

