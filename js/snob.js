export function getConfigsSnob(configs) {

    configs.coefRot = 30;
    configs.coefReac = "180ms";

    //Direction Away From
    configs.directionShdwX = "1"
    configs.directionShdwY = "-1"

    configs.negativeDirectionLeftX = "20px"
    configs.positiveDirectionLeftX = "-18px"
    configs.upDirectionLeftY = "18px"
    configs.downDirectionLeftY = "1px"

    configs.negativeDirectionRightX = "20px"
    configs.positiveDirectionRightX = "-18px"
    configs.upDirectionRightY = "18px"
    configs.downDirectionRightY = "1px"

    configs.positionEylidL = "-9px"
    configs.positionEylidR = "-9px"

    configs.scleraColor = "white"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    configs.time = "D"

    configs.quotes = ["Aff!", "Sério?", "Desnecessário.", "Não escosta!", "Sério, não me encosta."];

    return configs;
}

export function setUpSnob(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav3.gif";

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