
/*git test
**  Ball Constructor Function
**  Kalpa Yakupitiyage
**  set 13, 2018
*/

function Ball(loc, rad, col){
  // Instance variables
  this.acc = createVector(0,.1);
  this.loc = loc;
  this.vel = createVector(random(-3,3), random(-3,3));
  this.rad = rad;
  this.col = col;



  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.update = function(){

    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  this.render = function(){

    var centerVec = createVector(width/2, height/2);
    var dist = this.loc.dist(centerVec);
    var clrR = map(dist, 0, 200, 70, 130)
    var clrG = map(dist, 0, 100, 50, 200)
    var clrB = map(dist, 0, 400, 30, 70)
    stroke(clrR, clrG, clrB, 150);
    strokeWeight(.5);
    line(this.loc.x, this.loc.y, b1.loc.x , b1.loc.y);
    line(this.loc.x, this.loc.y, b2.loc.x , b2.loc.y);




  }


}
