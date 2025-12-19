// document.getElementById("img2").onclick = () => {
//   alert("Click the img two");
// };

// document.getElementById('img3').addEventListener("mousemove" , ()=>{
//     alert('Touch the Mouse and Show the Message')
// })

// attachmentEvent()
// jQuery - onEventLissenear
// type , timeStamp , defaultPrevented
// target , toElement , SrcElement , CurrentTarget
// CLient X , Client Y , Screen X , Screen Y
// altkey , Ctrlkey , ShiftKey , KeyCode

// document.getElementById("img4").addEventListener(
//   "click",
//   (e) => {
//     console.log(e);
//   },
//   false
// );

// document.getElementById("img4").addEventListener(
//   "click",
//   (e) => {
//     console.log("Clicked the img fourth");
//     e.stopPropagation();
//   },
//   false
// );

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log("Clicked the inside in Ul");
//   },
//   false
// );

document.getElementById("google").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("clicked it");
  },
  false
);

document.getElementById("images").addEventListener("click", (e) => {
  console.log(e.target.parentNode.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    
    let reomoveit = e.target.parentNode;
    reomoveit.remove();
  }
});
