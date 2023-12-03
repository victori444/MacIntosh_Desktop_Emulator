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
function openResponses() {location.href = "./CART 211/index.html"}
function openPopup(popupId) { document.getElementById(popupId).style.display = "block"; }
function closePopup(popupId) { document.getElementById(popupId).style.display = "none"; }

// ---------- DECADE CHOICE ---------- //
var chosenDecade = "80s"; // default value
function radioValue() {
    var radio = document.getElementsByName("decade");
    for (i=0; i<radio.length; i++) {
        if (radio[i].checked) {
            chosenDecade = radio[i].value;
        }
    }
    // close system settings window once submitted
    document.getElementById('systemSettings').style.display = "none";

    if (chosenDecade == "80s") {
        audioArray = audio80s;
        songNameArray = songNames80s;
        artistNameArray = artistNames80s;
        location.href = "desktop.html";
    }
    if (chosenDecade == "90s") {
        audioArray = audio90s;
        songNameArray = songNames90s;
        artistNameArray = artistNames90s;
        changeBaseStyle(backgroundImgs[1], "cover", fontFamily[0], "18px", "rgb(220, 220, 220)", "2px solid black");
        changeText(aboutMacHeaders[1], aboutMacInfos[1]);
        changeGeneralWindowStyle(WindowStyle90s, closeButton90s);
        changeAppIcons(appName90s, "Play Music");
    }
    if (chosenDecade == "00s") {
        audioArray = audio00s;
        songNameArray = songNames00s;
        artistNameArray = artistNames00s;
        changeBaseStyle(backgroundImgs[2], "cover", fontFamily[1], "12px", "rgb(240, 240, 240)", "2px solid black");
        changeText(aboutMacHeaders[2], aboutMacInfos[2]);
        changeGeneralWindowStyle(WindowStyle00s, closeButton00s);
        changeAppIcons(appName00s, "iMusic");
    }
    if (chosenDecade == "20s") {
        audioArray = audio20s;
        songNameArray = songNames20s;
        artistNameArray = artistNames20s;
        changeBaseStyle(backgroundImgs[4], "cover", fontFamily[2], "13px", "rgb(270, 270, 270, 0.7)", "none");
        changeText(aboutMacHeaders[4], aboutMacInfos[4]);
        changeGeneralWindowStyle(WindowStyle20s, closeButton20s);
        changeAppIcons(appName20s, "Apple Music");
    }
}

// BASE DESKTOP STYLING
let backgroundImgs = ["url('./images/bckgrnd80s.png')", 
                        "url('./images/bckgrnd90s.jpg')", 
                        "url('./images/bckgrnd00s.png')", 
                        null, 
                        "url('./images/bckgrnd20s.jpg')"];
let fontFamily = ["'VT323', monospace", 
                    "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                    "Helvetica, sans-serif"];
// fontFamily: 0: 80s=90s, 1: 00s, 2: 10s=20s

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
let aboutMacHeaders = ["Macintosh 128K", "Mac OS 9.2", "iMac G3", "10s", "Macbook Air"];
let aboutMacInfos = ["9-in, 1983", "90s", "00s", "10s", "Retina, 13-in, 2020"];

function changeText(abtMacHeader, abtMacInfo) {
    document.getElementById('aboutMacHeader').innerHTML = abtMacHeader;
    document.getElementById('aboutMacInfo').innerHTML = abtMacInfo;
}

// POPUPS / WINDOWS STYLING
const WindowStyle90s = ["rgb(220, 220, 220)", "2px solid black", "none", "none", "none"];
const closeButton90s = ["rgb(180, 180, 180)", "2px solid black", "100%", "20px", "0px", "left", "20px"];

const WindowStyle00s = ["rgb(240, 240, 240)", "1px solid black", "7px", "5px 5px", "0 0 5px black"];
const closeButton00s = ["red", "none", "15px", "15px", "50%", "center", "12px"];

const WindowStyle20s = ["rgb(270, 270, 270, 0.85)", "0.5px solid grey", "7px", "5px 5px", "0 0 5px black"];
const closeButton20s = ["red", "none", "15px", "15px", "50%", "center", "10px"];

function changeGeneralWindowStyle(windowArray, closeButtonArray, popupContainerArray) {
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
        closeButtons[i].style.borderBottom = closeButtonArray[1];
        closeButtons[i].style.width = closeButtonArray[2];
        closeButtons[i].style.height = closeButtonArray[3];
        closeButtons[i].style.borderRadius = closeButtonArray[4];
        closeButtons[i].style.justifyContent = closeButtonArray[5];
        closeButtons[i].style.fontSize = closeButtonArray[6];
    }
}

