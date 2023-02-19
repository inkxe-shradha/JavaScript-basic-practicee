// Todo Implement a function that takes a list of async functions as input and executes them in a series that is one at a time
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

const resolveAllPromiseExecution = async (promises) => {
  for (const promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
};

const asyncFnExecuter = function (promises) {
  promises.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((res) => {
        console.log(res);
      });
    });
  }, Promise.resolve());
};
// resolveAllPromiseExecution(promiseArray);
// asyncFnExecuter(promiseArray);

// Todo - Implement a function in JavaScript that retries promises N number of times with a delay between each call.

const waitFN = (timeSec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved"), timeSec);
  });

/**
 * Retry callback after 50 sec 3 times
 * @param {*} asyncFn
 * @param {*} retryCall
 * @param {*} delayCallBackSec
 * @param {*} finalError
 */

const retryFNPromise = async (
  asyncFn,
  retryCall = 3,
  delayCallBackSec = 50,
  finalError = "failed"
) => {
  try {
    await asyncFn();
  } catch (error) {
    if (retryCall <= 0) {
      return Promise.reject(finalError);
    }

    // Waiting for the delay
    await waitFN(delayCallBackSec);

    // Recursion
    return retryFNPromise(asyncFn, retryCall - 1, delayCallBackSec, finalError);
  }
};

const mockCall = () => {
  let count = 0;
  return async () => {
    count++;
    if (count < 5) {
      throw new Error("Retry Call Back");
    }
  };
};

const test = async () => {
  await retryFNPromise(mockCall(), 10);
  console.log("success");
  await retryFNPromise(mockCall(), 3);
  console.log("will fail before getting here");
};

test().catch(console.error);
