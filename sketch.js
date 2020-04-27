// You could have multiple flags like: start, launch to indicate the state of the game.
//var START;
//var LAUNCH;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var engine, world;

var canvas;
//var ball1, ball2, ball3, ball4, ball5, ball6, ball7;
var ground;
var tankerbody1, tankerbody2, cannonmouth;


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
  var canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  tankerbody1 = new Tanker(110, 500, 145, 35);
  tankerbody2 = new Tanker(110, 533, 145, 35);

  
  

  cannonmouth = new Cannon(110, 480, 200, 20, PI/2);
  //rotate(45);
}

function draw() {
// Remember to update the Matter Engine and set the background.
  background(0);
  Engine.update(engine);
  

  fill ("white");
  circle(76, 570, 40);

  fill ("white");
  circle(150, 570, 40);

  //fill("black");
  rect(110, 457, 145, 55);  

  //circle.rotate(10);
  
  ground.display();
  tankerbody1.display();
  tankerbody2.display();
  cannonmouth.display();

  
  

  

  

  //drawSprites();
}


function keyReleased() {
    // Call the shoot method for the cannon.

}