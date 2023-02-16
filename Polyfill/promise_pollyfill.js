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
