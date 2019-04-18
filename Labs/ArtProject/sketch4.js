//kalpa yakupitiyage
var Balls = [];
var redBall;
var toggle;

let x = [],
y = [],
segNum = 20,
segLength = 18;

let t = 0; // time variable

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  noStroke();
  fill(200, 40, 40);
  loadBalls(800);
}


function draw() {

  if(!toggle){
    redBall.run();

    for(var i = 0; i < Balls.length; i++){
      Balls[i].run();


    }
    background(10, 10); // translucent background (creates trails)

    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + 30) {
      for (let y = 0; y <= height; y = y + 30) {
        // starting point of each circle depends on mouse position
        const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
        const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / width) + yAngle * (y / height);

        // each particle moves in a circle
        const myX = x + 20 * cos(2 * PI * t + angle);
        const myY = y + 20 * sin(2 * PI * t + angle);

        ellipse(myX, myY, 2); // draw particle

      }
    }
  }
  t = t + 0.01; // update time
}

function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    var location = createVector(random(width), random(height));
    var velocity = createVector(random(1.5,2), random(1.5,2));
    var r = random(40,80);
    var col = color(255, 255, 255);
    Balls.push(new Ball(location, velocity, r, col));
  }

  var location = createVector(width/2, height/2);
  var velocity = createVector(0,0);
  var r = 0;
  var col = color(255, 0, 0);
  redBall = new Ball(location, velocity, r, col);
}

function mousePressed(){
  toggle = !toggle;
}
