export function getConfigsMarijane(configs) {

    configs.coefRot = 35; 
    configs.coefReac = "1800ms"; 

    //Direction Toward but slooooooooowly
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

    configs.scleraColor = "pink"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    return configs;
}

export function setUpMarijane(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav4.gif";

    setUpConfigs.eyeL.style.setProperty("background-color", "pink");
    setUpConfigs.eyeR.style.setProperty("background-color", "pink");
    setUpConfigs.eylidL.style.setProperty("top", "-9px");
    setUpConfigs.eylidR.style.setProperty("top", "-9px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(0deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(0deg)");

    setUpConfigs.pupE.style.setProperty("width", "26px");
    setUpConfigs.pupR.style.setProperty("width", "26px");

    setUpConfigs.glasses.style.display = 'none';
}
