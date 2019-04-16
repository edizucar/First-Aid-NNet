let CAR;


function setup() {
    createCanvas(800,200)
    CAR = new Car();
    CAR.triggerMovement();

}


function draw() {
    // Reseting background
    background(100);


    CAR.update();
    CAR.draw();



}