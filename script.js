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