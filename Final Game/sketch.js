/* Kalpa Yakupitiyage
** Tom & Jerry Game
** 5/22/2019
*/

//  Global variables
var b1;
var food = [];
var hero
var enemy

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  var loc = createVector(random(width), random(height));
  var rad = 25;
  var col = color(0,255,0);
  loadBalls(12);

}

function draw() {
  
  background(20,20,20,40);
  for(var i = 0; i<balls.length; i++){
     foods[i].run();

}
}

function loadBalls(numBalls){

    for(var i = 0; i<numBalls; i++){
      var loc = createVector(random(width), random(height));
      var rad = 15;
      var col = color(255,0,0);
      balls.push(new Ball(loc,rad,col))

    }

function draw() {

         if (gameState === 1){
           startGame();
         }
         if (gameState === 2){
           playGame();
         }
         if (gameState === 3){
           endGame();

         }
       }

function startGame(){                   //functions for startGame ,playGame and endGame to have different gamestates

         image(img, 0, 0);                     // The startsreen preloaded image
         //text('Hit the enter to play', 100, 300)

       }

function playGame(){





    }

function endgame(){     //
      //load.endGame()        //               //
    }

//function mouse(){

//}
