let formLogin = document.getElementById("formLogin");
let signName = document.getElementById("sign-name");
let signEmail = document.getElementById("sign-email");
let signPass = document.getElementById("sign-pass");
let btnSubmit = document.querySelector(".btn-submit");
let alertName = document.querySelector(".alert-name");
let alertEmail = document.querySelector(".alert-email");
let alertPass = document.querySelector(".alert-pass");
let alertExist = document.querySelector(".alert-exist");
let alertSucess = document.querySelector(".alert-sucess");
let userList = [];

if (localStorage.getItem("userList") !== null) {
  userList = JSON.parse(localStorage.getItem("userList"));
}

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  if (checkAllInputsValid() == true) {
    addUsers();
  }
});

function validationInputs(regex, element, alertMsg) {
  let pattern = regex;
  if (pattern.test(element.value)) {
    alertMsg.classList.add("d-none");
    return true;
  } else {
    alertMsg.classList.remove("d-none");
    return false;
  }
}

function checkAllInputsValid() {
  if (
    validationInputs(/^[A-Z][a-zA-Z' -]{1,49}$/, signName, alertName) == true &&
    validationInputs(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      signEmail,
      alertEmail
    ) == true &&
    validationInputs(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      signPass,
      alertPass
    ) == true
  ) {
    console.log("all Valid");
    return true;
  } else {
    console.log("somthing is not valid");
    return false;
  }
}

function addUsers() {
  users = {
    userName: signName.value,
    userEmail: signEmail.value,
    userpass: signPass.value,
  };
  if (checkEmailExist(users) == true) {
    alertExist.classList.remove("d-none");
  } else {
    alertExist.classList.add("d-none");
    alertSucess.classList.remove("d-none");
    userList.push(users);
    console.log(users);
    console.log(userList);
    localStorage.setItem("userList", JSON.stringify(userList));
    setTimeout(function () {
      window.location.href = "./login.html";
    }, 3000);
  }
}

function checkEmailExist(users) {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].userEmail.toLowerCase() === users.userEmail.toLowerCase()) {
      return true;
    }
  }
}
// function clearInputs() {
//     signName.value = null;
//     signEmail.value = null;
//     signPass.value = null;
// }
