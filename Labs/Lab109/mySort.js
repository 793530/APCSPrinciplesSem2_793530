/*
Kalpa Yakupitiyage
01/10/2019
Sort
*/

var txt;

function preload(){           //This opens the text file
  txt = loadStrings("numbers.txt");

}

function setup() {

  console.log(txt)            //
  Sort(txt);            //


}

function Sort(txt){               //The code keeps repeating until it is false

  var length = txt.length
  for(

        }





      }



  }


}

/*
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

*/
