//Kalpa Yakupitiyage
//JSON
//31/01/2019
var le = 20
var data;

// function preloader(){
//   data = loadJSON("data.json");
// }


function preload(){
  data = loadJSON("data.json");

}

function setup(){         // new json
  // make a graph
   loadJSON("data.json", gotData);
   var cnv = createCanvas(800, 800);
   background(50,120,66);
}

function gotData(newData ){
  console.log(newData);
  data = newData;
  selectSort();
}


 function draw(){

   for(var i = 0; i < data.crime.Murder ; i++){

     rect(200 , 40 ,(i * le) , this.loc.data.crime[j].Murder , 10);
     Fill(200,0,0)

   }

 }
//Murder
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
//Assault
function selectSort(){               //The code keeps repeating until it is false

  for(var i = data.crime.length-1; i > 0; i--){
    for(var j = 0; j < i; j++ ){
      if(data.crime[j].Assault < data.crime[j+1].Assault){
        var tmp = data.crime[j].Assault;
        data.crime[j].Assault = data.crime[j+1].Assault;
        data.crime[j+1].Assault = tmp;
      }

    }
  }
}

function selectSort(){               //The code keeps repeating until it is false
//UrbanPop
  for(var i = data.crime.length-1; i > 0; i--){
    for(var j = 0; j < i; j++ ){
      if(data.crime[j].UrbanPop < data.crime[j+1].UrbanPop){
        var tmp = data.crime[j].UrbanPop;
        data.crime[j].UrbanPop = data.crime[j+1].UrbanPop;
        data.crime[j+1].UrbanPop = tmp;
      }

    }
  }
}
function selectSort(){               //The code keeps repeating until it is false
//Rape
  for(var i = data.crime.length-1; i > 0; i--){
    for(var j = 0; j < i; j++ ){
      if(data.crime[j].Rape < data.crime[j+1].Rape){
        var tmp = data.crime[j].Rape;
        data.crime[j].Rape = data.crime[j+1].Rape;
        data.crime[j+1].Rape = tmp;
      }

    }
  }
}
//state
function selectSort(){               //The code keeps repeating until it is false

  for(var i = data.crime.length-1; i > 0; i--){
    for(var j = 0; j < i; j++ ){
      if(data.crime[j].state < data.crime[j+1].state){
        var tmp = data.crime[j].state;
        data.crime[j].state = data.crime[j+1].state;
        data.crime[j+1].state = tmp;
      }

    }
  }
}
