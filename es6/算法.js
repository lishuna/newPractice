/**
 * @author lishuna
 * @date  2019-07-10:16:57
 * @version 3.1.0.0
 * @desc
 */
var binarySearch = function(dataArr, start, end) {
  var maxNum = dataArr.length;
  var middle;
  if (start == null) {
    start = 0; }
  if (end == null) {
    end = dataArr.length - 1;
  }
  middle = parseInt((start + end) / 2);
  console.log(start,end,middle);
  if (middle === start || middle === end) {
    return -1;
  }
  if (dataArr[middle - 1] === maxNum) {
    return middle;
  } else if (dataArr[middle] === maxNum) {
    return middle + 1;
  }
  if (dataArr[middle] > dataArr[0]) {
    return binarySearch(dataArr, maxNum, middle + 1, end);
  } else {
    return binarySearch(dataArr, maxNum, start, middle - 1);
  } };

const arr = [7,8,9,10,11,12,13,14,15,1,2,3,4,5,6];
console.log(binarySearch(arr));


var fibFast = (function () {
  var cache = [1, 1];
  console.log(cache)
  var func = function (n) {
    if (cache[n - 1]) {
      return cache[n - 1];
    } else {
      cache[n] = func(n - 1) + func(n - 2);
      return cache[n];
    } };
  return func;
}());
console.log(fibFast(3));

var fibSlow = (function () {
  var func = function (n) {
    if (n < 3) {
      return 1;
    } else {
      return func(n - 1) + func(n - 2);
    }
  };
  return func;
}());

console.log(fibSlow(4));
