/* Ajax calls for existing checks*/



/* confirm password checks*/

var passwordCorporate = document.getElementById("passwordCorporate")
, confirm_passwordCorporate = document.getElementById("checkConfirmPasswordCorporate");

function validatePasswordCorporate(){
if(passwordCorporate.value != confirm_passwordCorporate.value) {
  confirm_passwordCorporate.setCustomValidity("Passwords Don't Match");
} else {
  confirm_passwordCorporate.setCustomValidity('');
}
}

passwordCorporate.onchange = validatePasswordCorporate;
confirm_passwordCorporate.onkeyup = validatePasswordCorporate;

var password = document.getElementById("passwordStudent")
, confirm_password = document.getElementById("checkConfirmPasswordStudent");

function validatePassword(){
if(password.value != confirm_password.value) {
  confirm_password.setCustomValidity("Passwords Don't Match");
} else {
  confirm_password.setCustomValidity('');
}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
