let email = document.querySelector("#email");
let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");


let error = [];
function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) 
		{ error.push(input.placeholder.slice(6, 14) +  ` is required`); }
    
    if (validity.patternMismatch) 
		{ error.push('Incorrect email format.'); }
    
    if (validity.tooShort)
        {error.push('Password is too short.'); }
}

function checkAll() {
    error = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    let errorDiv = document.querySelector('#error');
    errorDiv.style.display = "block";
    errorDiv.innerHTML = error.join('. \n');
}

function sendData(event){
  event.preventDefault();
  checkAll();
  
  let user = {
    email: email.value,
    name: name.value,
    surname: surname.value,
    password: password.value,
  }

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
  .then(response => response.json())
  .then(user => {
    console.log(user)
  })
  .catch(error => console.log(error));
}

btn.addEventListener("click", sendData);
