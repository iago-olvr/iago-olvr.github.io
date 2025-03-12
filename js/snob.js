export function configsSnob(configs) {

    configs.coefRot = 35; //Smaller, higher rotation
    configs.coefReac = "180ms"; //Higher, slow reaction

    //Away From
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

    return configs;
}