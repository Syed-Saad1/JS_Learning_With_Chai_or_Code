// ++++++++++++++++++++++++++++  Array  ++++++++++++++++++++++++++++++++++++++++++++

// Defination of Array
            // An Array is an Object Data type and  it also only one Variable Store Data and also Resizwable.
let MyArray = [1 , 2 , 3 , 4 , 5 , 6 ,7 ];
// console.log(MyArray[2]);

let MyArray2 = ["Saad " , true , " Furqan " , 1000]
// console.log(MyArray2);

// ++++++++**************  Array Method  **************+++++++++++

MyArray.push(8 , 9 , 10);
// console.log(MyArray);
// ( 👆 This Method is used Simply to push in array.)

MyArray.pop();
// console.log(MyArray);
// ( 👆 This Method is used Simply to delte the last value in array.)

MyArray.unshift(0);
// console.log(MyArray);
// ( 👆 This Method is used Simply to Add the First value in array but it's used Some time.)

MyArray.shift();
// console.log(MyArray);
// ( 👆 This Method is used Simply to delte the First value in array.)

// console.log(MyArray.includes(9));
// ( 👆 This Method is used Check the value in an array.)

// console.log(MyArray.indexOf(5));
// ( 👆 This Method is used Check the indexof value in an array.)

const newArray = MyArray.join()
// console.log(MyArray);
// console.log(typeof newArray);
// (👆 This method is used for array binding and to convert an array into a string.)

// console.log(" A " , MyArray);
// const myn1 = MyArray.slice(1 , 6)
// console.log(myn1);
// console.log(" B " , MyArray);
// // (👆 This method is used to perform mini operations on an array. It takes a specific part of the array, 
// //  but the range does not include the last index.)

// const myn2 = MyArray.splice(1 , 6)
// console.log(myn2);
// console.log(MyArray);
// (👆 This method is used to take a specific part of the array. The range includes the last index, but 
// it changes the original array.)