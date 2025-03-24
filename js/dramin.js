export function getConfigsDramin(configs) {

    configs.coefRot = 0;
    configs.coefReac = "180ms";

    //Direction Toward
    configs.directionShdwX = "0"
    configs.directionShdwY = "0"

    configs.negativeDirectionLeftX = "-18px"
    configs.positiveDirectionLeftX = "19px"
    configs.upDirectionLeftY = "-9px"
    configs.downDirectionLeftY = "19px"

    configs.negativeDirectionRightX = "-18px"
    configs.positiveDirectionRightX = "20px"
    configs.upDirectionRightY = "-9px"
    configs.downDirectionRightY = "19px"

    configs.positionEylidL = "109px"
    configs.positionEylidR = "108px"

    configs.scleraColor = "transparent"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    configs.time = "N"

    return configs;
}

export function setUpDramin(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav8.gif";

    setUpConfigs.eyeL.style.setProperty("background-color", "transparent");
    setUpConfigs.eyeR.style.setProperty("background-color", "transparent");
    setUpConfigs.eylidL.style.setProperty("top", "109px");
    setUpConfigs.eylidR.style.setProperty("top", "109px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(0deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(0deg)");

    setUpConfigs.pupE.style.setProperty("width", "0px");
    setUpConfigs.pupR.style.setProperty("width", "0px");

    setUpConfigs.glasses.style.display = 'none';
}