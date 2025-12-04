const Coding = ["Js" , "HTML" , "Css" , "Java" , "Cpp" , "NodeJs"];
// Coding.forEach(  function (value) {
//     console.log(value); 
// });

// Coding.forEach( (item) => {
//     console.log(item);
// });

// function PrintMe(item) {
//     console.log(item);
// }
// Coding.forEach(PrintMe);

Coding.forEach( (value , index , arr)=>{
    console.log(value , index , arr);   
});

const mycode = [
    {
        CourseName: 'Modern Website Devlopment',
        CourseTrainer: 'Sir Syed Saad Raza',
    },
    {
        CourseName: 'Graphics Design',
        CourseTrainer: 'Sir Kashif Lakhani',
    },
    {
        CourseName: 'CIT & Foundation of Computer',
        CourseTrainer: 'Sir Kamran Khokhar',
    },
];
mycode.forEach( (item)=>{
    console.log(item);
});