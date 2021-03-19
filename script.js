// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = [abcdefghijklmnopqrstuvwxyz];
var upperCaseCharacters = [ABCDEFGHIJKLMNOPQRSTUVWXYZ];
var numericCharacters = [0123456789];
var specialCharacters = [!#$%&{|}~];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

  //TODO: Write the code that asks the user about the parameters for their password
  //TODO: Use those parameters to generate a new password
  //TODO: Return that password

  return "Temporary Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// create a series of prompts:
//these are my prompts
window.prompt("How many characters would you like your password to contain?");
if (numOfCharacters <8 || >128) {
  window.prompt(Password must be between 8 and 128 characters);
}
window.confirm("Click OK to confirm including special characters");
window.confirm("Click OK to confirm including numeric characters");
window.confirm("Click OK to confirm lowercase characters");
window.confirm("Click OK to confirm uppercase characters");

//When you click generate password, first prompt: "How many characters would you like your password to contain?" window.prompt
var numOfCharacters = window.prompt("How many characters would you like your password to contain?");
console.log(numOfCharacters);
//if the user enters less than 8 or more than 128 characters, then an error alert needs to appear
//THEN second prompt: Click OK to confirm including special characters
var special = window.confirm("Click OK to confirm including special characters");
console.log(special);
//Third prompt: Click OK to confirm including numeric characters
var numeric = window.confirm("Click OK to confirm including numeric characters");
//if they hit okay, then password needs to include numeric characters. if they hit cancel, it needs to not include them.
//Fourth prompt: Click OK to confirm lowercase characters
var lowerCase = window.confirm("Click OK to confirm lowercase characters");
//if ok, include, if cancel, exclude
//Fifth prompt: Click OK to confirm uppercase characters
var upperCase = window.confirm("Click OK to confirm uppercase characters");
//if ok, include, if cancel, exclude
//they must have chosen at least one option. if no options chosen, I need an error message and a restart form option
//given the above, then a dynamically generated password is generated 
//the password needs to be generated based on the following: password will be x characters long and consist of a RANDOM combo of the selected characters
//


// else if (length > 8 && length < 129)

//.concat combines multiple arrays

//for loop to get computer to pick random number of variables

//then you have to store this and return it















