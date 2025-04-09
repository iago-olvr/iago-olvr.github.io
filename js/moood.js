import { getConfigsCurious } from '/js/curious.js';
import { setUpCurious } from '/js/curious.js';

import { getConfigsSnob } from '/js/snob.js';
import { setUpSnob } from '/js/snob.js';

import { getConfigsMarijane } from '/js/marijane.js';
import { setUpMarijane } from '/js/marijane.js';

import { getConfigsRivotril } from '/js/rivotril.js';
import { setUpRivotril } from '/js/rivotril.js';

import { getConfigsGum } from '/js/gum.js';
import { setUpGum } from '/js/gum.js';

import { getConfigsShitCrazy } from '/js/shitCrazy.js';
import { setUpShitCrazy } from '/js/shitCrazy.js';

import { getConfigsDramin } from '/js/dramin.js';
import { setUpDramin } from '/js/dramin.js';

import { getConfigsDVD } from '/js/dvd.js';
import { setUpDVD } from '/js/dvd.js';

import { getConfigsMushroom } from '/js/mushroom.js';
import { setUpMushroom } from '/js/mushroom.js';

import { getConfigsMlady } from '/js/mlady.js';
import { setUpMlady } from '/js/mlady.js';

import { getConfigsBellBottoms } from '/js/bellBottoms.js';
import { setUpBellBottoms } from '/js/bellBottoms.js';


// --------------- VAR ---------------

let body = document.body;

let hover = document.getElementsByClassName("hover")[0];

let front = document.getElementsByClassName("front")[0];
let sky = document.getElementsByClassName("sky")[0];
let img = document.getElementById("img");
let imgBarn = document.getElementById("barn");
let imgElderlys = document.getElementById("elderlys");
let currentHumor = document.getElementById("currentHumor");
let leftBarnPanel = document.getElementsByClassName("leftBarnPanel")[0];
let rightBarnPanel = document.getElementsByClassName("rightBarnPanel")[0];

let btnFlip = document.getElementById("flip");
let btnHelp = document.getElementById("help");
let btnShuffle = document.getElementById("shuffle");
let side = document.getElementById("side");
let sign = document.getElementById("sign");

let humorRadio = document.querySelectorAll("input[type='radio']");
let labels = document.querySelectorAll("label");

let eyeL = document.getElementsByClassName("eyeL")[0];
let eyeR = document.getElementsByClassName("eyeR")[0];
let pupL = document.getElementsByClassName("pupL")[0];
let pupR = document.getElementsByClassName("pupR")[0];
let eylidL = document.getElementsByClassName("eylidL")[0];
let eylidR = document.getElementsByClassName("eylidR")[0];
let glasses = document.getElementsByClassName("glasses")[0];
let discoBall = document.getElementsByClassName("discoBall")[0];
let lights = document.getElementsByClassName("lights")[0];
let dialog = document.getElementsByClassName("dialog")[0];
let elderlys = document.getElementsByClassName("elderlys")[0];

let id;
let hue = 0;
let colorIndex = -1;
let lastQuoteIndex = -1;
let requestId;
let currentPannel = leftBarnPanel;
const colors = ["red", "blue", "green", "yellow", "cyan", "orange"];
const mooods = ["Curiosa", "Esnobe", "Chapada", "Ansiosa", "Descolada", "Bufano", "Dormindo", "DVD", "LSD", "Madame", "Disco"];

// --------------- OBJECTS ---------------

/**
 * Object with the configs for the behavior
 */
let configs = {
    coefRot: null, //How much is going to spin. Less = higher rotation
    coefReac: null, //How fast is going to react. More = slower reaction
    directionShdwX: null, //The direction of the dropshadown, X axis
    directionShdwY: null, //The direction of the dropshadown, Y axis
    negativeDirectionLeftX: null, //The left side of the left eye 
    positiveDirectionLeftX: null, //The right side of the left eye 
    upDirectionLeftY: null, //The upper side of the left eye 
    downDirectionLeftY: null, //The downer side of the left eye 
    negativeDirectionRightX: null, //The left side of the right eye 
    positiveDirectionRightX: null, //The right side of the right eye 
    upDirectionRightY: null, //The upper side of the right eye 
    downDirectionRightY: null, //The downer side of the right eye 
    positionEylidL: null, //The position of the Eylid of the left eye
    positionEylidR: null, //The position of the Eylid of the right eye
    scleraColor: null, //The color of the sclera FYI(the white portion of the eye is called sclera)
    propName: null, //The name of the prop, if the mood has one
    propTop: null, //The top distance of the prop, if the mood has one
    propLeft: null, //The left distance of the prop, if the mood has one
    time: null, //Day/Night
    quotes: [], // The quotes to display when interacts
};

