
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,100,400,30);

	bob1 = new Bob(320,300,50);
	bob2 = new Bob(340,300,50);
	bob3 = new Bob(360,300,50);
	bob4 = new Bob(380,300,50);

    rope1 = new Rope (roof.body,bob1.body,0,0);
    
	//Engine.run(engine);
  
}


function draw() {
 Engine.update(engine);
 
  rectMode(CENTER);
  background(255);
  
  roof.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  drawSprites();
 
}



