

/*
**  Game Constructor Function
**  eettlin
**  March. 14, 2019
*/

function Hero(location){

   this.loc = location;
   this.vel = createVector(0,0);
   this.acc = createVector(0,.1);
   this.currKey = 0;

  this.run = function(){
     this.update();
     this.render();

  }

  this.update = function(){
     //  Lab 1:  Enter code here
     }
     //if(this.isColliding())
     this.vel.add(this.acc)
     this.loc.add(this.vel);
   }

   this.render = function(){
       fill(50, 230, 30);
       var x = this.loc.x;
       var y = this.loc.y;
       triangle(x - 20, y, x + 20, y, x, y - 30);
   }

   this.isColliding = function(p){
     //  Lab 1:  Enter code here
   }


}//  End of Game constructor function
