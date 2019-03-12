
/*
**  Kalpa Yakupitiyage
*/
function Orbiter(parenLoc, id){

  this.loc = createVector(parentLoc.x, parentLoc.y);
  this.angle = random(TWO_P1);
  this.dtp = 150;
  this.clr = color(random(225),random(225),random(225),random(225));

  this.update = function(){
    this.loc.x = parentLoc.x + cos(this.angle)*this.dtp;
    this.loc.y = parentLoc.y + sin(this.angle)*this.dtp;
    this.angle += 0.01;

  }

  this.render = function(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y ,5 ,5)

  }
}
