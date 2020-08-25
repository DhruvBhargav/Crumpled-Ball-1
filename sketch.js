var ground ;
var log1,log2,log3 ;
var ball ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255) ;

	//Create the Bodies Here

	log1 = new Log(600,650,200,20,PI/2);
	log2 = new Log(500,600,20,100,PI);
	log3 = new Log(700,600,20,100,PI);
	ball = new Ball(100,550,20);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  log1.display();
   log2.display();
   log3.display();
   ball.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-50})
	}
}



