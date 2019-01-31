//Kalpa Yakupitiyage
//JSON
//18/01/2019
var data;

function preloader(){
  data = loadJSON("data.json");

}

function setup(){         // new json
                          // remove old data
                          // use a different sort code
                          // make a graph

  loadJSON("data.json", gotData);

}

function gotData(newData ){
  console.log(newData);
  data = newData;
 selectSort();

}


 function draw(){

 }

function selectSort(){               //The code keeps repeating until it is false

  for(var i = data.Murder.length-1; i > 0; i--){
    for(var j = 0; j < i; j++ ){
      if(data.Murder[j].rating < data.Murder[j+1].rating){
        var tmp = data.Murder[j].rating;
        data.Murder[j].rating = data.Murder[j+1].rating;
        data.Murder[j+1].rating = tmp;
      }

    }
  }
}
