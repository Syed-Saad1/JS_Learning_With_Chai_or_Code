// After ES6

class User1 {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptopassword() {
    return `${this.password}abc`;
  }
  changeusername() {
    return `${this.username.toLowerCase()}`;
  }
}
const Wrap = new User1("SAAD RAZA", "syed@yt.com", "123");
console.log(Wrap.encryptopassword());
console.log(Wrap.changeusername());

// Behind the Scenes (BTS)

function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptopassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeusername = function(){
    return `${this.username.toLowerCase()}`
}
const tea = new User2("")