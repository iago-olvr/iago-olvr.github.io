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


// --------------- VAR ---------------

let hover = document.getElementsByClassName("hover")[0];

let front = document.getElementsByClassName("front")[0];
let img = document.getElementById("img");

let eyeL = document.getElementsByClassName("eyeL")[0];
let eyeR = document.getElementsByClassName("eyeR")[0];
let pupE = document.getElementsByClassName("pupE")[0];
let pupR = document.getElementsByClassName("pupR")[0];
let eylidL = document.getElementsByClassName("eylidL")[0];
let eylidR = document.getElementsByClassName("eylidR")[0];
let glasses = document.getElementsByClassName("glasses")[0];

let currentHumor = document.getElementById("currentHumor");
let humorRadio = document.querySelectorAll("input[type='radio']");
let labels = document.querySelectorAll("label");

// --------------- OBJECTS ---------------

// Object with the configs for the behavior
let configs = {
    coefRot: null,
    coefReac: null,
    directionShdwX: null,
    directionShdwY: null,
    negativeDirectionLeftX: null,
    positiveDirectionLeftX: null,
    upDirectionLeftY: null,
    downDirectionLeftY: null,
    negativeDirectionRightX: null,
    positiveDirectionRightX: null,
    upDirectionRightY: null,
    downDirectionRightY: null,
    positionEylidL: null,
    positionEylidR: null,
    scleraColor: null,
    propName: null,
    propTop: null,
    propLeft: null,
};

// Object with the configs of the properties. 
// Used to reset the humor.
let setUpConfigs = {
    img: img,
    eyeL: eyeL,
    eyeR: eyeR,
    eylidL: eylidL,
    eylidR: eylidR,
    pupE,
    pupR,
    glasses: glasses,
};

// --------------- EVENTS ---------------

// Handles the humor radio
humorRadio.forEach((e) => {
    e.onchange = (e) => {
        loadConfig(e.target);
    }    
})

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

hover.onmousemove = (e) => {
    updateRotation(e);
};

hover.onmouseleave = (e) => {
    mouseleave();
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
 * @param {*} op 
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
    document.querySelectorAll('.moves').forEach(el => {
        el.style.transitionDuration = "500ms";
        el.style.transform = "rotateX(0deg) rotateY(0deg)";
    })

    pupE.style.setProperty("left", "0px");
    pupR.style.setProperty("left", "0px");

    pupE.style.setProperty("top", "0px");
    pupR.style.setProperty("top", "0px");

    img.style.filter = "drop-shadow(0px 0px 0px black)"

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
        default:
            break;
    }
}

initialConfig();