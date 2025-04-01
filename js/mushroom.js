export function getConfigsMushroom(configs) {

    configs.coefRot = 30;
    configs.coefReac = "1800ms";

    //Direction Toward but slooooooooowly
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

    configs.scleraColor = "transparent"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    configs.time = "D"

    configs.quotes = ["Wow", "Que brisa"];

    return configs;
}

export function setUpMushroom(setUpConfigs) {
    setUpConfigs.img.src = "/media/VacaAnimadav10.png";

    setUpConfigs.eyeL.style.setProperty("background-color", "transparent");
    setUpConfigs.eyeR.style.setProperty("background-color", "transparent");
    
    setUpConfigs.eyeL.style.removeProperty("animation")
    setUpConfigs.eyeR.style.removeProperty("animation")

    setUpConfigs.eylidL.style.setProperty("top", "-9px");
    setUpConfigs.eylidR.style.setProperty("top", "-9px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(0deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(0deg)");

    setUpConfigs.pupE.style.setProperty("width", "16px");
    setUpConfigs.pupR.style.setProperty("width", "16px");

    setUpConfigs.glasses.style.display = 'none';

    // eyeR.style.setProperty("animation", "mudarCor 250ms infinite")
}
