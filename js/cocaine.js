export function configsCocaine(configs) {

    configs.coefRot = 35; //Smaller, higher rotation
    configs.coefReac = "50ms"; //Higher, slow reaction

    //Toward VERY FAST
    configs.directionShdwX = "-1"
    configs.directionShdwY = "1"

    configs.negativeDirectionLeftX = "-18px"
    configs.positiveDirectionLeftX = "19px"
    configs.upDirectionLeftY = "-24px"
    configs.downDirectionLeftY = "19px"

    configs.negativeDirectionRightX = "-18px"
    configs.positiveDirectionRightX = "20px"
    configs.upDirectionRightY = "-24px"
    configs.downDirectionRightY = "19px"

    configs.positionEylidL = "-34px"
    configs.positionEylidR = "-34px"

    configs.scleraColor = "white"

    return configs;
}