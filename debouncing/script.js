// Debouncing logic

const getData = (e) => {
  // Calls the API and get Data from the API object
  console.count();
  console.log(e);
};

function doMagic(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const optimizedCall = doMagic(getData, 300);
