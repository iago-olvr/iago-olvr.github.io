export function configsCurious(configs) {

    configs.coefRot = 40; //Smaller, higher rotation
    configs.coefReac = "180ms"; //Higher, slow reaction

    //Toward
    configs.directionShdwX = "-1"
    configs.directionShdwY = "1"

    configs.minorDirectionLeftX = "-18px"
    configs.greaterDirectionLeftX = "19px"
    configs.minorDirectionLeftY = "-9px"
    configs.greaterDirectionLeftY = "19px"

    configs.minorDirectionRightX = "-18px"
    configs.greaterDirectionRightX = "20px"
    configs.minorDirectionRightY = "-9px"
    configs.greaterDirectionRightY = "19px"

    configs.positionEylidL = "-19px"
    configs.positionEylidD = "-19px"

    configs.scleraColor = "white"

    return configs;
}