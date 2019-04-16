let CAR;
let keyPressDelay = 10; 

function setup() {
    createCanvas(800,800);
    CAR = new Car();
    CAR.triggerMovement();

}


function draw() {
    // Reseting background
    background(100);


    CAR.update();
    CAR.draw();


    //keyCodes found at : http://keycode.info/
    // Key Press Check ---- No Delay
    if (keyIsPressed) {

        if (keyCode == 37) {   // Detects for left arrow
            CAR.turnLeft();

        } 

        if (keyCode == 39) {   // Detects for right arrow
            CAR.turnRight();

        }

    }




    // KEY PRESS CHECK ---- WITH DELAY
    if (keyIsPressed && keyPressDelay > 10) {
        

        if (keyCode == 32) {    // Detects for Space pressed

            CAR.triggerMovement();
        }


        keyIsPressed  = 0;
    }








    keyPressDelay++;
}