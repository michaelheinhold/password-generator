// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar="!@#$%^&*()_+=-";
var length;
var checkUpChar;
var checkNumChar;
var checkSpecialChar;

//determines lenght of password
function defineLength(){
  var length = prompt("Choose a length between 8-128 characters for your password.")

  if(length < 8) {
    alert("Please choose a length between 8-128 characters.");
    defineLength();
  } else if (length>128) {
    alert("Please choose a length between 8-128 characters.");
    defineLength();
  } else if (isNaN(length)) {
    alert("Please choose a length between 8-128 characters.");
    defineLength();
  }else {
    alert("Now you will be asked if you need uppercase letters, numbers, or any special characters. If you select no on all, you will be given a password with only lowercase letters.")
    return length;
  }
  return length;
}

//determines if uppercase is needed
function determineUpChar() {
  var checkUpChar = prompt("Do you need Uppercase letters? Respond 'Yes' or 'No'");
    checkUpChar=checkUpChar.toLowerCase();
  
  if(checkUpChar === null || checkUpChar === "") {
    alert("Please respond with 'Yes' or 'No'");
    
    determineUpChar();
    
  }else if (checkUpChar === 'yes' || checkUpChar === 'y'){
    checkUpChar === true;
    return checkUpChar;
  }else if (checkUpChar === 'no' || checkUpChar === 'n'){
    checkUpChar === false;
    return checkUpChar;
  }else {
    alert("Please respond with 'Yes' or 'No'");
    determineUpChar();
  }
  return checkUpChar;
}

// determins is numbers are needed
function determineNumChar() {
  var checkNumChar = prompt("Do you need Numbers? Respond 'Yes' or 'No'");
    checkNumChar= checkNumChar.toLowerCase();

  if(checkNumChar === null || checkNumChar === "") {
    alert("Please respond with 'Yes' or 'No'");
    
    determineNumChar();
    
  }else if (checkNumChar === 'yes' || checkNumChar === 'y'){
    checkNumChar === true;
    return checkNumChar;
  }else if (checkNumChar === 'no' || checkNumChar === 'n'){
    checkNumChar === false;
    return checkNumChar;
  }else {
    alert("Please respond with 'Yes' or 'No'");
    determineNumChar();
  }
  return checkNumChar;
}

//determines if special characters are needed
function determineSpecialChar() {
  var checkSpecialChar = prompt("Do you need Special Characters? Respond 'Yes' or 'No'");
    checkSpecialChar=checkSpecialChar.toLowerCase();
  
  if(checkSpecialChar === null || checkSpecialChar === "") {
    alert("Please respond with 'Yes' or 'No'");
    
    determineSpecialChar();
    
  }else if (checkSpecialChar === 'yes' || checkSpecialChar === 'y'){
    checkSpecialChar === true;
    return checkSpecialChar;
  }else if (checkSpecialChar === 'no' || checkSpecialChar === 'n'){
    checkSpecialChar === false;
    return checkSpecialChar;
  }else {
    alert("Please respond with 'Yes' or 'No'");
    determineSpecialChar();
  }
  return checkSpecialChar;
}

//record entries
defineLength();
console.log(length);
determineUpChar();
console.log(checkUpChar);
determineNumChar();
console.log(checkNumChar);
determineSpecialChar();
console.log(checkSpecialChar);


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
