// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables
var lowercase = false;
var uppercase = false;
var characters = false;
var numbers = false;
var passlength = 0;
var userPass = "";
var newpassword = ""
var upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerEl = 'abcdefghijklmnopqrstuvwxyz';
var numEl = '0123456789';
var charEl = '~!@#$%^&*()_+=';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//When user clicks, triggers multiple functions
generateBtn.addEventListener("click", function () {
  event.preventDefault();
  userInput();
  generateUserPass();
  generatePass();
  alert(userPass);
});

function userInput() {
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
    characters = confirm("Will this contain characters?")
    numbers = confirm("Will this contain numbers?")
  }
};

  function generateUserPass() {
    if (lowercase === true) {
      newpassword += lowerEl;
    }
    if (uppercase === true) {
      newpassword += upperEl;
    }
    if (characters === true) {
      newpassword += charEl;
    }
    if (numbers === true) {
      newpassword += numEl;
    }

    return newpassword;
  }

  function generatePass() {
    var userPass = generateUserPass()
    for (let i = 0; i < passlength; i++) {
      userPass += newpassword.charAt(Math.floor(Math.random() * newpassword.length));
    }
  }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
