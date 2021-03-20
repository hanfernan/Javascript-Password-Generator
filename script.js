// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defined Global Variables for my arrays
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!","#","$","%","&","{","|","}","~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password based on user input
function generatePassword() {
  //Define local variables
  var passwordContainer = [];
  var finalPassword = "";
  //prompt user to enter desired number of password characters and create variable
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
    //if special = true add it to passwordContainer
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

  //logs all of the available characters based on user input

  //create a random password based on available characters stored in passwordContainer
  for(i = 0; i <= numOfChars; i++) {

    var randomIndex= Math.floor(Math.random() * passwordContainer.length);

    var randomPassword = passwordContainer[randomIndex];

    finalPassword += randomPassword;

  }

  return finalPassword;
};

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);