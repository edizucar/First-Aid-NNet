// Testing that new branch is open
// testing pt2

class Car{
    constructor(){
        this.movement_speed = 2;
        this.direction = p5.Vector.fromAngle(Math.PI); // Vector (ALL in RADIANS) ---> magnitude of 1

        this.width = 20;
        this.height = 20;

        // In p5 js 0 degrees means going to the right...
        // Therefore PI degrees is to the left

        this.pos = createVector(width/2, height/2);
    }

    turnLeft(){

        this.direction.rotate(radians(-3));
    }

    turnRight(){

        this.direction.rotate(radians(3));
    }

    forward(){

        this.pos.add(this.direction);
    }

    backward(){

        this.pos.sub(this.direction);
    }

    draw(){

        push();

        fill(255,255,0);

        translate(this.pos.x + this.width/2, this.pos.y + this.height/2);
        rotate(this.direction.heading());

        rect(-this.width/2, -this.height/2, this.width, this.height);

        pop();

    }




}
