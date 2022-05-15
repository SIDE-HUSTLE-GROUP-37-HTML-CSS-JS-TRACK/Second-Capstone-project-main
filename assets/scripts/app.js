/** @format */

// hamburger btn
const navbarcheckbox = document.getElementById("nav-id");
const humburgerBtn = document.getElementById("humburger");
// password section
const passwordInputBox = document.getElementById("inputPassword4");
const eyeIcon1 = document.getElementById("eye1");
const passwordInputBox2 = document.getElementById("inputPassword5");
const eyeIcon2 = document.getElementById("eye2");
const securityEyes = document.getElementById("flexCheckDefault");
// form vailditor
const userName = document.getElementById("inputUsername4");
const email = document.getElementById("inputEmail4");
const address = document.getElementById("inputAddress");
const phoneNumber = document.getElementById("inputPhoneNumber4");
const submitBtn = document.getElementById("btn");
//error messages
const usernameError = userName.nextElementSibling;
const emailError = email.nextElementSibling;
const addressError = address.nextElementSibling;
const phoneNumberError = phoneNumber.nextElementSibling;
const pass1 = passwordInputBox.nextElementSibling;
const pass2 = passwordInputBox2.nextElementSibling;
const matchingPassWord1 = pass1.nextElementSibling;
const matchingPassWord2 = pass2.nextElementSibling;

//warning via user input
const warning1 = document.getElementById("warning1");
const warning2 = document.getElementById("warning2");
const warning3 = document.getElementById("warning3");
const warning4 = document.getElementById("warning4");
const warning5 = document.getElementById("warning5");
const warning6 = document.getElementById("warning6");

function passwordDisplay(params) {
  if (passwordInputBox.type === "password" && passwordInputBox2.type === "password") {
    passwordInputBox.type = "text";
    passwordInputBox2.type = "text";
    eyeIcon1.classList.remove("fa-eye-slash");
    eyeIcon1.classList.add("fa-eye");
    eyeIcon2.classList.remove("fa-eye-slash");
    eyeIcon2.classList.add("fa-eye");
  } else {
    passwordInputBox.type = "password";
    passwordInputBox2.type = "password";
    eyeIcon1.classList.remove("fa-eye");
    eyeIcon1.classList.add("fa-eye-slash");
    eyeIcon2.classList.remove("fa-eye");
    eyeIcon2.classList.add("fa-eye-slash");
  }
}

function hamburger(params) {
  // toggle display
  navbarcheckbox.classList.toggle("visible");
}
humburgerBtn.addEventListener("click", hamburger);
securityEyes.addEventListener("click", passwordDisplay);
submitBtn.addEventListener("click", onSubmit);

function onSubmit() {
  usernameCheck();
  addressCheck();
  passwordCheck();
  phoneNumberCheck();
  const formInputState = "";
  warningVisible(formInputState);
}

function warningVisible(formstate) {
  if (formstate === "success") {
    alert("thank you for your time");
  } else {
    warning2.classList.add("fa-circle-exclamation");
    // warning3.classList.add("fa-circle-exclamation");
    // warning4.classList.add("fa-circle-exclamation");
    // warning5.classList.add("fa-circle-exclamation");
    // warning6.classList.add("fa-circle-exclamation");
  }
}

function usernameCheck() {
  const input = userName.value;

  if (input === "") {
    usernameError.style.display = "inline-block";
    warning1.classList.add("fa-circle-exclamation");
  } else {
    usernameError.style.display = "none";
    warning1.classList.remove("fa-circle-exclamation");
    warning1.classList.add("fa-circle-check");
  }
}

function addressCheck() {
  const input = address.value;

  if (input === "") {
    addressError.style.display = "inline-block";
    warning3.classList.add("fa-circle-exclamation");
  } else {
    addressError.style.display = "none";
    warning3.classList.remove("fa-circle-exclamation");
    warning3.classList.add("fa-circle-check");
  }
}

function phoneNumberCheck() {
  const input = phoneNumber.value;

  if (input === "") {
    phoneNumberError.style.display = "inline-block";
    warning6.classList.add("fa-circle-exclamation");
  } else {
    phoneNumberError.style.display = "none";
    warning6.classList.remove("fa-circle-exclamation");
    warning6.classList.add("fa-circle-check");
  }
}

function passwordCheck(params) {
  const passwordSet = passwordInputBox.value;
  const passwordconfirm = passwordInputBox2.value;

  if (passwordSet != passwordconfirm) {
    matchingPassWord1.style.display = "inline-block";
    matchingPassWord2.style.display = "inline-block";
    warning4.classList.add("fa-circle-exclamation");
    warning5.classList.add("fa-circle-exclamation");
  } else if (passwordSet === "" || passwordconfirm === "") {
    pass1.style.display = "inline-block";
    pass2.style.display = "inline-block";
    warning4.classList.add("fa-circle-exclamation");
    warning5.classList.add("fa-circle-exclamation");
  } else {
    pass1.style.display = "none";
    pass2.style.display = "none";
    matchingPassWord1.style.display = "none";
    matchingPassWord2.style.display = "none";
    warning4.classList.remove("fa-circle-exclamation");
    warning5.classList.remove("fa-circle-exclamation");
    warning4.classList.add("fa-circle-check");
    warning5.classList.add("fa-circle-check");
  }
}
