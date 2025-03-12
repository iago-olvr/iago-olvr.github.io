import { configsCurious } from '/js/curious.js';
import { configsSnob } from '/js/snob.js';
import { configsMarijane } from '/js/marijane.js';
import { configsCocaine } from '/js/cocaine.js';

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


let currentHumor = document.getElementById("currentHumor");
let humorRadio = document.querySelectorAll("input[type='radio']");



// Initial object with the configs for the behavior
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
};

// --------------- EVENTS ---------------

// Handles the humor radio
humorRadio.forEach((e) => {
    e.onchange = (e) => {
        loadConfig(e.target);
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
 * Function that handles the humor radio.
 * @param {*} op 
 */
function loadConfig(op) {
    currentHumor.innerHTML = op.id;

    switch (op.value) {
        case "curious":
            configs = configsCurious(configs);
            eyeL.style.setProperty("background-color", configs.scleraColor)
            eyeR.style.setProperty("background-color", configs.scleraColor)
            mouseleave();
            img.src = "/media/VacaAnimadav3.gif";
            break;
        case "snob":
            configs = configsSnob(configs);
            eyeL.style.setProperty("background-color", configs.scleraColor)
            eyeR.style.setProperty("background-color", configs.scleraColor)
            mouseleave();
            img.src = "/media/VacaAnimadav3.gif";
            break;
        case "marijane":
            configs = configsMarijane(configs);
            eyeL.style.setProperty("background-color", configs.scleraColor)
            eyeR.style.setProperty("background-color", configs.scleraColor)
            mouseleave();
            img.src = "/media/VacaAnimadav4.gif";
            break;
        case "rivotril":
            configs = configsCocaine(configs);
            eyeL.style.setProperty("background-color", configs.scleraColor)
            eyeR.style.setProperty("background-color", configs.scleraColor)
            mouseleave();
            img.src = "/media/VacaAnimadav5.gif";
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

    if (currentHumor.innerText == "Ansiosa") {
        eylidL.style.setProperty("top", configs.positionEylidL);
        eylidR.style.setProperty("top", configs.positionEylidR);
    } else {
        eylidL.style.setProperty("top", "-9px");
        eylidR.style.setProperty("top", "-9px");
    }

    img.style.filter = "drop-shadow(0px 0px 0px black)"
}

/**
 * Function that load the initial behavior
 */
function initialConfig() {
    configs = configsCurious(configs);
    currentHumor.innerHTML = "Curiosa";
    mouseleave();
}

initialConfig();