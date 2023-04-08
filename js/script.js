
let form = document.getElementById("form");

//username
let username = document.getElementById("username");
let usernameSpan = document.querySelector(".username-span")

//email
let email = document.getElementById("email");
let emailSpan = document.querySelector(".email-span")

//password
let password = document.getElementById("password");
let passwordSpan = document.querySelector(".pass-span")

//password check
let passwordCheck = document.getElementById("pass-check");
let passwordCheckSpan = document.querySelector(".pass-check-span")



form.addEventListener("submit", function onSubmit(e) {
    e.preventDefault();
    if (username.value === "") {
        username.style.borderColor = "red";
        usernameSpan.style.color = "red"
        usernameSpan.innerHTML = "Nome inválido"
    } else {
        username.style.borderColor = "green";
        usernameSpan.innerHTML = ""
    }

    if (email.value === "") {
        email.style.borderColor = "red"
        emailSpan.style.color = "red"
        emailSpan.innerHTML = "Email inválido"
    }
    else {
        email.style.borderColor = "green";
        emailSpan.innerHTML = ""
    }

    if (password.value === "") {
        password.style.borderColor = "red"
        passwordSpan.style.color = "red"
        passwordSpan.innerHTML = "Password inválida"
    }
    else {
        if (password.value !== passwordCheck.value) {

            password.style.borderColor = "red"
            passwordSpan.style.color = "red"
            passwordSpan.innerHTML = "As passwords não combinam"

        }
        else {
            password.style.borderColor = "green";
            passwordSpan.innerHTML = ""
        }

    }

    if (passwordCheck.value === "") {
        passwordCheck.style.borderColor = "red"
        passwordCheckSpan.style.color = "red"
        passwordCheckSpan.innerHTML = "Password inválida"
    }
    else {
        if (passwordCheck.value !== password.value) {

            passwordCheck.style.borderColor = "red"
            passwordCheckSpan.style.color = "red"
            passwordCheckSpan.innerHTML = "As passwords não combinam"

        }
        else {
            passwordCheck.style.borderColor = "green";
            passwordCheckSpan.innerHTML = ""
        }
    }

})

