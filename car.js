class Car{
    constructor(){
        this.moving = false;
        this.movement_speed = 2;
        this.direction = p5.Vector.fromAngle(Math.PI); // Vector (ALL in RADIANS) ---> magnitude of 1

        // In p5 js 0 degrees means going to the right...
        // Therefore PI degrees is to the left

        this.pos = createVector(width/2, height/2);

    }

    turnLeft(){

        this.direction.rotate(radians(-10));
    }

    turnRight(){

        this.direction.rotate(radians(10));
    }

    triggerMovement() {
        this.moving = !this.moving;
    }

    update() {
        if (this.moving){
            this.pos.add(this.direction);
        }
    }

    draw() {
        fill(255,255,0);
        rect(this.pos.x, this.pos.y, 20, 20);
    }




}