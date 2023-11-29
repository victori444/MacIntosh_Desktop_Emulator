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
    if (chosenDecade != "80s") {
        document.getElementById("browser").style.display = "block";
    }

    if (chosenDecade == "20s") {
        changeBaseStyle(backgroundImgs[4], "cover", fontFamily[2], "13px", "rgb(270, 270, 270, 0.7)", "none");
        changeText(aboutMacHeaders[4], aboutMacInfos[4]);
        changeGeneralWindowStyle('window');
        changeAppIcons();
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

// POPUPS / WINDOWS STYLING
function changeGeneralWindowStyle(className) {
    // container styling
    const collection = document.getElementsByClassName(className);
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "rgb(270, 270, 270, 0.85)";
        collection[i].style.border = "0.5px solid grey";
        collection[i].style.borderRadius = "7px";
        collection[i].style.padding = "5px 5px";
        collection[i].style.boxShadow = "0 0 black"; // change these to variable for decades
    }
    // close window button styling
    const closeButtons = document.getElementsByClassName('popupHeader');
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].style.backgroundColor = "red";
        closeButtons[i].style.border = "none";
        closeButtons[i].style.width = "15px";
        closeButtons[i].style.height = "15px";
        closeButtons[i].style.borderRadius = "50%";
        closeButtons[i].style.justifyContent = "center";
        closeButtons[i].style.fontSize = "12px";
    }
}

function changeAppIcons() {
    const appIcons = document.getElementsByClassName('appIcon');
    for (let i = 0; i < appIcons.length; i++) {
        console.log('changed app icon img');
        // array of icons in order of how they're listed in html
    }
    const appNames = document.getElementsByClassName('appName');
    for (let i = 0; i < appNames.length; i++) {
        appNames[i].style.fontSize = "10px";
        appNames[i].style.backgroundColor = "transparent";
        appNames[i].style.color = "white";
        appNames[i].style.margin = "5px 0px 0px 0px";
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

// background images from: https://www.reddit.com/r/VintageApple/comments/t20smz/heres_every_mac_os_default_wallpaper_19842022_4k/

// console error: line 48 doc.getelement is null

// add-ons: timed popups / randomly show?
// drag and drop
// responsive, but needs to work on mobile or can be wide-screen compatible only