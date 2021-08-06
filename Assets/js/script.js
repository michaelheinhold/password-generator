// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  
  
  
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyz",
      password="";
  for (var i =0, n =charset.length; i <length; ++i) {
    password += charset.charAt(Math.floor(Math.random()*n));
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
