const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// MAIN VARIABLES
var myEngine, myWorld;

// OBJECT VARIABLES
var ground;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18, box19, box20;
var ball;
var rope;

function setup() {
  
  createCanvas(3000, 2000);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(1800, -100, 150, 150);
  box2 = new Box(1800, -250, 150, 150);
  box3 = new Box(1800, -450, 150, 150);
  box4 = new Box(1800, 100, 150, 150);
  box5 = new Box(1800, 250, 150, 150);
  box6 = new Box(1800, 450, 150, 150);

  box7 = new Box(2100, -100, 150, 150);
  box8 = new Box(2100, -250, 150, 150);
  box9 = new Box(2100, -450, 150, 150);
  box10 = new Box(2100, 100, 150, 150);
  box11 = new Box(2100, 250, 150, 150);
  box12 = new Box(2100, 450, 150, 150);

  box13 = new Box(2400, -100, 150, 150);
  box14 = new Box(2400, -250, 150, 150);
  box15 = new Box(2400, -450, 150, 150);
  box16 = new Box(2400, 100, 150, 150);
  box17 = new Box(2400, 250, 150, 150);
  box18 = new Box(2400, 450, 150, 150);
  box19 = new Box(2400, 650, 150, 150);
  box20 = new Box(2400, 850, 150, 150);

  ground = new Ground(1000, 1980, 4000, 20);

  ball = new Ball(1500, 1100, 100);

  rope = new Rope(ball.body, {x : 1500, y : 1000});

}

function draw() {
  
  background(0);

  Engine.update(myEngine);

  ground.display();

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
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ball.display();

  rope.display();

  drawSprites();

}

function mouseDragged() {

  Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});

}
