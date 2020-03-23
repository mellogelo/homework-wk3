// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables for Criteria
var lowercase;
var uppercase;
var characters;
var numbers;

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
  if (!passlength) {
    alert('This needs a value');
  } else if (passlength < 8 || passlength > 128) {
    passlength = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    lowercase = confirm("Will this contain lowercase?")
    uppercase = confirm("Will this contain uppercase?")
    characters = confirm("Will this contain character?")
    numbers = confirm("Will this contain numbers?")
  };

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
