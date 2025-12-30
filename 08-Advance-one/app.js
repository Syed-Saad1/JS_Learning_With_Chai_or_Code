const requestURL = "https://api.github.com/users/Syed-Saad1";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    // console.log(typeof data);
    const card = document.getElementById("user");
    card.innerHTML = `
  <p><strong>User id :</strong>  ${data.id}</p>
  <p><strong>User Name :</strong>  ${data.name}</p>
  <p><strong>User Email :</strong>  ${data.email}</p>
  <p><strong>Website :</strong>  <a href="https://alnajia.org/" target="_blank" >https://alnajia.org/</a></p>
  `;
  }
};
xhr.send();


