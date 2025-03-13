export function getConfigsCurious(configs) {

    configs.coefRot = 35; //Smaller, higher rotation
    configs.coefReac = "180ms"; //Higher, slow reaction

    //Toward
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

    configs.scleraColor = "white"

    return configs;
}