// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = (parseInt(userLength()));
    function userLength(){
      var userInput = prompt("How many characters long do you need your password?")
        if(userInput>128){
            return 128
          }
          else{
            return userInput
          }
    }

  var charset = (userLow()+userUp())
    function userUp() { 
      confirm("Do you need any upercase letters? If yes click 'Ok.'")
      if(userUp === true){
        return("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      }
      else{
        return("")
      }
    }
    function userLow() { 
      confirm("Do you want any lowercase letters? If yes click 'Ok.'")
      if(userLow === true){
        return("abcdefghijklmnopqrstuvwxyz")
      }
      else{
        return("")
      }
    }
    //function userNum(){
      //confirm("Do you need any numbers? If yes click 'Ok.'")
      //if(userNum === true){
        //console.log("this is working")
      //}
      //else {
        //return("")
      //}
    //}
  
  var password="";
  for (var i =0, n =charset.length; i <length; ++i) {
    password += charset.charAt(Math.floor(Math.random()*n));
  }
  var passwordText = document.querySelector("#password");
debugger
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
