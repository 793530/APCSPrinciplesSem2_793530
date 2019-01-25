//Kalpa Yakupitiyage
//JSON
//18/01/2019
var data;

function preloader(Population.json){

}

function setup(){         // new json
                          // remove old data
                          // use a different sort code
                          // make a graph

  loadJSON("Population.json", gotData);

}

function gotData(newData ){
  console.log(newData);
  data = newData;
 selectSort();

}


 function draw(){



 }

function selectSort(){               //The code keeps repeating until it is false
  var length = data.teams.length;
  for(var i = length-1; i > 0; i--){
    for(var j = 0; j < i; j++ ){
      if(data.teams[j].rating < data.teams[j+1].rating){
        var tmp = data.teams[j].rating;
        data.teams[j].rating = data.teams[j+1].rating;
        data.teams[j+1].rating = tmp;
      }

    }
  }
}
