// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defined Variables
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharacters = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!","#","$","%","&","{","|","}","~"];
var numOfCharacters = window.prompt("How many characters would you like your password to contain?");
var special = window.confirm("Click OK to confirm including special characters");
var numeric = window.confirm("Click OK to confirm including numeric characters");
var lowerCase = window.confirm("Click OK to confirm lowercase characters");
var upperCase = window.confirm("Click OK to confirm uppercase characters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numOfCharacters = window.prompt("How many characters would you like your password to contain?");
  console.log(numOfCharacters);
  if (numOfCharacters < 8 || numOfCharacters> 128) {
    alert("Password must be between 8 and 128 characters");
  } else {
    console.log (special);
    console.log (numeric);
    console.log (lowerCase);
    console.log (upperCase);
  };
  return "Temporary Password";
};

  
  //TODO: Write the code that asks the user about the parameters for their password
  //TODO: Use those parameters to generate a new password
  //TODO: Return that password

  

//Call the function
//console.log(generatePassword);
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// create a series of prompts:
//these are my prompts
// else if (length > 8 && length < 129)
//.concat combines multiple arrays
//for loop to get computer to pick random number of variables
//then you have to store this and return it