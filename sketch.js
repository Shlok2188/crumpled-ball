
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(50, 200);
	
	ground = new Ground(700, 395, 1400, 15);

	bin1 = new Bin(900, 370)
	

}	


function draw() {
  rectMode(CENTER);
  background("skyblue")
    Engine.update(engine)
  drawSprites();
  
	paper.display();
	
	ground.display();

	bin1.display();


} 

function keyPressed() {
	
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x:100, y:-100});

	}

}
  
