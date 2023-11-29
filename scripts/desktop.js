// --------- VISIBILITY CONTROL ---------- //
let toggleActive = false;
function toggleDropdown(toggledClass) {
    if (toggleActive == false) {
        document.getElementById(toggledClass).style.display = "block";
        toggleActive = true;
    } else {
        document.getElementById(toggledClass).style.display = "none";
        toggleActive = false;
    }
}

function newPage() { location.href = "index.html"; }
function openPopup(popupId) { document.getElementById(popupId).style.display = "block"; }
function closePopup(popupId) { document.getElementById(popupId).style.display = "none"; }

// ---------- DECADE CHOICE ---------- //
var chosenDecade = "80s"; // default value
let backgroundImgs = ["url('./images/bckgrnd80s.png')", "url('./images/bckgrnd90s.jpg')", null, null, "url('./images/bckgrnd20s.jpg')"];
let fontFamily = ["'VT323', monospace", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif","Helvetica, sans-serif"];
// fontFamily: 0: 80s=90s, 1: 00s, 2: 10s=20s
function radioValue() {
    var radio = document.getElementsByName("decade");
    for (i=0; i<radio.length; i++) {
        if (radio[i].checked) {
            chosenDecade = radio[i].value;
        }
    }
    // close system settings window once submitted
    document.getElementById('systemSettings').style.display = "none";
    if (chosenDecade != "80s") {
        document.getElementById("browser").style.display = "block";
    }

    if (chosenDecade == "20s") {
        changeBaseStyle(backgroundImgs[4], "cover", fontFamily[2], "13px", "rgb(270, 270, 270, 0.7)", "none");
        changeText(aboutMacHeaders[4], aboutMacInfos[4]);
        changeGeneralWindowStyle(WindowStyle20s, closeButton20s);
        changeAppIcons(appName20s);
    }
    if (chosenDecade == "80s") {
        changeBaseStyle(backgroundImgs[0], "1200px", fontFamily[0], "16px", "rgb(240, 240, 240)", "2px solid black");
    }
}

// BASE DESKTOP STYLING
function changeBaseStyle(backgroundImg, backgroundSize, fontFam, fontSize, titleBarBack, titleBarBorder) {
    // body mods
    document.getElementById('body').style.backgroundImage = backgroundImg;
    document.getElementById('body').style.backgroundSize = backgroundSize;
    document.getElementById('body').style.fontFamily = fontFam;
    // title bar mods
    document.getElementById('titleBar').style.fontSize = fontSize;
    document.getElementById('titleBar').style.backgroundColor = titleBarBack;
    document.getElementById('titleBar').style.borderBottom = titleBarBorder;
}

// VARIABLE TEXT CONTENT
let aboutMacHeaders = ["Macintosh 128K", "90s", "00s", "10s", "Macbook Air"];
let aboutMacInfos = ["9-in, 1983", "90s", "00s", "10s", "Retina, 13-in, 2020"];

function changeText(abtMacHeader, abtMacInfo) {
    document.getElementById('aboutMacHeader').innerHTML = abtMacHeader;
    document.getElementById('aboutMacInfo').innerHTML = abtMacInfo;

}

const WindowStyle20s = ["rgb(270, 270, 270, 0.85)", "0.5px solid grey", "7px", "5px 5px", "0 0 black"];
const closeButton20s = ["red", "none", "15px", "15px", "50%", "center", "12px"];

// POPUPS / WINDOWS STYLING
function changeGeneralWindowStyle(windowArray, closeButtonArray) {
    // container styling
    const collection = document.getElementsByClassName('window');
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = windowArray[0];
        collection[i].style.border = windowArray[1];
        collection[i].style.borderRadius = windowArray[2];
        collection[i].style.padding = windowArray[3];
        collection[i].style.boxShadow = windowArray[4];
    }
    // close window button styling
    const closeButtons = document.getElementsByClassName('popupHeader');
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].style.backgroundColor = closeButtonArray[0];
        closeButtons[i].style.border = closeButtonArray[1];
        closeButtons[i].style.width = closeButtonArray[2];
        closeButtons[i].style.height = closeButtonArray[3];
        closeButtons[i].style.borderRadius = closeButtonArray[4];
        closeButtons[i].style.justifyContent = closeButtonArray[5];
        closeButtons[i].style.fontSize = closeButtonArray[6];
    }
}

const appName20s = ["10px", "transparent", "white", "5px 0px 0px 0px"]

function changeAppIcons(appNameArray) {
    const appIcons = document.getElementsByClassName('appIcon');
    for (let i = 0; i < appIcons.length; i++) {
        console.log('changed app icon img');
        // array of icons in order of how they're listed in html
    }
    const appNames = document.getElementsByClassName('appName');
    for (let i = 0; i < appNames.length; i++) {
        appNames[i].style.fontSize = appNameArray[0];
        appNames[i].style.backgroundColor = appNameArray[1];
        appNames[i].style.color = appNameArray[2];
        appNames[i].style.margin = appNameArray[3];
    }
}


// ---------- TIME & DATE ---------- // 
// ????? change year based on chosen decade ??????? //
function updateTime() {
    const currentDate = new Date();
    const currentDateString = currentDate.toDateString();
    const currentTimeString = currentDate.toLocaleTimeString();
    document.querySelector("#date").textContent = currentDateString + " " + currentTimeString;
}
setInterval(updateTime, 1000);

// --------- MUSIC PLAYER ---------- //
var audio = new Audio('./audios/crush.mp3', loop=true, volume=0.5);
function playMusic() {
    document.getElementById('disk').style.animationPlayState = "running";
    document.getElementById('play').style.backgroundColor = "grey";
    document.getElementById('pause').style.backgroundColor = "black";
    document.getElementById('needle').style.transform = "rotate(30deg)";
    document.getElementById('needle').style.transition = "transform 1s";
    audio.play();
}
function pauseMusic() {
    document.getElementById('disk').style.animationPlayState = "paused";
    document.getElementById('play').style.backgroundColor = "black";
    document.getElementById('pause').style.backgroundColor = "grey";
    document.getElementById('needle').style.transform = "rotate(0deg)";
    document.getElementById('needle').style.transition = "transform 1s";
    audio.pause();
}

// background images from: https://www.reddit.com/r/VintageApple/comments/t20smz/heres_every_mac_os_default_wallpaper_19842022_4k/


// add-ons: timed popups / randomly show?
// custom cursor
// responsive, but needs to work on mobile or can be wide-screen compatible only