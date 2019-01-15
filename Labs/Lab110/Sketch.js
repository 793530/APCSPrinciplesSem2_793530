// Kalpa Yakupitiyage
// Lab 110 bubbleSort
// 01/10/2019

var temp;
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

  for (var  i = 1; i < arr.length; i++)
  {
    for(var  j = i ; j > 0 ; j--)
    {
      //  Swapping Code +++++++++
      if(arr[j] < arr[j-1]){
        temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
      //  Swapping Code +++++++++
    }
  }


}



function selectSort(n){               //Swap is outside the inner for loop

  for (var i = 0; i < arr.length - 1; i++)
  {
    var index = i;
    for (var j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[index])
        index = j;
    //  Swapping Code
    var smallerNumber = arr[index];
    arr[index] = arr[i];
    arr[i] = smallerNumber;
  }

}








//for(var i = nums.length - 1; i >= 1; i-- ){
    //for(var j = 0; j < nums.length; j++ ){

//}


//}
