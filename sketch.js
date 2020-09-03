
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,100,20);
	
	b1 = new Bob(200,500,50);
	b2 = new Bob(300,500,50);
	b3 = new Bob(400,500,50);
	b4 = new Bob(500,500,50);
	b5 = new Bob(600,500,50);

	rope1 = new Rope(b1.body,roof.body,-bobDiameter*5,0);
	rope2 = new Rope(b2.body,roof.body,-bobDiameter*2.5,0);
	rope3 = new Rope(b3.body,roof.body,-bobDiameter*0,0);
	rope4 = new Rope(b4.body,roof.body,bobDiameter*2.5,0);
	rope5 = new Rope(b5.body,roof.body,bobDiameter*5,0);
    



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();



  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
  
	  Matter.Body.applyForce(b1.body,b1.body.position,{x:85,y:-85});
	
	}
  }
