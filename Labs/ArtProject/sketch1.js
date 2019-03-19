var w = 20;
var cols, rows;
var snake;
var food;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(10);
  cols = floor(width/w);
  rows = floor(height/w);
  var x = floor(random(cols))*w;
  var y = floor(random(rows))*w;

  var loc = createVector(y, x);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
  var u = floor(random(cols))*w;
  var v = floor(random(rows))*w;
  food = new Food(createVector(u, v));

  food.pickLoc();
}

function draw() {
  background(2);
  if(snake.loc.dist(food.loc) === 0){
      food.pickLoc();
      snake.addSegment();

  }
  snake.run();
  food.run();

  }


function keyPressed(){


}//  +++++++++++++++++++++++++++++++++++++++  end of Sketch
