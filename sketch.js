
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240,795,480,10);
	for(var k = 0; k <= width; k = k + 80){
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	}
	for(var j = 40; j <= width; j = j + 50){
		plinkos.push(new Plinko(j,75,5));
	}
	for(var j = 15; j <= width - 10; j = j + 50){
		plinkos.push(new Plinko(j,175,5));
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  ground.display();
  for(var k = 0; k < divisions.length; k++){
	  divisions[k].display();
  }
  for(var j = 40; j <= width; j = j + 50){
      plinkos[j].display();
  }
  for(var j = 15; j <= width -10; j = j + 50){
	  plinkos[j].display();
  }

  drawSprites();
 
}



