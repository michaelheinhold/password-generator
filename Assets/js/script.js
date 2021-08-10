// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar="!@#$%^&*()_+=-";
var passwordLength;
var checkUpChar;
var checkNumChar;
var checkSpecialChar;

//determines lenght of password
function defineLength(){
  passwordLength = prompt("Choose a length between 8-128 characters for your password.");

    if(passwordLength < 8) {
      alert("Please choose a length between 8-128 characters.");
      defineLength();
    } else if (passwordLength>128) {
      alert("Please choose a length between 8-128 characters.");
      defineLength();
    } else if (isNaN(passwordLength)) {
      alert("Please choose a length between 8-128 characters.");
      defineLength();
    } else {
      alert("Now you will be asked if you need uppercase letters, numbers, or any special characters. If you select no on all, you will be given a password with only lowercase letters.")
    }
    return passwordLength;
}


//determines if uppercase is needed
function determineUpChar() {
  checkUpChar = prompt("Do you need Uppercase letters? Respond 'Yes' or 'No'");
    checkUpChar=checkUpChar.toLowerCase();
  
    if(checkUpChar === null || checkUpChar === "") {
      alert("Please respond with 'Yes' or 'No'");
      
      determineUpChar();
      
    }else if (checkUpChar === 'yes' || checkUpChar === 'y'){
      checkUpChar = true;
      return checkUpChar;
    }else if (checkUpChar === 'no' || checkUpChar === 'n'){
      checkUpChar = false;
      return checkUpChar;
    }else {
      alert("Please respond with 'Yes' or 'No'");
      determineUpChar();
    }
    return checkUpChar;
}

// determins is numbers are needed
function determineNumChar() {
  checkNumChar = prompt("Do you need Numbers? Respond 'Yes' or 'No'");
    checkNumChar= checkNumChar.toLowerCase();

    if(checkNumChar === null || checkNumChar === "") {
      alert("Please respond with 'Yes' or 'No'");
      
      determineNumChar();
      
    }else if (checkNumChar === 'yes' || checkNumChar === 'y'){
      checkNumChar = true;
      return checkNumChar;
    }else if (checkNumChar === 'no' || checkNumChar === 'n'){
      checkNumChar = false;
      return checkNumChar;
    }else {
      alert("Please respond with 'Yes' or 'No'");
      determineNumChar();
    }
    return checkNumChar;
}

//determines if special characters are needed
function determineSpecialChar() {
  checkSpecialChar = prompt("Do you need Special Characters? Respond 'Yes' or 'No'");
    checkSpecialChar=checkSpecialChar.toLowerCase();
  
    if(checkSpecialChar === null || checkSpecialChar === "") {
      alert("Please respond with 'Yes' or 'No'");
      
      determineSpecialChar();
      
    }else if (checkSpecialChar === 'yes' || checkSpecialChar === 'y'){
      checkSpecialChar = true;
      return checkSpecialChar;
    }else if (checkSpecialChar === 'no' || checkSpecialChar === 'n'){
      checkSpecialChar = false;
      return checkSpecialChar;
    }else {
      alert("Please respond with 'Yes' or 'No'");
      determineSpecialChar();
    }
    return checkSpecialChar;
}

//record entries and create the password in the console
function generatePassword () {
  defineLength();
  console.log(passwordLength);
  determineUpChar();
  console.log(checkUpChar);
  determineNumChar();
  console.log(checkNumChar);
  determineSpecialChar();
  console.log(checkSpecialChar);

  //define characters and password variables
  var characters = lowChar;
  var password = "";

  //decide what characters are needed in the password
  if (checkUpChar  && checkNumChar  && checkSpecialChar ){
    characters += upChar + numChar + specialChar;
  } else if (checkUpChar && checkNumChar){
    characters += upChar + numChar;
  } else if (checkUpChar && checkSpecialChar){
    characters += upChar + specialChar;
  } else if (checkNumChar && checkSpecialChar){
    characters += numChar + specialChar;
  } else if (checkNumChar){
    characters += numChar;
  } else if (checkUpChar){
    characters += upChar;
  } else if (checkSpecialChar){
    characters += specialChar;
  } else {
    characters === characters;
  }

  //random number generator to pick characters
  for(var i=0; i < passwordLength; i++ ){
    password += characters.charAt(Math.floor(Math.random()*characters.length));
  }
  debugger
  return password;
}


// Write password to the #password input
function writePassword() {
  //places written text in the correct field
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;

  //determins password to send to #password
  var password1 = generatePassword();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
