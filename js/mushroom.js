export function getConfigsMushroom(configs) {

    configs.coefRot = 30;
    configs.coefReac = "1000ms";

    //Direction Toward but slooooooooowly
    configs.directionShdwX = "-1"
    configs.directionShdwY = "1"

    configs.negativeDirectionLeftX = "-8px"
    configs.positiveDirectionLeftX = "11px"
    configs.upDirectionLeftY = "-19px"
    configs.downDirectionLeftY = "0px"

    configs.negativeDirectionRightX = "-6px"
    configs.positiveDirectionRightX = "13px"
    configs.upDirectionRightY = "-19px"
    configs.downDirectionRightY = "0px"

    configs.positionEylidL = "-29px"
    configs.positionEylidR = "-29px"

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

    setUpConfigs.pupL.style.removeProperty("animation")
    setUpConfigs.pupR.style.removeProperty("animation")

    setUpConfigs.eylidL.style.setProperty("top", "-9px");
    setUpConfigs.eylidR.style.setProperty("top", "-9px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(0deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(0deg)");

    setUpConfigs.pupL.style.setProperty("width", "32px");
    setUpConfigs.pupR.style.setProperty("width", "32px");
    setUpConfigs.pupL.style.setProperty("height", "32px");
    setUpConfigs.pupR.style.setProperty("height", "32px");

    setUpConfigs.pupL.style.setProperty("border-radius", "00px")
    setUpConfigs.pupR.style.setProperty("border-radius", "00px")

    setUpConfigs.glasses.style.display = 'none';

}
