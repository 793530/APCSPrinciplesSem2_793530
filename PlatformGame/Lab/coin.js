

/*
**  Coin Constructor Function
**  eettlin
**  Sept. 14, 2018
*/

function Coin(x, y){
  this.loc = createVector(x, y);

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){

  }

   this.render = function(){
     fill(180,220,20);
     ellipse(this.loc.x, this.loc.y, 44, 44);
   }

}//  End of Ball constructor function
