
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1,line2,line3,paper1,ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
//Create the Bodies Here.
	Engine.run(engine);
  
paper1=new Paper(600,200,20,20);
paper1.shapeColor(255);
line1 = new Dustbin (730,650,20,100);
line1.shapeColor('green');
line2 = new Dustbin(760,650,40,20);
line2.shapeColor('green');
line3 = new Dustbin(780,650,20,100);
line3.shapeColor('green');
ground = new Ground (400,680,800,20);
ground.shapeColor('red');
}


function draw() {
  rectMode(CENTER);
  background(164);
  Engine.update(engine);
  drawSprites();
 
paper1.display();
line1.display();
line2.display();
line3.display();
ground.display();

}