

/*
**  Game Constructor Function
**  eettlin
**  March. 14, 2019
*/

function Game(){

  this.gameElements = [];  // all game elements
  this.platforms = [];
  this.curKey = 0;
  this.worldX = 0;
  this.worldXSpeed = 2;
  this.hero;


  var numPlatforms = 10;

  this.initGame = function(a, e){

    for(let i = 0; i < a.numCoins; i++){
      this.gameElements.push(new Coin(i*110+130, height - 130));
    }

    for(let i = 0; i < numPlatforms; i++){
      var elev = floor(random(4))*80 + 400;
      this.platforms.push(new Platform(i*250, elev));
    }
    var heroXLoc = width/2;
    var heroYLoc = 20 ;
    this.hero = new Hero(createVector(heroXLoc + 20, heroYLoc));
    this.gameElements.push(this.hero);

  }

  this.run = function(){
     this.update();
     this.render();
  }

  this.update = function(){
     this.keyCodeHandler();
     translate(this.worldX, 0 );
     for(var i = 0; i < this.gameElements.length; i++){
        this.gameElements[i].update();
     }

     for(var i = 0; i < this.platforms.length; i++){
        this.platforms[i].update();
     }
   }

   this.render = function(){
     for(var i = 0; i < this.gameElements.length; i++){
       this.gameElements[i].render();
     }
     for(var i = 0; i < this.platforms.length; i++){
        this.platforms[i].render();
     }
   }

   this.keyCodeHandler = function(){

      if(this.curKey === "MoveRight"){
        this.worldX += this.worldXSpeed;

        this.hero.loc.x -= this.worldXSpeed;

      }
      if(this.curKey === "MoveLeft"){
        this.worldX -= this.worldXSpeed;
        this.hero.loc.x += this.worldXSpeed;
      }
      if(this.curKey === "Jump"  ){
        if(!this.hero.inAir){
          zGame.hero.loc.y -= 25;
          zGame.hero.vel.y = -5;
          zGame.hero.acc.y = 0.1;
          this.hero.inAir = true;
        }else{
          zGame.hero.loc.y -= 5;
          zGame.hero.vel.y = -2;
          zGame.hero.acc.y = 0.1;
        }
      }
   }
}//  End of Game constructor function
