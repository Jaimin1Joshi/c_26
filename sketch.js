const Engnine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball, ground,box1,box2;

function setup() {
  createCanvas(500,500);
engine=Engnine.create();
world=engine.world;
/*var ground_option={
  isStatic:true
}
ground=Bodies.rectangle(200,485,500,20,ground_option);
World.add(world,ground);

var ball_option={
 restitution:1
}

ball=Bodies.rectangle(250,250,20,20,ball_option);
World.add(world,ball);*/
 box1=new Box(250,250,40,20);
box2=new Box(280,230,40,20);
ground=new Ground(250,485,500,20);
}

function draw() {
  background(205,295,258); 
  Engnine.update(engine);
//rectMode(CENTER);
//rect(ground.position.x,ground.position.y,500,20);
//circle(ball.position.x,ball.position.y,20);


box1.display();
box2.display();
 ground.display();
}



