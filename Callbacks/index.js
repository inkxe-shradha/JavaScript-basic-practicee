// Normal Call back
setTimeout(() => {
  console.log("This is the call back method as simple as it is.");
}, 1000);

// The callback hell is called the pyramid of doom
//  This is also called inversion of control - It means we loose the control of our program, it is like we are giving and important function of our application to another function to execute on it's own risk appetite.

const api = new Object();
// ! Callback hell is called below
api.createMeItems(items, function () {
  api.processOrderItem(payment, function () {
    api.processPaymentInfo(paymentId);
  });
});
