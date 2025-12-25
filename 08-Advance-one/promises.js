const promiseone = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn Task is Completed");
    resolve();
  }, 1000);
});

promiseone.then(function () {
  console.log("promise consumed");
});
