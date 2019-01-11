// Kalpa Yakupitiyage
// Lab 120 selectionSort
// 01/11/2019

// finds the lowest number and moves it in to front and then moves the closest-
//-number to the already sorted number and moves it in front of the last sorted number

var txt;

function preload(){           //This opens the text file
  txt = loadStrings("numbers.txt");

}

function setup() {

  console.log(txt)            //
  selectionSort(txt);            //


}

function selectionSort(txt){               //The code keeps repeating until it is false

  var length = txt.length
  for (var i = 0; i < arr.length - 1; i++)
          {
              var index = i;
              for (var j = i + 1; j < arr.length; j++) // If j=i then adds 1 to J and if j is less than
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
