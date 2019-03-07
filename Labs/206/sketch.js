var mover = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  var loc = createVector(random(width), random(height));
  var rad = 25;
  var col = color(255,0,0);

}

function draw() {
  background(20,20,20,40);
  mover[i].run();
  for(var i = 0; i<mover.length; i++){
     mover[i].run();
  }
}

function mover(id){

}
