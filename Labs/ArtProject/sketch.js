//var w = 20;
//var cols, rows;
//var food;

let t = 0; // time variable

let x = [],
y = [],
segNum = 20,
segLength = 18;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

//function preload() {
//  font = loadFont('assets/SourceSansPro-Regular.otf');
//}

function setup() {
  createCanvas(800, 800);
  strokeWeight(9);
  stroke(255, 100);
  //  cols = floor(width/w);
  //rows = floor(height/w);
  //  var u = floor(random(cols))*w;
  //var v = floor(random(rows))*w;
  //food = new Food(createVector(u, v));
}

function draw() {
  background(0,0); // translucent background (creates trails)
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }

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

      ellipse(myX, myY, 10); // draw particle
    }
  }

  //  t = t + 0.01; // update time

  //food.run();

}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
