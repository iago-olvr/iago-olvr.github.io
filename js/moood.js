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


// --------------- VAR ---------------

let body = document.body;

let hover = document.getElementsByClassName("hover")[0];

let front = document.getElementsByClassName("front")[0];
let sky = document.getElementsByClassName("sky")[0];
let img = document.getElementById("img");
let imgBarn = document.getElementById("barn");
let currentHumor = document.getElementById("currentHumor");
let help = document.getElementById("help");

let humorRadio = document.querySelectorAll("input[type='radio']");
let labels = document.querySelectorAll("label");

let eyeL = document.getElementsByClassName("eyeL")[0];
let eyeR = document.getElementsByClassName("eyeR")[0];
let pupE = document.getElementsByClassName("pupE")[0];
let pupR = document.getElementsByClassName("pupR")[0];
let eylidL = document.getElementsByClassName("eylidL")[0];
let eylidR = document.getElementsByClassName("eylidR")[0];
let glasses = document.getElementsByClassName("glasses")[0];
let elderlys = document.getElementsByClassName("elderlys")[0];


let dialog = document.getElementsByClassName("dialog")[0];

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
    pupE: pupE, //The initial size of the left pupil
    pupR: pupR, //The initial size of the right pupil
    glasses: glasses, //the initial state of the glasses
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
        e.target.style.setProperty("font-size", "x-large")
        e.target.style.setProperty("font-style", "italic")

    }
    e.onmouseleave = (e) => {
        e.target.style.setProperty("font-size", "large")
        e.target.style.setProperty("font-style", "normal")
    }
})

/**
 * Add the dialog when interacts
 * @param {*} e = the mouse enter in the hover area
 */
hover.onmouseenter = (e) => {
    dialog.innerHTML = configs.quotes[Math.floor(Math.random() * configs.quotes.length)];
}

/**
 * Monitors when the mouse enters the hover area
 * @param {*} e = the mouse moviment
 */
hover.onmousemove = (e) => {
    if (currentHumor.innerHTML != "DVD") { //Disable the rotation to the DVD Moood
        updateRotation(e);
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
help.onclick = (e) => {
    getHelp();
};


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
    pupE.style.transitionDuration = configs.coefReac;
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
    pupE.style.transform =
        "rotateX(" +
        (yCenterPoint / configs.coefRot) * -1 +
        "deg) rotateY(" +
        (xCenterPoint / configs.coefRot) * -1 +
        "deg)";

    //Position
    if (eyeLX > 0) {
        pupE.style.setProperty("left", configs.positiveDirectionLeftX);
    } else if (eyeLX < 0) {
        pupE.style.setProperty("left", configs.negativeDirectionLeftX);
    }

    if (eyeLY > 0) {
        pupE.style.setProperty("top", configs.downDirectionLeftY);
    } else {
        pupE.style.setProperty("top", configs.upDirectionLeftY);
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

    if (configs.propName != "null") {
        let prop = document.getElementsByClassName(configs.propName)[0];
        prop.style.setProperty("top", "-10px")
        prop.style.setProperty("transform", "rotate(10deg)")
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

    pupE.style.setProperty("left", "0px");
    pupR.style.setProperty("left", "0px");

    pupE.style.setProperty("top", "0px");
    pupR.style.setProperty("top", "0px");

    img.style.filter = "drop-shadow(0px 0px 0px black)"

    if (configs.time == "N") { //Night
        imgBarn.src = "/media/Barnv3.png";
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
        default:
            break;
    }
}

/**
 * Function that call the helper
 */
function getHelp() {
    help.style.setProperty("margin-top", "5px")
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
    help.style.setProperty("margin-top", "0px")
    elderlys.style.display = "none";
    elderlys.style.setProperty("animation", "helloElderlys 500ms");
}

initialConfig();