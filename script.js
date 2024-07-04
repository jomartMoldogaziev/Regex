let emailValid = false;
let passwordValid = false;

function validateEmail(event) {
    let value = event.target.value;
    let p = document.getElementById('validation');
    let emailInput = document.getElementById('email');
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    emailValid = re.test(value);
    if (emailValid) {
        p.innerHTML = '<span class="true">Почтаңды туура жаздың</span>';
        emailInput.classList.remove('invalid');
    } else {
        p.innerHTML = '<span class="false">Почтаңды туура жаз</span>';
        emailInput.classList.add('invalid');
    }
}

function validatePassword(event) {
    let value = event.target.value;
    let p = document.getElementById('passwordValidation');
    const passwordRegex = /^(?=.*[0-9])[0-9a-zA-Z]{6,}$/;
    passwordValid = passwordRegex.test(value);
    passwordValid
        ? p.innerHTML = '<span class="true">Парольду туура жаздың</span>'
        : p.innerHTML = '<span class="false">Парольду туура жаз</span>';
}

function submitForm() {
    if (emailValid && passwordValid) {
        window.location.href = "http://main.iksu.kg/";
    } else {
        alert("Баардык талааларды туура толтуруңуз.");
    }
}