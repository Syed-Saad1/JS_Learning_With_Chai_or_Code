class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, Password) {
    super(username);
    this.email = email;
    this.Password = Password;
  }
  addcourse() {
    console.log(`A New Course Added By ${this.username}`);
  }
}

const push = new Teacher("Sir Syed Saad Raza" , "saadraza12211@gmail.com" , 2134)
// push.addcourse()
console.log(push);

const teacher2 = new User ('Sir Tahir Khan')
teacher2.logMe()