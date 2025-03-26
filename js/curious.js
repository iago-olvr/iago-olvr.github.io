export function getConfigsCurious(configs) {

    configs.coefRot = 30;
    configs.coefReac = "180ms";

    //Direction Toward
    configs.directionShdwX = "-1"
    configs.directionShdwY = "1"

    configs.negativeDirectionLeftX = "-18px"
    configs.positiveDirectionLeftX = "19px"
    configs.upDirectionLeftY = "-9px"
    configs.downDirectionLeftY = "19px"

    configs.negativeDirectionRightX = "-18px"
    configs.positiveDirectionRightX = "20px"
    configs.upDirectionRightY = "-9px"
    configs.downDirectionRightY = "19px"

    configs.positionEylidL = "-19px"
    configs.positionEylidR = "-19px"

    configs.scleraColor = "white"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    configs.time = "D"

    configs.quotes = ["Que isso?", "Ãh?", "Cadê?", "Um rato?", ""];

    return configs;
}

export function setUpCurious(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav3.gif";

    setUpConfigs.eyeL.style.setProperty("background-color", "white");
    setUpConfigs.eyeR.style.setProperty("background-color", "white");
    setUpConfigs.eylidL.style.setProperty("top", "-9px");
    setUpConfigs.eylidR.style.setProperty("top", "-9px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(0deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(0deg)");

    setUpConfigs.pupE.style.setProperty("width", "26px");
    setUpConfigs.pupR.style.setProperty("width", "26px");

    setUpConfigs.glasses.style.display = 'none';

    // setUpConfigs.quotes.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}