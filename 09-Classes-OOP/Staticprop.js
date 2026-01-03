class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username : ${this.username}`);
  }
  createId() {
    return `231`;
  }
}
const Saad = new User("Hitesh");
// console.log(Saad.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const Android = new Teacher("Android", "A@ndroid.com");
Android.logMe();
