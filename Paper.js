class Paper {
    constructor(x,y,r) {
        var options= {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.paper = Bodies.circle(x, y, r/2, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world,this.paper);
    }
    display() {
        var pos = this.paper.position;

        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        noStroke();
        fill("white");
        ellipse(0, 0, this.r,this.r);
        image(this.image, -36, -35, 69, 69);
        noFill();
        pop()
    }
}