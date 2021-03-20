// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defined Variables for my arrays
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!","#","$","%","&","{","|","}","~"];
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
  var numOfChars = window.prompt("How many characters would you like your password to contain?");
  //alert user if character length is <8 or >128
  if (numOfChars < 8 || numOfChars> 128) {
    alert("Password must be between 8 and 128 characters");
    return generatePassword();
  }else if (!numOfChars) {
    alert("You must enter something");
    return generatePassword();
  }else {
    numOfChars;
  }

  //ask user remaining character questions in if statements and concat passwordContainer along the way so that the conditions will keep being added if true
  
  var special = window.confirm("Click OK to confirm including special characters");
  if (special) {
    passwordContainer = passwordContainer.concat(specialChars);
  }
  
  var numeric = window.confirm("Click OK to confirm including numeric characters");
  if (numeric) {
      passwordContainer = passwordContainer.concat(numericChars);
  }

  var lowerCase = window.confirm("Click OK to confirm lowercase characters");
  if (lowerCase) {
      passwordContainer = passwordContainer.concat(lowerCaseChars);
  }

  var upperCase = window.confirm("Click OK to confirm uppercase characters");
  if (upperCase) {
      passwordContainer = passwordContainer.concat(upperCaseChars);
  }

  //if user responds "cancel" to all, inform them they must select at least one character type

  if(!special && !numeric && !lowerCase && !upperCase) {
    alert("Password must include at least one valid character type");
    return generatePassword();
  }

  console.log (passwordContainer);
    //if all character types are selected
  // } else if (special && numeric && lowerCase && upperCase) {
    //right now this is just the contactination of all my character arrays
    // special.concat([numeric[,lowerCase[,upperCase]]])
    //right now this is my starting place for pulling a random index from the concatinated array
    // [Math.floor(Math.random())]
    //right now this is my starting place for the for loop I will create to create a password of numOfChars length
    // for(i = 0; i <= numOfChars; i++){}

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

 