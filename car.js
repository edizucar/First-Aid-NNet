class Car{
    constructor(){
        this.moving = false;
        this.movement_speed = 2;
        this.direction = p5.Vector.fromAngle(0); // Vector (ALL in RADIANS)
        this.pos = CreateVector(width/2, height/2);

    }

    turnLeft(){
        currDir = this.direction.heading() - 0.01;
        currDir = currDir % 2*Math.PI;
        this.direction = p5.Vector.fromAngle(currDir);
    }

    turnRight(){
        this.direction -= 1;
        this.direction = this.direction % 360; // Ensures that the bearing is always between 0 and 360
    }

    triggerMovement() {
        this.moving = !this.moving;
    }

    update() {
        this.pos
    }

    draw() {
        fill(255,255,0);
        rect(this.pos.x, this.pos.y, 20, 20);
    }




}