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

    collideObstacle(obs) {
        // Obs is an obstacle to check whether the car is colliding with it

        

    }

    draw(){

        push();

        fill(255,255,0);

        rectMode(CENTER);

        translate(this.pos.x, this.pos.y);
        rotate(this.direction.heading());

        rect(0, 0, this.width, this.height);

        pop();

    }




}
