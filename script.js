// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defined Variables
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!","#","$","%","&","{","|","}","~"];
var numOfChars = window.prompt("How many characters would you like your password to contain?");
var special = window.confirm("Click OK to confirm including special characters");
var numeric = window.confirm("Click OK to confirm including numeric characters");
var lowerCase = window.confirm("Click OK to confirm lowercase characters");
var upperCase = window.confirm("Click OK to confirm uppercase characters");
var passwordContainer = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password based on user input
function generatePassword() {
  //prompt user to enter desired number of password characters
  console.log(numOfChars);
  //alert user if character length is <8 or >128
  if (numOfChars < 8 || numOfChars> 128) {
    alert("Password must be between 8 and 128 characters");
    return generatePassword;

  //ask user remaining character questions
  }console.log (special);
  if (special) {
    passwordContainer = passwordContainer.concat(specialChars);
  };
  
  console.log (numeric);
  if (numeric) {
      passwordContainer = passwordContainer.concat(numericChars);
  };

  console.log (lowerCase);
  if (lowerCase) {
      passwordContainer = passwordContainer.concat(lowerCaseChars);
  };
  
  console.log (upperCase);
  if (upperCase) {
      passwordContainer = passwordContainer.concat(upperCaseChars);
    } 
  };
  //everything above this works
  //if user responds "cancel" to all, inform them they must select at least one character type

  if(!special && !numeric && !lowerCase && !upperCase) {
    alert("Password must include at least one valid character type");

    //if all character types are selected
  // } else if (special && numeric && lowerCase && upperCase) {
    //right now this is just the contactination of all my character arrays
    // special.concat([numeric[,lowerCase[,upperCase]]])
    //right now this is my starting place for pulling a random index from the concatinated array
    // [Math.floor(Math.random())]
    //right now this is my starting place for the for loop I will create to create a password of numOfChars length
    // for(i = 0; i <= numOfChars; i++){}
  }

  return "Temporary Password";
};



// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//.concat combines multiple arrays
//for loop to get computer to pick random number of variables
//then you have to store this and return it
 
  //TODO: Write the code that asks the user about the parameters for their password
  //TODO: Use those parameters to generate a new password
  //TODO: Return that password

  //password will be numOfCharacters long made up of a random assortment of special, numeric, lowerCase, and upperCase

 