const appName80s = ["16px", "white", "black", "2px 0px 0px 0px", "none"];
const appName90s = ["16px", "rgb(240, 240, 240, 0.9)", "black", "2px 0px 0px 0px", "italic"];
const appName00s = ["12px", "transparent", "white", "2px 0px 0px 0px", "none"];
const appName20s = ["10px", "transparent", "white", "5px 0px 0px 0px", "none"];

function changeAppIcons(appNameArray, appNameText) {
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
        appNames[i].style.fontStyle = appNameArray[4];
    }
    document.getElementById('musicPlayerName').innerHTML = appNameText;
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
var hey = new Audio('./audios/hey.mp3', loop=true);
var cantStand = new Audio('./audios/cant_stand.mp3', loop=true);
var headOver = new Audio('./audios/headOverHeels.mp3', loop=true);

var sunday = new Audio('./audios/sunday.mp3', loop=true);
var fade = new Audio('./audios/fadeIntoYou.mp3', loop=true);
var onEarth = new Audio('./audios/onEarth.mp3', loop=true);

var msJackson = new Audio('./audios/msJackson.mp3', loop=true);
var naive = new Audio('./audios/naive.mp3', loop=true);
var whenTheSun = new Audio('./audios/whenTheSun.mp3', loop=true);

var crush = new Audio('./audios/crush.mp3', loop=true);
var faye = new Audio('./audios/faye.mp3', loop=true);

const audio80s = [hey, cantStand, headOver];
const audio90s = [sunday, fade, onEarth];
const audio00s = [msJackson, naive, whenTheSun];
const audio20s = [crush, faye];

const songNames80s = ["Hey", "Can't Stand Losing You", "Head Over Heels"];
const songNames90s = ["Sunday", "Fade Into You", "On Earth"];
const songNames00s = ["Ms. Jackson", "Naive", "When The Sun Goes Down"];
const songNames20s = ["Crush", "I Know I'm Funny haha"];

const artistNames80s = ["Pixies", "The Police", "Tears For Fears"];
const artistNames90s = ["The Cranberries", "Mazzy Star", "The Sundays"];
const artistNames00s = ["Outkast", "The Kooks", "Arctic Monkeys"];
const artistNames20s = ["Ethel Cain", "Faye Webster"];

var currentTrack = 0;
var audioArray = audio80s;
var songNameArray = songNames80s;
var artistNameArray = artistNames80s;

function nextTrack() {
    pauseMusic();
    audioArray[currentTrack].currentTime = 0;
    if (currentTrack >= audioArray.length - 1) {
        currentTrack = 0;
    } else { 
        currentTrack += 1;
    } 
    playMusic();
    document.getElementById('songName').innerHTML = songNameArray[currentTrack];
    document.getElementById('artistName').innerHTML = artistNameArray[currentTrack];
}

function prevTrack() {
    pauseMusic();
    audioArray[currentTrack].currentTime = 0;
    if (currentTrack <= 0) {
        currentTrack = audioArray.length - 1;
    } else { 
        currentTrack -= 1;
    } 
    playMusic();
    document.getElementById('songName').innerHTML = songNameArray[currentTrack];
    document.getElementById('artistName').innerHTML = artistNameArray[currentTrack];
}

function playMusic() {
    document.getElementById('disk').style.animationPlayState = "running";
    document.getElementById('play').style.backgroundColor = "grey";
    document.getElementById('pause').style.backgroundColor = "black";
    document.getElementById('needle').style.transform = "rotate(30deg)";
    document.getElementById('needle').style.transition = "transform 1s";
    document.getElementById('songInfo').style.display = "block";
    document.getElementById('songName').innerHTML = songNameArray[currentTrack];
    document.getElementById('artistName').innerHTML = artistNameArray[currentTrack];
    audioArray[currentTrack].play();
}
function pauseMusic() {
    document.getElementById('disk').style.animationPlayState = "paused";
    document.getElementById('play').style.backgroundColor = "black";
    document.getElementById('pause').style.backgroundColor = "grey";
    document.getElementById('needle').style.transform = "rotate(0deg)";
    document.getElementById('needle').style.transition = "transform 1s";
    document.getElementById('songInfo').style.display = "none";
    audioArray[currentTrack].pause();
}

// background images from: https://www.reddit.com/r/VintageApple/comments/t20smz/heres_every_mac_os_default_wallpaper_19842022_4k/
