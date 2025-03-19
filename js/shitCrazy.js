export function getConfigsShitCrazy(configs) {

    configs.coefRot = 35; //Smaller, higher rotation
    configs.coefReac = "180ms"; //Higher, slow reaction

    //Direction Toward
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

    configs.positionEylidL = "-7px"
    configs.positionEylidR = "-7px"

    configs.scleraColor = "white"

    configs.propName = "null"
    configs.propTop = "0px"
    configs.propLeft = "0px"

    return configs;
}

export function setUpShitCrazy(setUpConfigs) {
    // fade(setUpConfigs.img)
    console.log(setUpConfigs.img)
    setUpConfigs.img.src = "/media/VacaAnimadav7.gif";
    console.log(setUpConfigs.img)
    unfade(setUpConfigs.img)
    
    setUpConfigs.eyeL.style.setProperty("background-color", "white");
    setUpConfigs.eyeR.style.setProperty("background-color", "white");
    setUpConfigs.eylidL.style.setProperty("top", "-7px");
    setUpConfigs.eylidR.style.setProperty("top", "-7px");

    setUpConfigs.eylidL.style.setProperty("transform", "rotate(10deg)");
    setUpConfigs.eylidR.style.setProperty("transform", "rotate(-10deg)");
    
    setUpConfigs.pupE.style.setProperty("width", "26px");
    setUpConfigs.pupR.style.setProperty("width", "26px");
    setUpConfigs.glasses.style.display = 'none';
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}