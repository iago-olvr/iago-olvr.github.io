export function configsSnob(configs) {

    configs.coefRot = 40; //Smaller, higher rotation
    configs.coefReac = "180ms"; //Higher, slow reaction

    //Away From
    configs.directionShdwX = "1"
    configs.directionShdwY = "-1"

    configs.minorDirectionLeftX = "20px"
    configs.greaterDirectionLeftX = "-18px"
    configs.minorDirectionLeftY = "18px"
    configs.greaterDirectionLeftY = "1px"

    configs.minorDirectionRightX = "20px"
    configs.greaterDirectionRightX = "-18px"
    configs.minorDirectionRightY = "18px"
    configs.greaterDirectionRightY = "1px"

    configs.positionEylidL = "-9px"
    configs.positionEylidD = "-9px"

    configs.scleraColor = "white"

    return configs;
}