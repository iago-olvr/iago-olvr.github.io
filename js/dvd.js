export function getConfigsDVD(configs) {

    configs.coefRot = 0;
    configs.coefReac = "0ms";

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

    configs.scleraColor = "transparent"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    configs.time = "D"

    configs.quotes = [""];

    return configs;
}

export function setUpDVD(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav9.gif";

    setUpConfigs.eyeL.style.setProperty("background-color", "transparent");
    setUpConfigs.eyeR.style.setProperty("background-color", "transparent");
    setUpConfigs.eylidL.style.setProperty("top", "-49px");
    setUpConfigs.eylidR.style.setProperty("top", "-49px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(0deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(0deg)");

    setUpConfigs.pupL.style.setProperty("width", "0px");
    setUpConfigs.pupR.style.setProperty("width", "0px");
    setUpConfigs.pupL.style.setProperty("height", "13px");
    setUpConfigs.pupR.style.setProperty("height", "13px");

    setUpConfigs.glasses.style.display = 'none';
}