/**
 * Object with the configs of the properties. Used to reset the humor
 */
let setUpConfigs = {
    img: img, //The path of the image
    eyeL: eyeL, //The color of the sclera of the left eye
    eyeR: eyeR, //The color of the sclera of the right eye
    eylidL: eylidL, //The initial position of the left eylid
    eylidR: eylidR, //The initial position of the right eylid
    pupL: pupL, //The initial size of the left pupil
    pupR: pupR, //The initial size of the right pupil
    glasses: glasses, //the initial state of the glasses
    discoBall: discoBall, //the initial state of the discoBall
    quotes: dialog, //The quotes to display
};

// --------------- EVENTS ---------------

/**
 * Handles the humor radio
 */
humorRadio.forEach((e) => {
    e.onchange = (e) => {
        loadConfig(e.target);
    }
})

/**
 * Add the zoom effect on the labes when hover
 */
labels.forEach((e) => {
    e.onmouseover = (e) => {
        e.target.style.setProperty("font-size", "20px")
        e.target.style.setProperty("font-style", "italic")

    }
    e.onmouseleave = (e) => {
        e.target.style.setProperty("font-size", "18px")
        e.target.style.setProperty("font-style", "normal")
    }
})

/**
 * Add the dialog when interacts
 * @param {*} e = the mouse enter in the hover area
 */
hover.onmouseenter = (e) => {
    let index = randomize(configs.quotes);
    dialog.innerHTML = configs.quotes[index];
}

/**
 * Monitors when the mouse enters the hover area
 * @param {*} e = the mouse moviment
 */
hover.onmousemove = (e) => {
    if (currentHumor.innerHTML != "DVD") { //Disable the rotation to the DVD Moood
        updateRotation(e);
    }

    if (currentHumor.innerHTML == "LSD") {
        if (!id) {
            id = setInterval(changeColor, 500);
            animateHue();
        }
    }
};

/**
 * Monitors when the mouse leaves the hover area
 * @param {*} e = the mouse moviment
 */
hover.onmouseleave = (e) => {
    mouseleave();
};

/**
 * 
 * @param {*} e = the click in the helper button
 */
btnHelp.onclick = (e) => {
    getHelp();
};

btnShuffle.onclick = (e) => {
    let moood = document.getElementById(mooods[randomize(mooods)]);
    moood.click();
}

btnFlip.onclick = (e) => {

    side.style.removeProperty("animation");

    if (currentPannel == leftBarnPanel) {
        leftBarnPanel.style.setProperty("animation", "flipHide linear 300ms");
        leftBarnPanel.style.setProperty("transform", "rotateY(90deg)");
        btnFlip.style.setProperty("animation", "flipHide linear 300ms");
        btnFlip.style.setProperty("transform", "rotateY(90deg)");
        side.style.setProperty("animation", "flipSideHide 300ms ease-in");

        setTimeout(function () {
            rightBarnPanel.style.setProperty("animation", "flipReveal linear 300ms");
            rightBarnPanel.style.setProperty("transform", "rotateY(360deg)");
            btnFlip.style.setProperty("animation", "flipReveal linear 300ms");
            btnFlip.style.setProperty("transform", "rotateY(0deg)");
            side.style.setProperty("animation", "flipSideReveal 300ms ease-out");
        }, 400)
        currentPannel = rightBarnPanel;
    } else {
        rightBarnPanel.style.setProperty("animation", "flipHide linear 300ms");
        rightBarnPanel.style.setProperty("transform", "rotateY(90deg)");
        btnFlip.style.setProperty("animation", "flipHide linear 300ms");
        btnFlip.style.setProperty("transform", "rotateY(90deg)");
        side.style.setProperty("animation", "flipSideHide 300ms ease-in");

        setTimeout(function () {
            leftBarnPanel.style.setProperty("animation", "flipReveal linear 300ms");
            leftBarnPanel.style.setProperty("transform", "rotateY(360deg)");
            btnFlip.style.setProperty("animation", "flipReveal linear 300ms");
            btnFlip.style.setProperty("transform", "rotateY(0deg)");
            side.style.setProperty("animation", "flipSideReveal 300ms ease-out");
        }, 400)
        currentPannel = leftBarnPanel;
    }
}

