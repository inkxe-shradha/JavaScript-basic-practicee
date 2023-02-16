// arr.reduce((accumulator, currentValue, index, array) => {}, initialValue);

Array.prototype.myReduce = function (callBackFun, initialValue) {
  var accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    accumulator = accumulator
      ? callBackFun(accumulator, element, index, this)
      : this[index];
  }

  return accumulator;
};

console.log([1, 2, 3, 4, 5].myReduce((acc, value) => acc + value, 0));
