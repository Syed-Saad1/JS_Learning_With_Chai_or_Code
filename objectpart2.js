// // 👇 Constructor and Singletone 

const  User1 = new Object()
User1.id = "saad123"
User1.name = "Syed Saad Raza "
User1.isloggedin = true 
// // console.log(User1);

// // 👇 Nested Object
// const  User2 = {
//     Email : "SyedSaadFurqan10@gmail.com",
//     fullname : {
//         UserFulname : {
//             firstname :  "Syed Saad",
//             lastname : " Raza",
//         }
//     }
// }
// console.log(User2.fullname.UserFulname.firstname);

// // 👇 Murch two and More Object
// const obj1 = { 1 : "a" , 2 : "b"}
// const obj2 = { 3 : "a" , 4 : "b"}
// const obj3 = { 5 : "a" , 6 : "b"}

// // 👇 two type Murching Syntax 
// const obj4 = Object.assign({}, obj1 , obj2 , obj3 )
// const obj5 = {...obj1 , ...obj2 , ...obj3}
// console.log(obj5);


// When given Value dataBase so this Syntax
const dataBase = [
    {
        id : 123897,
        name : "Saad"
    },
    {
        id : 123897,
        name : "Saad"
    },
    {
        id : 123897,
        name : "Saad"
    },
    {
        id : 123897,
        name : "Saad"
    },
    {
        id : 123897,
        name : "Saad"
    },
]

// console.log(dataBase[0].id);
console.log(User1);


//  👇 given object keys but in Array 
console.log(Object.keys(User1));

//  👇 given object Values but in Array 
console.log(Object.values(User1));

//  👇 given object keys&Values but any value convert array
console.log(Object.entries(User1));

// 👇 checks if a property really belongs to the object itself.
console.log(User1.hasOwnProperty('isloggedin'));
