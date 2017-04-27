
// this function takes in an array[ints] and returns the max value of the array
function Max(array){
  if(array.length() == 0){
    return null;
  }

  var max = array[0];

  for(i = 0; i < array.length(); i++) {
      if(array[i] > max) {
        max = array[i];
      }
  }
  return max;
}

function Min(array){
  if(array.length() == 0){
    return null;
  }

  var min = array[0];

  for(i = 0; i < array.length(); i++) {
      if(array[i] < min) {
        min = array[i];
      }
  }
  return min;
}
