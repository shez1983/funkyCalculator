function randomiseArr(array) {
  for (var i = array.length - 1; i > 0; i--) {
  
      
      var random = Math.floor(Math.random() * (i + 1));
                  
      var temp = array[i];
      array[i] = array[random];
      array[random] = temp;
  }
      
  return array;
}

 function getRandomFromArray(array){
   return array[Math.floor(Math.random()*array.length)];
 }
 /*
 testing
let array = [1,2,3,4,5];
console.log(array);
var newArray = [];
newArray = randomiseArr(array);
console.log(newArray);
*/