// --------------- FUNCTIONS ---------------

/**
 * Function that load the initial behavior
 */
function initialConfig() {
    configs = getConfigsCurious(configs);
    currentHumor.innerHTML = "Curiosa";
    mouseleave();
}

/**
 * Function that handles the humor radio.
 * @param {*} op = opção de humor selecionada.
 */
function loadConfig(op) {
    currentHumor.innerHTML = op.id;

    switch (op.id) {
        case "Curiosa":
            configs = getConfigsCurious(configs);
            setUpCurious(setUpConfigs);
            mouseleave();
            break;
        case "Esnobe":
            configs = getConfigsSnob(configs);
            setUpSnob(setUpConfigs);
            mouseleave();
            break;
        case "Chapada":
            configs = getConfigsMarijane(configs);
            setUpMarijane(setUpConfigs);
            mouseleave();
            break;
        case "Ansiosa":
            configs = getConfigsRivotril(configs);
            setUpRivotril(setUpConfigs);
            mouseleave();
            break;
        case "Descolada":
            configs = getConfigsGum(configs);
            setUpGum(setUpConfigs);
            mouseleave();
            break;
        case "Bufano":
            configs = getConfigsShitCrazy(configs);
            setUpShitCrazy(setUpConfigs);
            mouseleave();
            break;
        case "Dormindo":
            //Change the display value to prevent it from appearing incorrectly
            eyeL.style.display = "none";
            eyeR.style.display = "none";
            configs = getConfigsDramin(configs);
            setUpDramin(setUpConfigs);
            mouseleave();
            eyeL.style.display = "flex";
            eyeR.style.display = "flex";
            break;
        case "DVD":
            configs = getConfigsDVD(configs);
            setUpDVD(setUpConfigs);
            mouseleave();
            break;
        case "LSD":
            configs = getConfigsMushroom(configs);
            setUpMushroom(setUpConfigs);
            mouseleave();
            break;
        case "Madame":
            configs = getConfigsMlady(configs);
            setUpMlady(setUpConfigs);
            mouseleave();
            break;
        case "Disco":
            configs = getConfigsBellBottoms(configs);
            setUpBellBottoms(setUpConfigs);
            mouseleave();
            break;
        default:
            break;
    }
}

/**
 * Function the controls the moviments of the head and eyes
 * 
 * @param {event} e 
 */
function updateRotation(e) {
    //Grab the center of the hover area
    let rect = e.target.getBoundingClientRect();
    let x = Math.floor(e.clientX - rect.left);
    let xCenterPoint = (x + rect.width / 2 - x * 2) * -1;
    let y = Math.floor(e.clientY - rect.top);
    let yCenterPoint = y + rect.height / 2 - y * 2;

    //Grab the center of the left eye
    let recteyeL = eyeL.getBoundingClientRect();
    let eyeLX = Math.floor(e.clientX - recteyeL.left);
    let eyeLY = Math.floor(e.clientY - recteyeL.top);

    // Grab the center of the right eye
    let recteyeR = eyeR.getBoundingClientRect();
    let eyeRX = Math.floor(e.clientX - recteyeR.left);
    let eyeRY = Math.floor(e.clientY - recteyeR.top);

    //Transition initial duration
    front.style.transitionDuration = configs.coefReac;
    pupL.style.transitionDuration = configs.coefReac;
    pupR.style.transitionDuration = configs.coefReac;


    // ------ Head ------

    //Rotation
    front.style.transform =
        "rotateX(" +
        (yCenterPoint / configs.coefRot) * -1 +
        "deg) rotateY(" +
        (xCenterPoint / configs.coefRot) * -1 +
        "deg)";

    //Shadow
    let coefShdwX = ((xCenterPoint / configs.coefRot)) * configs.directionShdwX
    let coefShdwY = ((yCenterPoint / configs.coefRot)) * configs.directionShdwY

    img.style.transitionDuration = configs.coefReac;
    img.style.filter = "drop-shadow(" + coefShdwX + "px " + coefShdwY + "px black)"

    // ------ Left eye ------

    //Rotation
    pupL.style.transform =
        "rotateX(" +
        (yCenterPoint / configs.coefRot) * -1 +
        "deg) rotateY(" +
        (xCenterPoint / configs.coefRot) * -1 +
        "deg)";

    //Position
    if (eyeLX > 0) {
        pupL.style.setProperty("left", configs.positiveDirectionLeftX);
    } else if (eyeLX < 0) {
        pupL.style.setProperty("left", configs.negativeDirectionLeftX);
    }

    if (eyeLY > 0) {
        pupL.style.setProperty("top", configs.downDirectionLeftY);
    } else {
        pupL.style.setProperty("top", configs.upDirectionLeftY);
    }

    eylidL.style.setProperty("top", configs.positionEylidL);


    // ------ Right eye ------

    //Rotation 
    pupR.style.transform =
        "rotateX(" +
        (yCenterPoint / configs.coefRot) * -1 +
        "deg) rotateY(" +
        (xCenterPoint / configs.coefRot) * -1 +
        "deg)";

    //Position
    if (eyeRX > 0) {
        pupR.style.setProperty("left", configs.positiveDirectionRightX);
    } else {
        pupR.style.setProperty("left", configs.negativeDirectionRightX);
    }

    if (eyeRY > 0) {
        pupR.style.setProperty("top", configs.downDirectionRightY);
    } else {
        pupR.style.setProperty("top", configs.upDirectionRightY);
    }

    eylidR.style.setProperty("top", configs.positionEylidR);

    // ------ Props ------

    switch (configs.propName) {
        case "glasses":
            let prop = document.getElementsByClassName(configs.propName)[0];
            prop.style.setProperty("top", "-10px")
            prop.style.setProperty("transform", "rotate(10deg)")
            break;
        case "discoBall":
            discoBall.style.display = 'inline-block';
            lights.style.setProperty("display", "inline-flex");
            break;
        default:
            break;
    }

    if (currentHumor.innerHTML == "LSD") {
        pupR.style.setProperty("border-radius", "20px")
        pupL.style.setProperty("border-radius", "20px")
    }

}

