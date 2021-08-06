// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = (parseInt(userLength()));
    function userLength(){
      prompt("How many characters long do you need your password?")
        if(userLength<=128){
          return userLength
        }
        else{
          return 128
        }
    }

  var charset = (userChar() + "abcdefghijklmnopqrstuvwxyz")
    function userChar() { 
      confirm("Do you need any upercase letters? If yes click 'Ok.'")
      if(userChar === true){
        return("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      }
      else{
        return("")
      }
    }
  
  
  var password="";
  for (var i =0, n =charset.length; i <length; ++i) {
    password += charset.charAt(Math.floor(Math.random()*n));
  }
  debugger
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
