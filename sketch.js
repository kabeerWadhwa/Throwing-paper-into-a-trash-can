
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

class Paper{
	options()
}

var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

var dustbinSide1=createSprite(700,645,100,20);
var dustbinSide2=createSprite(750,645,100,20);
var dustbinSide3=createSprite(725,645,20,100);

class ground{
	groundOptions()
}

var ground=createSprite(400,650,20,100);
var groundOptions = {
		isStatic:true,
}
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
}