/**
 * Function that resets the position when leaving the hover area
 */
function mouseleave() {

    dialog.innerHTML = "";

    document.querySelectorAll('.moves').forEach(el => {
        el.style.transitionDuration = "500ms";
        el.style.transform = "rotateX(0deg) rotateY(0deg)";
        front.style.transform = "rotateX(0deg) rotateY(0deg)";
    })

    pupL.style.setProperty("left", "0px");
    pupR.style.setProperty("left", "0px");

    pupL.style.setProperty("top", "0px");
    pupR.style.setProperty("top", "0px");

    img.style.filter = "drop-shadow(0px 0px 0px black)";
    body.style.removeProperty("filter");
    cancelAnimationFrame(requestId);
    requestId = undefined;

    if (configs.time == "N") { //Night
        imgBarn.src = "/media/Barnv3.png";

        sign.src = "/media/signv2.png";
        leftBarnPanel.style.background = "url('/media/signBackv2.png') center";
        leftBarnPanel.style.border = "solid 15px #171717";
        rightBarnPanel.style.background = "url('/media/signBackv2.png') center";
        rightBarnPanel.style.border = "solid 15px #171717";
        btnFlip.src = "/media/botaoFlipv2.png";

        btnHelp.src = "/media/PlacaAjudav2.png";
        btnShuffle.src = "/media/PlacaAleatoriov2.png";
        btnHelp.style.setProperty("filter", "drop-shadow(0px 8px 0px #442d07)")

        imgElderlys.src = "/media/AmericanGothicSmallv2.png"
        body.style.backgroundImage = "url('/media/backgroundv2.png')";
        body.style.backgroundColor = "#074505";
        sky.style.setProperty("display", "none");
        labels.forEach((e) => {
            e.style.setProperty("color", "darkslategray");
        })
        currentHumor.style.setProperty("color", "darkslategray");
        humorRadio.forEach((e) => {
            e.style.setProperty("backgroundColor", "darkslategray");
        })
    } else { //Day
        imgBarn.src = "/media/Barnv2.png";

        sign.src = "/media/sign.png";
        leftBarnPanel.style.background = "url('/media/signBack.png') center";
        leftBarnPanel.style.border = "solid 15px #393939";
        rightBarnPanel.style.background = "url('/media/signBack.png') center";
        rightBarnPanel.style.border = "solid 15px #393939";
        btnFlip.src = "/media/botaoFlip.png";

        btnHelp.src = "/media/PlacaAjuda.png";
        btnShuffle.src = "/media/PlacaAleatorio.png";
        btnHelp.style.setProperty("filter", "drop-shadow(0px 8px 0px #ab7012)")

        imgElderlys.src = "/media/AmericanGothicSmall.png"
        body.style.backgroundImage = "url('/media/background.png')";
        body.style.backgroundColor = "#11ac0d";
        sky.style.setProperty("display", "block");
        labels.forEach((e) => {
            e.style.setProperty("color", "papayawhip");
        })
        currentHumor.style.setProperty("color", "papayawhip");
    }

    //Resets to default of each humor
    switch (currentHumor.innerText) {
        case "Curiosa":
            setUpCurious(setUpConfigs);
            break;
        case "Esnobe":
            setUpSnob(setUpConfigs);
            break;
        case "Chapada":
            setUpMarijane(setUpConfigs);
            break;
        case "Ansiosa":
            setUpRivotril(setUpConfigs);
            break;
        case "Descolada":
            setUpGum(setUpConfigs);
            break;
        case "Bufano":
            setUpShitCrazy(setUpConfigs);
            break;
        case "Dormindo":
            setUpDramin(setUpConfigs);
            break;
        case "LSD":
            setUpMushroom(setUpConfigs);
            clearInterval(id);
            id = undefined;
            break;
        case "Madame":
            setUpMlady(setUpConfigs);
            break;
        case "Disco":
            lights.style.setProperty("display", "none");
            setUpBellBottoms(setUpConfigs);
            break;
        default:
            break;
    }
}

