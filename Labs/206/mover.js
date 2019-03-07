

function mover(id){

  this.acc = createVector(0,.1);
  this.loc = loc;
  this.vel = createVector(random(-3,3), random(-3,3));
  this.col = col;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }


  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.update = function(){

  this.render = function(){

    fill(this.col);
    elipse()


}
