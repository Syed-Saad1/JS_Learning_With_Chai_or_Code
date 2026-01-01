function multipleby5(num) {
  return num * 5;
}
multipleby5.power = 2;
console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function Createuser(username, Score) {
  this.username = username;
  this.Score = Score;
}
Createuser.prototype.increment = function () {
  Score++;
};
Createuser.prototype.printMe = function () {
  console.log(`Score is ${this.Score}`);
};
const chai = new Createuser("Chai", 25);
const tea = new Createuser("tea", 250);

chai.printMe();
tea.printMe();

