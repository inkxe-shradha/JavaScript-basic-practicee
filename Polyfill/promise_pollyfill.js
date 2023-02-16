const timeoutPromiseResolve = (timeoutPromise) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("resolved in " + timeoutPromise), timeoutPromise)
  );
const timeoutPromiseReject = (timeoutPromise) =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject("rejected in " + timeoutPromise), timeoutPromise)
  );

const promiseArray = [
  timeoutPromiseResolve(2000),
  timeoutPromiseResolve(500),
  timeoutPromiseResolve(1000),
  timeoutPromiseResolve(100),
];

// ! PROMISE.ALL Polyfill methods example and implementation...... //
/**
 * * Normal Promise all resolves
 */

const resolveAllPromises = (premises) => {
  Promise.all(premises)
    .then((resp) => {
      console.log("resolved all promises =>", resp);
    })
    .catch((err) => console.log("Handling Error", err));
};

// resolveAllPromises(promiseArray);

/**
 * TODO Promise all implementations in Polyfill
 */

const resolveAllPromisesInAllBrowserSupport = (promises) => {
  const result = [];
  let countOnSuccess = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          countOnSuccess++;
          if (countOnSuccess === promises.length) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
};

const polyfillPromisesALL = (status) => {
  if (status === 200)
    // WIth all passing promises statements
    resolveAllPromisesInAllBrowserSupport(promiseArray).then((res) => {
      console.log(res);
    });
  // With one Reject state so that promise all getting failed instantly.
  else
    resolveAllPromisesInAllBrowserSupport([
      ...promiseArray,
      timeoutPromiseReject(200),
    ])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("Instantly Rejected Promise", err));
};

// polyfillPromisesALL(200);
// polyfillPromisesALL(500);

/************************************************************************************************************************************/

/**
 * Todo: Promise.any() implementation using Polyfill and normal ways.
 */

// ! PROMISE.any Polyfill methods example and implementation...... //
/**
 * * Normal Promise any resolves
 */

const resolveAllPromisesAny = (premises) => {
  Promise.any(premises)
    .then((resp) => {
      console.log("resolved all promises =>", resp);
    })
    .catch((err) => console.log("Handling Error", err));
};

// resolveAllPromisesAny(promiseArray);
// resolveAllPromisesAny([...promiseArray]);

/**
 * * Polyfill Implementations
 *
 */
const resolveAllPromisesAnyPollyFil = (promises) => {
  const promiseHandleError = new Array(promises.length);
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res) => resolve(res))
        .catch((error) => {
          promiseHandleError[counter] = error;
          counter++;
          if (counter === promises.length) {
            reject(promiseHandleError);
          }
        });
    });
  });
};
// Resolve All
// resolveAllPromisesAnyPollyFil(promiseArray)
//   .then((promises) => {
//     console.log(promises);
//   })
//   .catch((err) => console.log(err));

// // Reject Order
// resolveAllPromisesAnyPollyFil([timeoutPromiseReject(200)])
//   .then((promises) => {
//     console.log(promises);
//   })
//   .catch((err) => console.log(err));
/************************************************************************************************************************************/

/**
 * Todo: Promise.race() implementation using Polyfill and normal ways.
 */

const resolvePromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
};

resolvePromiseRace(promiseArray).then((res) => console.log(res));
