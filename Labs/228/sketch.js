//  Global variables
var b1;
var b2;
var balls = [];
var toggle = true;
//var attrball;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  var loc = createVector(random(width), random(height));
  var rad =  25;
  var col =  color(255,0,0);
  var loc1 = createVector(100,100);
  var rad1 = 25;
  var col1 = fill(255,0,0);
  b1 = new Ball(loc,rad,col);
  loadBalls(500);
  b2 = new Ball(loc1,rad1,col1);
  loadBalls(500);
//  attrball = new Ball(width/2,height/2, -1;)
}

function draw() {
  if(toggle){
    background(20,20,20,40);

    b1.run();
    b2.run();



    for(var i = 0; i<balls.length; i++){
      balls[i].run();
    }
  //  attrBall.run();

  }

}

function loadBalls(numBalls){
  for(var i = 0; i<numBalls; i++){
    var loc = createVector(random(width),(height/2));
    var rad = 15;
    var col = color(255,0,0);
    balls.push(new Ball(loc,rad,col))
  }
}

function mousePressed(){
  toggle =!toggle;

}
