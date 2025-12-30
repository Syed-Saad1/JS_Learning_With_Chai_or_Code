// fetch('https://saadweb.com').then().catch().finally()

//  First Promise

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn task is Completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promised Consumed");
});

//  Second Promise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asyn task 2 Resolved");
});

//  Third Promise

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Saad Raza", Email: "Saadraza@example.con" });
  }, 1000);
});
promisethree.then(function (user) {
  console.log(user);
});

//  Fourth Promise

const obj = {
  name: "Sarim Raza",
  email: "sarimraza234@gmail.com",
  id: 222346,
};

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve(obj);
    } else {
      console.log("ERROR : Something Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((obj) => {
    console.log(obj);
    return obj.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promised is either Resolved or Rejected");
  });

// Five Promise

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ Nmae: "JS", id: 9344 });
    } else {
      reject("ERROR : JS Went Wrong");
    }
  }, 1000);
});

async function Consumed() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
Consumed();

// fetch

async function getallusers() {
  try {
    const response = await fetch("https://api.github.com/users/Syed-Saad1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getallusers();

fetch("https://api.github.com/users/Syed-Saad1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
