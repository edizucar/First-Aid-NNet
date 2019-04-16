class Car{
    constructor(){
        this.moving = false;
        this.movement_speed = 2;
        this.direction = p5.Vector.fromAngle(0); // Vector (ALL in RADIANS) ---> magnitude of 1
        this.pos = createVector(width/2, height/2);

    }

    turnLeft(){
        let currDir = this.direction.heading() - 0.01;
        currDir = currDir % 2*Math.PI;
        this.direction = p5.Vector.fromAngle(currDir);
    }

    turnRight(){
        let currDir = this.direction.heading() + 0.01;
        currDir = currDir % 2*Math.PI;
        this.direction = p5.Vector.fromAngle(currDir);
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