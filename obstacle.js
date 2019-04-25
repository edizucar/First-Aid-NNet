class Obstacle{
    constructor(x, y, width, height, rotation){
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.rotation=rotation;
    }

    draw(){
        
        push();

        fill(255,105,180);

        translate(this.x, this.y);
        rotate(radians(this.rotation));
        rect(0, 0, this.width, this.height);
        
        pop();

    }
}