/**
 * Function that call the helper
 */
function getHelp() {
    btnHelp.style.setProperty("margin-top", "10px")
    elderlys.style.display = "inline-block";
    document.querySelectorAll('.focus').forEach(el => {
        el.style.filter = "blur(5px)";
    })
    setTimeout(disposeHelp, 3700);
}

/**
 * Function that retract the helper
 */
function disposeHelp() {
    elderlys.style.setProperty("animation", "byebyeElderlys 500ms");

    document.querySelectorAll('.focus').forEach(el => {
        el.style.filter = "none";
    })
    setTimeout(resetsHelp, 450);
}

/**
 * Function that resets the helper to his original state
 */
function resetsHelp() {
    btnHelp.style.setProperty("margin-top", "0px")
    elderlys.style.display = "none";
    elderlys.style.setProperty("animation", "helloElderlys 500ms");
}

/**
 * Function thar change the color of the eye in LSD Moood
 */
function changeColor() {

    let cor1 = colors[getIndex()];
    let cor2 = colors[getIndex()];
    let cor3 = colors[getIndex()];
    let cor4 = colors[getIndex()];
    let cor5 = colors[getIndex()];
    let cor6 = colors[getIndex()];

    pupR.style.setProperty("box-shadow", "0px 0px 3px 3px " + cor1 + " inset, 0px 0px 3px 6px " + cor2 + " inset, 0px 0px 3px 9px " + cor3 + " inset, 0px 0px 3px 12px " + cor4 + " inset, 0px 0px 3px 15px " + cor5 + " inset, 0px 0px 3px 18px " + cor6 + " inset")
    pupL.style.setProperty("box-shadow", "0px 0px 3px 3px " + cor1 + " inset, 0px 0px 3px 6px " + cor2 + " inset, 0px 0px 3px 9px " + cor3 + " inset, 0px 0px 3px 12px " + cor4 + " inset, 0px 0px 3px 15px " + cor5 + " inset, 0px 0px 3px 18px " + cor6 + " inset")

}

/**
 * Function thar ramdomizes and put in a loop the colors
 * @returns the index of the next color in the sequence
 */
function getIndex() {
    colorIndex++;

    if (colorIndex == colors.length - 1) {
        colorIndex = 0
    }
    return colorIndex;
}

/**
 * Function that animates the Hue-Rotate on the body
 */
function animateHue(item) {
    hue = (hue + 1) % 360;
    body.style.setProperty("filter", "hue-rotate(" + hue + "deg)");
    requestId = requestAnimationFrame(animateHue);
}

/**
 * Randomizes an array of itens 
 * @param {*} item = The array of values to randomize
 * @returns A random index of the list;
 */
function randomize(item) {
    let newIndex;

    do {
        newIndex = Math.floor(Math.random() * item.length);
    } while (newIndex === lastQuoteIndex && item.length > 1);

    lastQuoteIndex = newIndex;
    return newIndex;
}


initialConfig();