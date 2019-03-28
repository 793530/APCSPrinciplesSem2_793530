/*
**Kalpa Yakupitiyage
**Platform Game
**
**
*/


//  Global variables

var zGame;
var backGround;

// put setup code here
function setup() {

  var cnv = createCanvas(1100, 900);
  cnv.position((windowWidth-width)/2, 30);
  zGame = new Game();
  //  assests object
  var numCoins = 0;
  var numZombs = 5;
  var numPlatforms = 12;

  zGame.initGame(numCoins, numZombs, numPlatforms);
}

function draw() {
  background(10, 10, 20, 42);

  zGame.run();
  //  Add text to element with id demoDiv
  //document.getElementById("demoDiv").innerHTML = "PlayerStats /n/t x vel = " + zGame.hero.vel.x + "/n/t y vel = " + zGame.hero.vel.y;
}

function keyReleased(){
    if(keyCode !== 32){
       zGame.curKey = "";  //clear curr key
    }

}

function keyPressed(){

  if(keyCode === 39) {//  right arrow
     zGame.curKey = "MoveRight";
  }
  if(keyCode === 37) {//  right arrow
     zGame.curKey = "MoveLeft";
  }
  if(keyCode === 32){//  space bar

    zGame.curKey = "MoveUp";

  }
}
