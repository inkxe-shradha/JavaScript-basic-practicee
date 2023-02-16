// Rate limiting, Performance optimization

/**
 * It is used for performance optimization
 * Rate limiting function calls should be minimised
 * * Debouncing -
 * It says that only execute the function if the difference between the key press events is greater than some threshold times seconds.
 * * Throttling -
 * It says that only execute the function call after the certain of threshold times periods.. That for the time period ignore all the key press events
 *
 *  * Difference
 *
 */

const throttle = (fn, delay) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      fn.apply(this, args);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const onINputChange = (e) => {
  console.log(e);
};

const getData = throttle(onINputChange, 300);
