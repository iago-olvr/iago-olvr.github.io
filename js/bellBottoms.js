export function getConfigsBellBottoms(configs) {

    configs.coefRot = 30;
    configs.coefReac = "180ms";

    //Direction Toward
    configs.directionShdwX = "-1"
    configs.directionShdwY = "1"

    configs.negativeDirectionLeftX = "-18px"
    configs.positiveDirectionLeftX = "19px"
    configs.upDirectionLeftY = "-1px"
    configs.downDirectionLeftY = "19px"

    configs.negativeDirectionRightX = "-18px"
    configs.positiveDirectionRightX = "20px"
    configs.upDirectionRightY = "-1px"
    configs.downDirectionRightY = "19px"

    configs.positionEylidL = "-9px"
    configs.positionEylidR = "-9px"

    configs.scleraColor = "white"

    configs.propName = "discoBall"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    configs.time = "D"

    configs.quotes = ["Dança bebê, dança.", "Se joga"];

    return configs;
}

export function setUpBellBottoms(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav12.gif";

    setUpConfigs.eyeL.style.setProperty("background-color", "white");
    setUpConfigs.eyeR.style.setProperty("background-color", "white");
    setUpConfigs.eylidL.style.setProperty("top", "-9px");
    setUpConfigs.eylidR.style.setProperty("top", "-9px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(0deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(0deg)");

    setUpConfigs.pupL.style.setProperty("width", "26px");
    setUpConfigs.pupR.style.setProperty("width", "26px");
    setUpConfigs.pupL.style.setProperty("height", "13px");
    setUpConfigs.pupR.style.setProperty("height", "13px");

    setUpConfigs.glasses.style.display = 'none';    
    setUpConfigs.discoBall.style.display = 'none';
}