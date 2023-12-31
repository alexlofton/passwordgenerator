// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  var length = Number(prompt("Choose length of password between 8-128 characters."))


  var charTypeMsg = "What should your password include? Enter 'uppercase, lowercase, numbers, symbols' to include in your password."

  var minLength = 8;
  var maxLength = 128;

    if (length >= maxLength){
      msg="The password must contain 128 characters or less";
      alert(msg);
      return false;
    }
    else if(length <= minLength) {
      msg="The password must contain at least 8 characters: "
      alert(msg);
      return false;
    } else {
      var charType = prompt(charTypeMsg)

      passwordText.value = password(length, charType);
    }


  function password(length, charType) {
    var charGen = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '1234567890',
      symbols: '!@#$%^&*()_=+'
    };

    var charTypes = charType.toLowerCase().split(', ');
    charSet = "";
    for(var i=0; i < charTypes.length; i++) {
      charSet += charGen[charTypes[i]];
    }
    
    var retVal = "";
    
    for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  document.getElementById("password").select();
  navigator.clipboard.writeText(copyText.value);
}
