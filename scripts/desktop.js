// --------- VISIBILITY CONTROL ---------- //
let toggleActive = false;
function toggleDropdown(toggledClass, titleId) {
    if (toggleActive == false) {
        document.getElementById(toggledClass).style.display = "block";
        document.getElementById(titleId).style.backgroundColor = "black";
        document.getElementById(titleId).style.color = "rgb(240, 240, 240)";
        toggleActive = true;
    } else {
        document.getElementById(toggledClass).style.display = "none";
        document.getElementById(titleId).style.backgroundColor = "rgb(240, 240, 240)";
        document.getElementById(titleId).style.color = "black";
        toggleActive = false;
    }
}

function newPage() { location.href = "index.html"; }
function openPopup(popupId) { document.getElementById(popupId).style.display = "block"; }
function closePopup(popupId) { document.getElementById(popupId).style.display = "none"; }

// ---------- DECADE CHOICE ---------- //
var chosenDecade = "80s"; // default value
let backgroundImgs = ["url('./images/bckgrnd80s.png')", "url('./images/bckgrnd90s.jpg')", "url('./images/bckgrnd20s.jpg')"];
let fontFamily = ["'VT323', monospace", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif","Helvetica, sans-serif"];
// fontFamily: 0: 80s=90s, 1: 00s, 2: 10s=20s
function radioValue() {
    var radio = document.getElementsByName("decade");
    for (i=0; i<radio.length; i++) {
        if (radio[i].checked) {
            chosenDecade = radio[i].value;
        }
    }

    if (chosenDecade == "20s") {
        changeBaseStyle(backgroundImgs[2], "cover", fontFamily[2], "13px", "rgb(270, 270, 270, 0.5)", "none");
    }
    if (chosenDecade == "80s") {
        changeBaseStyle(backgroundImgs[0], "1200px", fontFamily[0], "16px", "rgb(240, 240, 240)", "2px solid black");
    }
}

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