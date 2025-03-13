export function getConfigsGum(configs) {

    configs.coefRot = 35; //Smaller, higher rotation
    configs.coefReac = "180ms"; //Higher, slow reaction

    //Direction Toward
    configs.directionShdwX = "-1"
    configs.directionShdwY = "1"

    configs.negativeDirectionLeftX = "-18px"
    configs.positiveDirectionLeftX = "19px"
    configs.upDirectionLeftY = "1px"
    configs.downDirectionLeftY = "19px"

    configs.negativeDirectionRightX = "-18px"
    configs.positiveDirectionRightX = "20px"
    configs.upDirectionRightY = "1px"
    configs.downDirectionRightY = "19px"

    configs.positionEylidL = "-9px"
    configs.positionEylidR = "-9px"

    configs.scleraColor = "white"

    configs.propName = "glasses"
    configs.propTop = "45px"
    configs.propLeft = "110px"

    return configs;
}

export function setUpGum(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav6.gif";
    setUpConfigs.eyeL.style.setProperty("background-color", "white");
    setUpConfigs.eyeR.style.setProperty("background-color", "white");
    setUpConfigs.eylidL.style.setProperty("top", "-9px");
    setUpConfigs.eylidR.style.setProperty("top", "-9px");
    setUpConfigs.pupE.style.setProperty("width", "26px");
    setUpConfigs.pupR.style.setProperty("width", "26px");
    setUpConfigs.glasses.style.display = 'inline-block';
    setUpConfigs.glasses.style.setProperty("top", "45px");
    setUpConfigs.glasses.style.setProperty("transform", "rotate(0deg)")
}
