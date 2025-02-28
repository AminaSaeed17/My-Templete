let loginForm = document.querySelector(".loginForm");
let emailLogin = document.querySelector(".emailLogin");
let passLogin = document.querySelector(".passLogin");
let alertInvalid = document.querySelector(".alert-invalid");
let userList = [];

if (localStorage.getItem("userList") != null) {
    userList = JSON.parse(localStorage.getItem("userList"));
    console.log(userList);
}

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    login();
});

function login() {
    users = {
        emailLoin: emailLogin.value,
        passLogin: passLogin.value,
    };
    if (isLoginValid(users) == true) {
        console.log("true");
        window.location.href = "../home.html";
    } else {
        alertInvalid.classList.remove("d-none");
    }
}

function isLoginValid(users) {
    for (let i = 0; i < userList.length; i++) {
        // console.log(userList[i].userEmail);
        if (
            userList[i].userEmail.toLowerCase() === users.emailLoin.toLowerCase() &&
            userList[i].userpass.toLowerCase() === users.passLogin.toLowerCase()
        ) {
            console.log("true");
            localStorage.setItem("name", userList[i].userName);
            return true;
        }
    }
}
