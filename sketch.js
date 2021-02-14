
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

constructor(body1,body2,offsetX,offsetY)
{	
	this.offsetX = offsetX;
	this.offsetY = this.offsetY;
	
	var options = {
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.offsetX, y:this.offsetY}

	}
	//console.log(options);
this.rope = Constraint.create(options)
World.add(world,this.rope)
}

Engine.run(engine);

rope1 = new rope(bobObject1.body,roofObject.body, -bobDiameter*2, 0);


  
}


function draw() {
  rectMode(CENTER);
  background(0);

display()
{
	var pointA = this.rope.bodyA.position;
	var pointB = this.rope.bodyB.position;

	strokeWeight(2);

	var Anchor1X = pointA.x
	var Anchor2Y = pointB.y

	var Anchor2X = pointB.x+this.offsetX
	var Anchor2Y = pointB.y+this.offsetY

	line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)

}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject2,bobObject3,bobObject4,bobObject5.body.position,{x:130,y:-145});

  
	}
}

  drawSprites();
 
}