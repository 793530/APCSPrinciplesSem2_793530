

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
  this.inAir = true;
  this.currPlat = -1;
  this.count = 1;
  this.animDelay = 0;

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    for(var i = 0; i < zGame.platforms.length; i++){
      if(this.isColliding(zGame.platforms[i]) && this.inAir){
        this.currPlat = i;
        //this.loc.y = zGame.platforms[i].loc.y-5;
        this.acc.y = 0;//  turn off acc if collision detected
        this.vel.y = 0;//  turn off acc if collision detected
        this.inAir = false;
      }
      if(!this.isColliding(zGame.platforms[i]) && !this.inAir && this.currPlat === i){
        this.acc.y = 0.1;//  turn off acc if collision detected
        this.vel.y = 1;//  turn off acc if collision detected
        this.inAir = true;
      }
    }
    this.vel.add(this.acc)
    this.loc.add(this.vel);
  }

  this.render = function(){
    fill(50, 230, 30);
    var x = this.loc.x;
    var y = this.loc.y;
    //triangle(x - 15, y,   x + 15, y,   x, y - 50);
    image(moveRight[this.count - 1], x - 25, y - 70);
    this.animDelay++;
    console.log(this.animDelay);
    if(this.animDelay%5 === 0){
      this.count++;
      if(this.count > 10) this.count = 1;
    }
    if(this.animDelay > 5000) this.animDelay = 0;

  }

  this.isColliding = function(p){
    if(this.loc.y > p.loc.y &&
      this.loc.y < p.loc.y + p.h  &&
      this.loc.x > p.loc.x &&
      this.loc.x < p.loc.x + p.w) {
        return true;
      }
      return false;
    }
  }//  End of Game constructor function
