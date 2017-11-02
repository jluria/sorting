function merge(arrA, arrB){
  var arrAIndex = 0,
      arrBIndex = 0,
      aCopy = arrA.slice(),
      bCopy = arrB.slice(),
      resultArray = [];

  while(aCopy.length && bCopy.length){
    if(arrA[arrAIndex] < arrB[arrBIndex]){
      resultArray.push(aCopy.shift());
      arrAIndex++;
    } else {
      resultArray.push(bCopy.shift());
      arrBIndex++;
    }
  }

  return resultArray.concat(aCopy, bCopy);
}

function split(wholeArray) {
  var firstHalf = wholeArray.slice(0, (wholeArray.length/2)),
  secondHalf = wholeArray.slice(wholeArray.length/2);
  return [firstHalf, secondHalf];
}
