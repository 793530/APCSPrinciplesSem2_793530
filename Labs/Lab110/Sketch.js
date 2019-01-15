// Kalpa Yakupitiyage
// Lab 110 bubbleSort
// 01/10/2019


var nums = [2, 6, 1, 5, 8, 12, 3, 4];

function setup() {

  console.log(nums);            //
  bubbleSort(nums);
  console.log(nums);              //


}

function bubbleSort(n){                //Swap is inside the inner for loop

  for(var i = n.length-1; i > 0; i--){
    for(var j = 1; j <= i; j++ ){
      if(n[j] < n[j-1]){
        var tmp =n[j];
        n[j] = n[j-1];
        n[j-1] = tmp;
      }
    }
  }


}


function insertionSort(n){                //Swap is inside the inner for loop

  for(var i = n.length-1; i > 0; i--){
    for(var j = 1; j <= i; j++ ){
      if(n[j] < n[j-1]){
        var tmp =n[j];
        n[j] = n[j-1];
        n[j-1] = tmp;
      }
    }
  }


}



function selectSort(n){               //Swap is outside the inner for loop

  for(var i = n.length-1; i > 0; i--){
    for(var j = 1; j <= i; j++ ){

    }
    if(n[j] < n[j-1]){
      var tmp =n[j];
      n[j] = n[j-1];
      n[j-1] = tmp;
    }
  }


}





//for(var i = nums.length - 1; i >= 1; i-- ){
    //for(var j = 0; j < nums.length; j++ ){

//}


//}
