// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

  //TODO: Write the code that asks the use about the parameters for their password
  //TODO: Use those parameters to generate a new password
  //TODO: Return that password

  return "Temporary Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// create a series of prompts:
//When you click generate password, first prompt: "How many characters would you like your password to contain?" window.prompt
//THEN second prompt: Click OK to confirm including special characters
//Third prompt: Click OK to confirm including numeric characters
//Fourth prompt: Click OK to confirm lowercase characters
//Fifth prompt: Click OK to confirm uppercase characters
//then a dynamically generated password is generated 
//passowrd must be at least 8 characters (this will prompt an error if <8 >129 is entered for first prompt)
//clicking cancel on options after that will allow the user to continue (i.e they can opt out of numbers or upper case etc.)
//can have any combo of number lower case upper case special characters

//these are my prompts
window.prompt("How many characters would you like your password to contain?");
window.confirm("Click OK to confirm including special characters");
window.confirm("Click OK to confirm including numeric characters");
window.confirm("Click OK to confirm lowercase characters");
window.confirm("Click OK to confirm uppercase characters");

//these are the variables assigned to my prompts

var length = window.prompt("How many characters would you like your password to contain?");
var special = window.confirm("Click OK to confirm including special characters");
var numeric = window.confirm("Click OK to confirm including numeric characters");
var lowerCase = window.confirm("Click OK to confirm lowercase characters");
var upperCase = window.confirm("Click OK to confirm uppercase characters");

//generate password based on the following
//must be between 8 and 128 characters and contain AT LEAST one character type

if (length<8 && length >129) {
  return "Password must be more than 8 characters or less than 129 characters";
}

// else if (length > 8 && length < 129)