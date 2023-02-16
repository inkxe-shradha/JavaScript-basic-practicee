// Todo - Write a function in JavaScript that works similar to the original promise .

// Enum state
const states = {
  REJECTED: 0,
  PENDING: 1,
  FULFILLED: 2,
};
// classical
// class MyPromise {
//   // Initialize the promise and it's state
//   constructor(callback) {
//     this.state = states.PENDING;
//     this.value = null;
//     this.handlers = [];
//     try {
//       callback(this._resolve.bind(this), this._reject.bind(this));
//     } catch (error) {
//       this._reject;
//     }
//   }

//   /********************************************* HELPER FUNCTION *****************************************************/
//   _resolve(value){
//     this._handelUpdate(states.FULFILLED, value);
//   };

//   _reject(value)  {
//     this._handelUpdate(states.REJECTED, value);
//   };

//   /**
//    * Handle Updates
//    */
//   _handelUpdate(state, value) {
//     if (state === states.PENDING) {
//       return;
//     }
//     setTimeout(() => {
//       if (value instanceof MyPromise) {
//         value.then(this._resolve, this._reject);
//       }
//       this.state = state;
//       this.value = value;

//       this.executor();
//     }, 0);
//   }

//   /**
//    * Executor Function for handling calls depends on current state
//    */
//   executor() {
//     if (this.state === states.PENDING) {
//       return;
//     }

//     this.handlers.forEach((handler) => {
//       if (this.state === states.FULFILLED) {
//         return handler.onSuccessCall(this.value);
//       }
//       return handler.onFailureCall(this.value);
//     });
//     this.handlers = [];
//   }

//   /**
//    * Add handlers
//    * execute all if new handler is added
//    */
//   _addHandlers(handler) {
//     this.handlers.push(handler);
//     this.executor();
//   }

//   /**
//    * Promise then function
//    * Create promise and add it to the handlers
//    */
//   then(onSuccessCall, onFailureCall) {
//     return new MyPromise((resolve, reject) => {
//       this._addHandlers({
//         onSuccessCall: (value) => {
//           if (!onSuccessCall) {
//             return resolve(value);
//           }
//           try {
//             return resolve(onSuccessCall(value));
//           } catch (error) {
//             return reject(error);
//           }
//         },
//         onFailureCall: (value) => {
//           if (!onFailureCall) {
//             return reject(value);
//           }
//           try {
//             return reject(onFailureCall(value));
//           } catch (error) {
//             return reject(error);
//           }
//         },
//       });
//     });
//   }

//   /**
//    * Catch Block Statements
//    */
//   catch(onFailureCall) {
//     return this.then(null, onFailureCall);
//   }

//   /**
//    * Finally Handler
//    *
//    */
//   finally(callback) {
//     // Create a new Constructor Instance
//     // listen then and catch
//     // Finally perform the actions
//     return new MyPromise((resolve, reject) => {
//       let resolvedStatus;
//       let value;
//       this.then((val) => {
//         value = val;
//         resolvedStatus = true;
//         return callback();
//       }).catch((err) => {
//         value = err;
//         resolvedStatus = false;
//         return callback();
//       });

//       if (resolvedStatus) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     });
//   }
// }

// Arrow functional for better this management
class MyPromise {
  constructor(callback) {
    this.state = states.PENDING;
    this.handlerArrays = [];
    this.value = null;
    callback(this.resolve, this.reject);
  }

  resolve = (value) => {
    this.handelOnFnUpdates(states.FULFILLED, value);
  };

  reject = (err) => {
    this.handelOnFnUpdates(states.REJECTED, err);
  };

  handelOnFnUpdates = (state, value) => {
    if (state === states.PENDING) {
      return;
    }
    setTimeout(() => {
      if (value instanceof MyPromise) {
        value.then(this.resolve, this.reject);
      }
      this.state = state;
      this.value = value;
      this.executor();
    }, 0);
  };

  executor = () => {
    if (this.state === states.PENDING) {
      return;
    }
    this.handlerArrays.forEach((handler) => {
      if (this.state === states.FULFILLED) {
        return handler.onSuccessCall(this.value);
      } else {
        return handler.onErrorCall(this.value);
      }
    });
    this.handlerArrays = [];
  };

  addHandler = (handler) => {
    this.handlerArrays.push(handler);
    this.executor();
  };

  then = (onSuccess, onError) => {
    return new MyPromise((resolve, reject) => {
      this.addHandler({
        onSuccessCall: (value) => {
          if (!onSuccess) {
            return resolve(value);
          }
          try {
            return resolve(onSuccess(value));
          } catch (error) {
            return reject(error);
          }
        },
        onErrorCall: (value) => {
          if (!onError) {
            return reject(value);
          }
          try {
            return reject(onError(value));
          } catch (error) {
            return reject(error);
          }
        },
      });
    });
  };

  catch = (onError) => {
    return this.then(null, onError);
  };
}

const promise = new MyPromise((resolve, reject) => {
  //   setTimeout(() => {}, 100);
  reject("hello");
});
promise
  .then((value) => {
    console.log("Resolved Value", value);
  })
  .catch((error) => {
    console.log("Error", error);
  });
