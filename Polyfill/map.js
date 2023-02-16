// Map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    temp.push(cb(this[index], index, this));
  }
  return temp;
};

console.log([1, 2, 3, 4, 5, 6].myMap((ele) => ele * 2));
