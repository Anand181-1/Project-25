class Boundries {
    constructor(x,y) {
        var options = {
           isStatic:true 
        }
        this.box = Bodies.rectangle(x, y, 15, 85, options);
        this.width = 15;
        this.height = 140;

        World.add(world, this.box);
    }
    display() {
        var pos = this.box.position;
        noStroke();
        fill("green")
        rect(pos.x,pos.y,this.width,this.height); 
        noFill();
    }
}