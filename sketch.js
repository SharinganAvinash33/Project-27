const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1370, 600);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(680,100,300,20);
	bob1=new bob(580,300);
	rope1=new Rope(bob1.body,roof.body,-100,0);
	bob2=new bob(630,300);
	rope2=new Rope(bob2.body,roof.body,-50,0);
	bob3=new bob(680,300);
	rope3=new Rope(bob3.body,roof.body,0,0);
	bob4=new bob(730,300);
	rope4=new Rope(bob4.body,roof.body,50,0);
	bob5=new bob(780,300);
	rope5=new Rope(bob5.body,roof.body,100,0);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("blue");
  
  roof.display();
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();

  start();
}

function start(){

if(keyDown("UP_ARROW")){
	Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-30});
}
}

