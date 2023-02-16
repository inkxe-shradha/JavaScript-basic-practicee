// Before promises

const cart = ["Iphone", "Shoes", "Pants", "Samsung"];

createOrder(cart); // ! Return the orderID;

proceedToPayment(orderId); // ! Async function move to payment page which is dependent on create order API calls.

// * Callback function handler
function callBackHell() {
  createOrder(cart, function () {
    proceedToPayment(orderId);
  });
}

// * Promises handlers

/**
 * Promise object placeholder for a certain period of time until we receive a value in the near future.
 * Promises are the container for the future value
 * A promise is an object representing the eventual completion of the the asynchronous operation.
 */

const promises = createOrder(cart);

// Create new promise object
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Cart not valid"));
    }
    const orderId = "sfksj";
    resolve(orderId);
  });

  return promise;
}
