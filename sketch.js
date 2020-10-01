const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var ground,stand

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;
  // first layer
  block1 = new Block(270,275,30,40)
  block2 = new Block(300,275,30,40)
  block3 = new Block(330,275,30,40)
  block4 = new Block(360,275,30,40)
  block5 = new Block(390,275,30,40)
  block6 = new Block(420,275,30,40)
  block7 = new Block(450,275,30,40)
  //second layer
  block8 = new Block(330,235,30,40)
  block9 = new Block(360,235,30,40)
  block10 = new Block(390,235,30,40)
  block11 = new Block(420,235,30,40)
  block12 = new Block(450,235,30,40)
  // third layer
  block13 = new Block(360,195,30,40)
  block14 = new Block(390,195,30,40)
  block15 = new Block(420,195,30,40)
  // top
  block16 = new Block(390,155,30,40)

  // ground
  ground = new Ground(400,380,800,40)
  // stand
  stand = new Ground(360,285,180,20)
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  drawSprites();
}