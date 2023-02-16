// Map

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      temp.push(this[index]);
    }
  }
  return temp;
};

console.log([1, 2, 3, 4, 5, 6].myFilter((ele) => ele > 5));
