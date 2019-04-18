

/*
**  Platform Constructor Function
**  eettlin
**  March. 14, 2019
*/

function Platform(x, elev){
   this.loc = createVector( x,  elev );
   this.w = 150;
   this.h = 20;
   if(random(0, 1.0)< 0.5) {//  each platform 50% chanve of containg its own coin
     zGame.gameElements.push(new Coin(this.loc.x + this.w/2, this.loc.y - 22));
   }



  this.run = function(){

  }

  this.update = function(){

   }

   this.render = function(){
      fill(200, 30, 50);
      //rect(this.loc.x, this.loc.y, this.w, this.h);
      image(plat, this.loc.x,  this.loc.y - this.h);
   }





}//  End of Game constructor function
