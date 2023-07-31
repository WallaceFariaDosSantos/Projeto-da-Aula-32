const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball1, ball2, ball3, ball4, ball5;
var blower;
var blowerMouth;
var button;
var backgroundImg;

function preload(){
  backgroundImg = loadImage('./assets/background.png');
}


function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball1 = new Ball(width / 2 + 80, height / 2 - 80, 20, 20);
  ball2 = new Ball(width / 2 + 80, height / 2 - 80, 30, 30);
  ball3 = new Ball(width / 2 + 80, height / 2 - 80, 40, 40);
  ball4 = new Ball(width / 2 + 80, height / 2 - 80, 50, 50);
  ball5 = new Ball(width / 2 + 80, height / 2 - 80, 60, 60);

  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);

  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  
  button = createButton("Clique para Assoprar");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  blower.show();

  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
  ball5.show();

  blowerMouth.show();
}

function blow() {
  Matter.Body.applyForce(ball1.body, {x:0, y:0}, {x:0, y:0.05});
  Matter.Body.applyForce(ball2.body, {x:0, y:0}, {x:0, y:0.05});
  Matter.Body.applyForce(ball3.body, {x:0, y:0}, {x:0, y:0.05});
  Matter.Body.applyForce(ball4.body, {x:0, y:0}, {x:0, y:0.05});
  Matter.Body.applyForce(ball5.body, {x:0, y:0}, {x:0, y:0.05});
}

