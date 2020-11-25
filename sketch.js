
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// const Render = Matter.Render;

var ground;
var paperBall;
var part1, part2, part3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 670, 1000, 10);
	paperBall = new Paper(100,600,48);
	part1 = new Base(600, 657.5);
	part2 = new Boundries(528.5,583);
	part3 = new Boundries(672,583);
//	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
//	Render.run(render);
	Engine.run(engine);
  
}


function draw() {
  background("cyan");
  Engine.update(engine);

  ground.display();
  paperBall.display(); 
  part1.display();
  part2.display();
  part3.display(); 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	    Matter.Body.applyForce(paperBall.paper, paperBall.paper.position, {x: 80, y: -100});
    }
}