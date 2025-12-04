// For Loops

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is Best Number");
  }
  console.log(element);
}

for (let i = 2; i <= 5; i++) {
  console.log(`outer loop Value : ${i}`);
  for (let j = 2; j <= 5; j++) {
    // console.log(`inner loop value : ${j} and inner loop ${i}`);
  console.log(i + ' * ' + j + ' = ' + i*j);
  }
}

let MyArray = [
  "1 : Quaid-e-Azam ",
  "2 : Allama Iqbal ",
  "3 : Abdul Qader Khan ",
  "4 : Liaquat Ali Khan ",
  "5 : Unknown Heroes",
];
for (let index = 0; index < MyArray.length; index++) {
  const element = MyArray[index];
  console.log(element);

}

for (let index = 0; index <= 20; index++) {
  if (index == 8) {
    console.log("8 is Detected ");
    break;
  }
  console.log(`index values : ${index}`);
  
}

for (let index = 0; index <= 20; index++) {
  if (index == 8) {
    console.log("8 is Detected ");
    continue;
  }
  console.log(`index values : ${index}`);
  
}
