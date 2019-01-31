//Kalpa Yakupitiyage
//JSON
//31/01/2019
var data;

// function preloader(){
//   data = loadJSON("data.json");
// }

function setup(){         // new json
  // make a graph
   loadJSON("data.json", gotData);
//   var cnv = createCanvas(500, 500);
   background(50,120,66);
}

function gotData(newData ){
  console.log(newData);
  data = newData;
  selectSort();
  console.log(newData);
}


 function draw(){
 }

function selectSort(){               //The code keeps repeating until it is false

  for(var i = data.crime.length-1; i > 0; i--){
    for(var j = 0; j < i; j++ ){
      if(data.crime[j].Murder < data.crime[j+1].Murder){
        var tmp = data.crime[j].Murder;
        data.crime[j].Murder = data.crime[j+1].Murder;
        data.crime[j+1].Murder = tmp;
      }

    }
  }
}
