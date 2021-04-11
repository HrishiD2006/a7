const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25;
var poly;
var slingshot;













var r=250;
var r2=475;
var r3=600-325





function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(400/7+r,r2,30,40);
  box2 = new Box(400/7+r+30,r2,30,40);
  box3 = new Box(400/7+r+30+30,r2,30,40);
  box4 = new Box(400/7+r+30+30+30,r2,30,40);
  box5 = new Box(400/7+r+30+30+30+30,r2,30,40);
  box6 = new Box(400/7+r+30+30+30+30+30,r2,30,40);
  box7 = new Box(400/7+r+30+30+30+30+30+30,r2,30,40);

  box8 = new Box(400/7+r+30,r2-40,30,40);
  box9 = new Box(400/7+r+30+30,r2-40,30,40);
  box10 = new Box(400/7+r+30+30+30,r2-40,30,40);
  box11 = new Box(400/7+r+30+30+30+30,r2-40,30,40);
  box12 = new Box(400/7+r+30+30+30+30+30,r2-40,30,40);

  box13 = new Box(400/7+r+30+30,r2-40-40,30,40);
  box14 = new Box(400/7+r+30+30+30,r2-40-40,30,40);
  box15 = new Box(400/7+r+30+30+30+30,r2-40-40,30,40);

  box16 = new Box(400/7+r+30+30+30,r2-40-40-40,30,40);



  box17 = new Box(800-30-30,r3,30,40);
  box18 = new Box(800-30,r3,30,40);
  box19 = new Box(800,r3,30,40);
  box20 = new Box(800+30,r3,30,40);
  box21 = new Box(800+30+30,r3,30,40);

  box22 = new Box(800-30,r3-40,30,40);
  box23 = new Box(800,r3-40,30,40);
  box24 = new Box(800+30,r3-40,30,40);

  
  box25 = new Box(800,r3-40-40,30,40);

  poly=new Bird(200,300,50,50);

  slingshot= new SlingShot(poly.body,{x:200 ,y:300});


  ground = new Ground(width / 2, height - 30, width, 20);
  stand1 = new Ground(400, 500, 400, 10);
  stand2 = new Ground(800, 300, 400, 10);
  
}

function draw() {
  background(100, 100, 100);
  Engine.update(engine);
  poly.display();
  ground.display();
  stand2.display();
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  slingshot.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box23.display();
  box24.display();
  box22.display();
  box25.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}