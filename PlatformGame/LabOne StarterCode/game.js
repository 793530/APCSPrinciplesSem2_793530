function Game(){

  this.gameElements = [];  // all game elements
  this.platforms = [];
  this.curKey = 0;
  this.worldX = 0;
  this.worldXSpeed = 2;
  this.hero;


  var numPlatforms = 10;

  this.initGame = function(c, e, p){

    for(let i = 0; i < c.numCoins; i++){
      this.gameElements.push(new Coin(i*110+130, height - 130));
    }

    for(let i = 0; i < p; i++){
      var elev = floor(random(5))*100;
      this.platforms.push(new Platform(i*150, elev));
    }
    var heroXLoc = width/2;
    var heroYLoc = 30 ;
    this.hero = new Hero(createVector(heroXLoc + 20, heroYLoc));
    this.gameElements.push(this.hero);

  }

  this.run = function(){
     this.update();
     this.render();
  }

  this.update = function(){
     this.setWorldX();
     translate(this.worldX, 0 );
     for(var i = 0; i < this.gameElements.length; i++){
        this.gameElements[i].update();
     }

     for(var i = 0; i < this.platforms.length; i++){
        this.platforms[i].update();
     }
   }

   this.render = function(){
      image(backGround, 0, 0);
      image(backGround, 2*width, 0);
      image(backGround, width, 0);
     for(var i = 0; i < this.gameElements.length; i++){
       this.gameElements[i].render();
     }
     for(var i = 0; i < this.platforms.length; i++){
        this.platforms[i].render();
     }
   }

   this.setWorldX = function(){

      if(this.curKey === "MoveRight"){
        this.worldX += this.worldXSpeed;
        this.hero.loc.x -= this.worldXSpeed;


      }
      if(this.curKey === "MoveLeft"){
       this.worldX -= this.worldXSpeed;
       this.hero.loc.x += this.worldXSpeed;
      }
      if(this.curKey === "MoveUp"){
         this.hero.vel.y  = -1;
         this.hero.acc.y = -0.5;
      }
   }
}//  End of Game constructor function
