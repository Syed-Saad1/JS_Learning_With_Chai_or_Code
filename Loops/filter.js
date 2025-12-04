// let Coding = ["JS" , "CSS" , "HTML" , "Node"];
// const Store = Coding.forEach( (item) => {
//     // console.log(item);
//     return item 
// })
// console.log(Store);

// let Mynum = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// let Store = Mynum.filter( (Number) => Number >= 3 );
// console.log(Store);

// let newNum = Mynum.filter( (Number) => {
//     return Number <= 5;
// })

// const newNum = [];
// Mynum.forEach( (Number) => {
//     if (Number <= 6) {
//         newNum.push(Number)
//     }
// })

// console.log(newNum);

let ArrayObj = [
    {title : 'BookOne' , BookName : 'Computer Science' , Published : 1998,
        Edition : 2012,
    },
    {title : 'BookTwo' , BookName : 'Science' , Published : 2001,
        Edition : 2022,
    },
    {title : 'BookThree' , BookName : 'History' , Published : 1990,
        Edition : 2003,
    },
    {title : 'BookFour' , BookName : 'Computer Science' , Published : 2012,
        Edition : 2019,
    },
    {title : 'BookFive' , BookName : 'Gernal Knowledge' , Published : 1990,
        Edition : 2019,
    },
    {title : 'BookSix' , BookName : 'Computer Science' , Published : 2023,
        Edition : 2024,
    },
    {title : 'BookSeven' , BookName : 'Islamic History' , Published : 1990,
        Edition : 2025,
    },
]
// different Syntaxes
// const Books = ArrayObj.filter( (BK) => BK.BookName === 'Computer Science' );
// const Books = ArrayObj.filter( (BK) => BK.Published >= 2000 );
// const Books = ArrayObj.filter( (BK) => {
//     return BK.Published >= 1990 && BK.BookName === 'History'
// });
const Books = ArrayObj.filter( (BK) => {
    return BK.Published >= 2000 && BK.Edition >= 2000
});

console.log(Books);
