
/*git test
**  Ball Constructor Function
**  Kalpa Yakupitiyage
**  set 13, 2018
*/

function Ball(loc, rad, col){

   this.acc = createVector(0,.1);
   this.loc = loc;
   this.vel = createVector(random(-3,3), random(-3,3));
   this.rad = rad;
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
     this.vel.add(this.acc);
     this.loc.add(this.vel);
   }

   this.render = function(){
     stroke(255,150);
     strokeWeight(.5);
     line(this.loc.x, this.loc.y, b1.loc.x , b1.loc.y);
   }


}
