let CAR;
let MY_OBSTACLE;
let keyPressDelay = 10;
let NN;

function setup() {
    createCanvas(800,800);
    CAR = new Car();
    MY_OBSTACLE = new Obstacle(200,200,50,10,0);
    NN = new NeuralNetwork(2,[3],1);
}
//Dan was here :-)
//Ahmet was here too  
function draw() {
    // Reseting background
    background(100);

    //keyCodes found at : http://keycode.info/
    // Key Press Check ---- No Delay
    
    if (keyIsDown(37)) { // Detects for left arrow
        CAR.turnLeft();
    }

    if (keyIsDown(39)) { // Detects for right arrow
        CAR.turnRight();
    }
    
    if (keyIsDown(38)) { // Detects for up arrow
        CAR.forward();
    }

    if (keyIsDown(40)) { // Detects for down arrow
        CAR.backward();
    }

    keyPressDelay++;
    

    CAR.draw();
    MY_OBSTACLE.draw();

    
}