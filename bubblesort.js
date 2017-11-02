function bubbleSort(array){
  var hasSwitched = true;
  while(hasSwitched){
    hasSwitched = false;
    for(var i = 0; i < array.length - 1; i++){
      if(array[i] > array[i + 1]){
        var biggerNum = array[i];
        array[i] = array[i + 1];
        array[i + 1] = biggerNum;
        hasSwitched = true;
      }
    }
  }
  return array;
}
