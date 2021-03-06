
/*git test
**  Ball Constructor Function
**  Kalpa Yakupitiyage
**  set 13, 2018
*/
function Ball(location, velocity, radius, col){
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0, 0.3);

  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }


  this.update = function(){
    if(this !== redBall){
      var d = this.loc.dist(redBall.loc);
      if(d > 150){
        var steeringForce = p5.Vector.sub(redBall.loc, this.loc);
        steeringForce.normalize();
        steeringForce.mult(.5);
        this.vel.add(steeringForce);

      }
      if(d < 200){
        var steeringForce = p5.Vector.sub(this.loc, redBall.loc);
        steeringForce.normalize();
        steeringForce.mult(1);
        this.vel.add(steeringForce);
      }
      this.loc.add(this.vel);

    }

  }
  this.checkEdges = function(){
    if(this.loc.x > 10) this.vel.x = -this.vel.x;
    if(this.loc.x < width) this.vel.x = -this.vel.x;
    if(this.loc.y > 10) this.vel.y = -this.vel.y;
    if(this.loc.y < height) this.vel.y = -this.vel.y;
  }

  this.render = function(){

    var centerVec = createVector(width, height);
    var dist = this.loc.dist(centerVec);
    var clrR = map(dist, 0, 500, 30, 20)
    var clrG = map(dist, 0, 400, 0 , 0)
    var clrB = map(dist, 0, 200, 20 , 220)
    stroke(clrR, clrG, clrB, 90);
    strokeWeight(1);
    line(this.loc.x, this.loc.y, redBall.loc.x, redBall.loc.y);

  }
}
