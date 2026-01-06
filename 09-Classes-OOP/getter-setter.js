class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

   get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
     this._email = value
  }

  get password() {
    return `${this._password}Saad`
  }
  set password(value) {
    this._password = value
  }
}
const Saad = new User("saad@ai.com", "123");
console.log(Saad.email); 
