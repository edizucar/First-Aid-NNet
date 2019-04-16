let CAR;


function setup() {
    createCanvas(800,200)
    CAR = new Car();
    CAR.triggerMovement();

}


function draw() {

    CAR.update();
    CAR.draw();



}