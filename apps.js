

function Four(a, b) {
    if (a === b) {
        return "True To The Game";
    }
        return "Big Nope";
}

console.log (questFour(2,2));

console.log (questFour(5,2));



var myArray = [["arr1", 5], ["arr2", 15]];


function multiplyAll(arr) {
    var product = 1;
    
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
   
    return product;
  }

  multiplyAll([[1,2],[3,4],[5,6,]]);


  var myArray = [[ ["dogs", 4] , ["lions", 7 ] , [["bears", 2] , ["jellyfish", 5] ] , ["cats", 9] ] ]
