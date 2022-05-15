/** @format */
// progress tracker
let key1;
let key2;
let key3;
let key4;
let key5;
let key6;
let selectedOption;

// hamburger btn
const navbarcheckbox = document.getElementById("nav-id");
const humburgerBtn = document.getElementById("humburger");
// password section
const passwordInputBox = document.getElementById("inputPassword4");
const eyeIcon1 = document.getElementById("eye1");
const passwordInputBox2 = document.getElementById("inputPassword5");
const eyeIcon2 = document.getElementById("eye2");
// const securityEyes = document.getElementById("flexCheckDefault");
// form vailditor
const userName = document.getElementById("inputUsername4");
const email = document.getElementById("inputEmail4");
const gender = document.getElementById("inputGender4");
const address = document.getElementById("inputAddress");
const phoneNumber = document.getElementById("inputPhoneNumber4");
const submitBtn = document.getElementById("btn");
//error messages
const usernameError = userName.nextElementSibling;
const emailError = email.nextElementSibling;
const genderError = gender.nextElementSibling;
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
const warning7 = document.getElementById("warning7");

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
eyeIcon1.addEventListener('click', passwordDisplay);
eyeIcon2.addEventListener('click', passwordDisplay);
// securityEyes.addEventListener("click", passwordDisplay);
submitBtn.addEventListener("click", onSubmit);

function onSubmit() {
    usernameCheck();
    validate();
    addressCheck();
    passwordCheck();
    phoneNumberCheck();
    if (key1 + key2 + key3 + key4 + key5 + key6 === 7) {
        alert('THANK YOU VERY MUCH FOR JOINING');
    } else {
        // if (selectedOption === 1) {
        //   genderSelect(1);
        // } else {
        //  noGender();
        genderSelect(storeChoice());
        alert('PLEASE FILL THE FORM PROPERLY');
     }
}

// checking for valid username

function usernameCheck() {
  const input = userName.value;

  if (input === "") {
    usernameError.style.display = "inline-block";
      warning1.classList.add("fa-circle-exclamation");
      key1 = -1;
  } else {
    usernameError.style.display = "none";
    warning1.classList.remove("fa-circle-exclamation");
      warning1.classList.add("fa-circle-check");
      key1 = 1;

  }
}

$("#inputUsername4").on("input", usernameCheck);

// checking for valid address

function addressCheck() {
  const input = address.value;

  if (input === "") {
    addressError.style.display = "inline-block";
      warning3.classList.add("fa-circle-exclamation");
      key2 = -1;
  } else {
    addressError.style.display = "none";
    warning3.classList.remove("fa-circle-exclamation");
      warning3.classList.add("fa-circle-check");
      key2 = 1;
  }
}

$("#inputAddress").on("input", addressCheck);

// checking for valid phone number

function phoneNumberCheck() {
  const input = phoneNumber.value;

  if (input === "") {
    phoneNumberError.style.display = "inline-block";
      warning6.classList.add("fa-circle-exclamation");
      key3 = -1;
  } else {
    phoneNumberError.style.display = "none";
    warning6.classList.remove("fa-circle-exclamation");
      warning6.classList.add("fa-circle-check");
      key3 = 1;
  }
}

$("#inputPhoneNumber4").on("input", phoneNumberCheck);

// checking for valid password

function passwordCheck(params) {
  const passwordSet = passwordInputBox.value;
  const passwordconfirm = passwordInputBox2.value;

  if (passwordSet != passwordconfirm) {
    matchingPassWord1.style.display = "inline-block";
    matchingPassWord2.style.display = "inline-block";
    pass1.style.display = "none";
    pass2.style.display = "none";
    warning4.classList.add("fa-circle-exclamation");
      warning5.classList.add("fa-circle-exclamation");
      key4 = -2;
  } else if (passwordSet === "" || passwordconfirm === "") {
    pass1.style.display = "inline-block";
    pass2.style.display = "inline-block";
    matchingPassWord1.style.display = "none";
    matchingPassWord2.style.display = "none";
    warning4.classList.add("fa-circle-exclamation");
      warning5.classList.add("fa-circle-exclamation");
      key4 = -2;
  } else {
    pass1.style.display = "none";
    pass2.style.display = "none";
    matchingPassWord1.style.display = "none";
    matchingPassWord2.style.display = "none";
    warning4.classList.remove("fa-circle-exclamation");
    warning5.classList.remove("fa-circle-exclamation");
    warning4.classList.add("fa-circle-check");
      warning5.classList.add("fa-circle-check");
      key4 = 2;
  }
}

$("#inputPassword4").on("input", passwordCheck);
$("#inputPassword5").on("input", passwordCheck);

// email validating
const validateEmail = (email) => {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const validate = () => {
  const email = $("#inputEmail4").val();

  if (validateEmail(email)) {
    warning2.classList.add("fa-circle-check");
      warning2.classList.remove("fa-circle-exclamation");
      emailError.style.display = "none";
      key5 = 1;
  } else {
      warning2.classList.add("fa-circle-exclamation");
      warning2.classList.remove('fa-circle-check');
      emailError.style.display = 'inline-block';
      key5 = -1;
  }
  return false;
};

$("#inputEmail4").on("input", validate); 

// checking for valid gender

function genderSelect(selected) {
    // error logic
    if (selected === undefined)
    {
        selected = 0;
    }
    else {
     selectedOption = selected.value;   
    }

    if (selectedOption == 1) {
       warning7.classList.add("fa-circle-check");
        warning7.classList.remove("fa-circle-exclamation");
        genderError.style.display = "none";
       // selectedOption = 0;
        key6 = 1;
    }
    else if (selectedOption == 2) {
     warning7.classList.add("fa-circle-check");
        warning7.classList.remove("fa-circle-exclamation");
        genderError.style.display = "none";
        // selectedOption = 0;
        key6 = 1;
    }
    else {
        noGender();
        key6 = -1;
    }

    storeChoice(selectedOption);

}

function noGender(params) {
    warning7.classList.remove("fa-circle-check");
    warning7.classList.add("fa-circle-exclamation");
    genderError.style.display = "inline-block";
    key6 = -1;
}

const storeChoice = (value) => {
    
    if (value === undefined) {
        value = 0;
        return value;
    } else {
        return value;
    }
};