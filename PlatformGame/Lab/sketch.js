/*
**Platform Game
**
**
*/


//  Global variables

var zGame;
var sky, bbg, bg, plat;
var moveRight = [];
var moveLeft =[];

function preLoad(){

}

// put setup code here
function setup() {

  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadImages();

  zGame = new Game();
  //  assests object
  var assets = {numCoins:0,
                numFlowers:5};
  var enemies = {numZombs:12,
                 numDrags:5};
  zGame.initGame(assets, enemies);
}

function draw() {
  background(10, 10, 20, 42);
  paralaxBackground();
  zGame.run();
  //  Add text to element with id demoDiv
  //document.getElementById("demoDiv").innerHTML = "Zombie Game";
}

function keyReleased(){
  //if(keyCode !== 32){
     zGame.curKey = "";//  right arrows
  //}
}

function keyPressed(){
   //console.log(keyCode);
  if(keyCode === 39) {
     zGame.curKey = "MoveRight";//  right arrow
  }
  if(keyCode === 37) {
     zGame.curKey = "MoveLeft";//  right arrow
  }
  if(keyCode === 32){
      zGame.curKey = "Jump";

  }
}

function paralaxBackground(){
  image(sky, .2*zGame.worldX, 0);
  image(sky, .2*zGame.worldX + width, 0);

  image(bbg, .5*zGame.worldX, height-bbg.height);
  image(bbg, .5*zGame.worldX + width, height-bbg.height);
  image(bbg, .5*zGame.worldX + 2*width, height-bbg.height);

  image(bg,  .8*zGame.worldX , height - bg.height);
  image(bg,  .8*zGame.worldX + width, height - bg.height);
  image(bg,  .8*zGame.worldX + 2*width, height - bg.height);
}

function loadImages(){
  sky = loadImage("images/sky.png");
  bbg = loadImage("images/bbg.png");
  bg = loadImage("images/bg.png");
  plat = loadImage("images/platform.png");
  for(var i = 1; i < 11; i++){
    moveRight.push(loadImage("images/bear/moveright/mr" + i + ".png" ));
  }

}
