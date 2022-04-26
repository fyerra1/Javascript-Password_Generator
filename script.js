// Password characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "1234567890";
var master = "";
var setCount = 0;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate random password
function generatePassword() {
  // Prompts for preferred password length 
passwordLength = prompt("Enter desired password length\n(8 - 128 characters)") 
  if (passwordLength < 8 || passwordLength > 128) {
  alert("Password length needs to be 8 - 128")
  return "";
}
  // Confirms types of characters to inlcude in password
addLowerCase = confirm("Include lowercase characters?");
addUpperCase = confirm("Include uppercase characters?");
addSpecial = confirm("Include special characters?");
addNumbers = confirm("Include number characters?");
  
if(addLowerCase) {
  master = master.concat(lowerCase); // Adds set of characters to 'master' list
  var gLowerCase = lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)); // Selects a character from preferred set to guarantee inclusion of set in generated password
  setCount++; // Increases count of preferred sets
  } else {gLowerCase = "";}
if(addUpperCase) {
   master = master.concat(upperCase);
   var gUpperCase = upperCase.charAt(Math.floor(Math.random() * upperCase.length));
   setCount++;
  } else {gUpperCase = "";}
if(addSpecial) {
  master = master.concat(special);
  var gSpecialCase = special.charAt(Math.floor(Math.random() * special.length));
  setCount++;
  }else {gSpecialCase = "";}
if(addNumbers) {
  master = master.concat(numbers);
  var gNumbers = numbers.charAt(Math.floor(Math.random() * numbers.length));
  setCount++;
  }else {gNumbers = "";}

  // Randomly picks charcters from 'master' list
var remainingChar = "";
for (var i = 0; i < (passwordLength - setCount) ; i++) {
  remainingChar += master.charAt(Math.floor(Math.random() * master.length));
  }
  // Creates final password
var result = gLowerCase + gUpperCase + gSpecialCase + gNumbers + remainingChar; 
 
return result;
}




