
exports.min = function min (array) {
  if(typeof array!== 'undefined' && array.length > 0){
    let sortedArray = array.sort((a, b) => a - b);
    return (array.length > 0) ? sortedArray[0] : 0
  }
  return 0
}

exports.max = function max (array) {
  if(typeof array!== 'undefined' && array.length > 0){
    let sortedArray = array.sort((a, b) => b - a);
    return (array.length > 0) ? sortedArray[0] : 0
  }
  return 0
}

exports.avg = function avg (array) {
  return 0;
}
