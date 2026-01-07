const User = {
  _email: "Saad@gmail.com",
  _password: "1234400",

  get email(){
    return this._email.toUpperCase()
  },
  set email(value){
    this._email = value
  }
};
const Saad = Object.create(User)
console.log(Saad.email);
