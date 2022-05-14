const passwordInputBox = document.getElementById("inputPassword4");
const eyeIcon1 = document.getElementById('eye1');
const passwordInputBox2 = document.getElementById("inputPassword5");
const eyeIcon2 = document.getElementById('eye2');
const securityEyes = document.getElementById("flexCheckDefault");


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
securityEyes.addEventListener("click", passwordDisplay);