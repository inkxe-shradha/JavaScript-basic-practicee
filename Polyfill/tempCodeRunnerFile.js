resolveAllPromisesAnyPollyFil(promiseArray)
  .then((promises) => {
    console.log(promises);
  })
  .catch((err) => console.log(err));