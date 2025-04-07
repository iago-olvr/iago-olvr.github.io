export function getConfigsRivotril(configs) {

    configs.coefRot = 30;
    configs.coefReac = "50ms";

    //Direction Toward VERY FAST
    configs.directionShdwX = "-1"
    configs.directionShdwY = "1"

    configs.negativeDirectionLeftX = "-18px"
    configs.positiveDirectionLeftX = "19px"
    configs.upDirectionLeftY = "-24px"
    configs.downDirectionLeftY = "19px"

    configs.negativeDirectionRightX = "-18px"
    configs.positiveDirectionRightX = "20px"
    configs.upDirectionRightY = "-24px"
    configs.downDirectionRightY = "19px"

    configs.positionEylidL = "-34px"
    configs.positionEylidR = "-34px"

    configs.scleraColor = "white"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    configs.time = "D"

    configs.quotes = ["Respira, respira...", "O que você vai fazer???", "Tá tudo bem né?"];

    return configs;
}

export function setUpRivotril(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav5.gif";

    setUpConfigs.eyeL.style.setProperty("background-color", "white");
    setUpConfigs.eyeR.style.setProperty("background-color", "white");
    setUpConfigs.eylidL.style.setProperty("top", "-34px");
    setUpConfigs.eylidR.style.setProperty("top", "-34px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(0deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(0deg)");

    setUpConfigs.pupL.style.setProperty("width", "16px");
    setUpConfigs.pupR.style.setProperty("width", "16px");
    setUpConfigs.pupL.style.setProperty("height", "13px");
    setUpConfigs.pupR.style.setProperty("height", "13px");

    setUpConfigs.glasses.style.display = 'none';
    setUpConfigs.discoBall.style.display = 'none';
}
