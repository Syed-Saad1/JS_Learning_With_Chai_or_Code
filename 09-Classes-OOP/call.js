function setusername(username) {
  // Complex DB Calls
  this.username = username;
  console.log("Called");
}

function Createuser(username, email, password) {
  setusername.call(this, username);
  this.email = email;
  this.password = password;
}

const push = new Createuser(
  "Saad Raza",
  "saadraza12@linkedin.com",
  "ssadf3455552"
);
console.log(push);
