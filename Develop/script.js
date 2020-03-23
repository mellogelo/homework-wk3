// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function event when clicking generate
function writePassword(event) {
  event.preventDefault();
//prompts user how many characters unsing only digits
  var passlength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  console.log(passlength);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
