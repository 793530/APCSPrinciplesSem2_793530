

/*
**  Coin Constructor Function
**  eettlin
**  Sept. 14, 2018
*/

function Coin(x, y){
  this.loc = createVector(x, y);
  this.cw = 23;//  coin width
  this.dcw = -1;//  change coin width

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
      if(this.heroCollision()){
        this.visible = false;
      }
  }

   this.render = function(){
     fill(180,220,20);
     this.cw += this.dcw;
     ellipse(this.loc.x, this.loc.y, this.cw, 44);
     if(this.cw < 8 || this.cw > 44){
       this.dcw = -this.dcw;
     }
   }

   this.heroCollision = function(){


   }

}//  End of Ball constructor function
