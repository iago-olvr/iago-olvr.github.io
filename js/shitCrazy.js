export function getConfigsShitCrazy(configs) {

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

    configs.positionEylidL = "-7px"
    configs.positionEylidR = "-7px"

    configs.scleraColor = "white"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    configs.time = "D"

    configs.quotes = ["SAI DA MINHA FRENTE!", "NÃO ME TESTA!", "VOCÊ NÃO QUER VER ONDE ISSO VAI DAR!", "TO AVISANDO!"];

    return configs;
}

export function setUpShitCrazy(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav7.gif";

    setUpConfigs.eyeL.style.setProperty("background-color", "white");
    setUpConfigs.eyeR.style.setProperty("background-color", "white");
    setUpConfigs.eylidL.style.setProperty("top", "-7px");
    setUpConfigs.eylidR.style.setProperty("top", "-7px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(10deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(-10deg)");

    setUpConfigs.pupL.style.setProperty("width", "26px");
    setUpConfigs.pupR.style.setProperty("width", "26px");
    setUpConfigs.pupL.style.setProperty("height", "13px");
    setUpConfigs.pupR.style.setProperty("height", "13px");

    setUpConfigs.glasses.style.display = 'none';
    setUpConfigs.discoBall.style.display = 'none';
}