export function configsMarijane(configs) {

    configs.coefRot = 40; //Smaller, higher rotation
    configs.coefReac = "1800ms"; //Higher, slow reaction

    //Toward
    configs.directionShdwX = "-1"
    configs.directionShdwY = "1"

    configs.minorDirectionLeftX = "-18px"
    configs.greaterDirectionLeftX = "19px"
    configs.minorDirectionLeftY = "1px"
    configs.greaterDirectionLeftY = "19px"

    configs.minorDirectionRightX = "-18px"
    configs.greaterDirectionRightX = "20px"
    configs.minorDirectionRightY = "1px"
    configs.greaterDirectionRightY = "19px"

    configs.positionEylidL = "-9px"
    configs.positionEylidD = "-9px"

    configs.scleraColor = "pink"

    return configs;
}