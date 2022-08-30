// Assignment code here

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = "0123456789".split("")
var specialCharacters = "~!#$%^&*()_".split("")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var resultPass = document.getElementById("password")

// Write password to the #password input
function writePassword() {
  var prePassword = [];
  var postPassword = "";
  var lengthOfPassword = window.prompt ("What is the length of your password? (must be between 8 and 128 characters)")
  if (lengthOfPassword <8 || lengthOfPassword >128){
      alert("The password needs to be between 8 and 128 characters. Please re-try.")
  } else{
    if (confirm("Do you want uppercase letters?")) {
      Array.prototype.push.apply(prePassword, upperCase)
    }
    if (confirm("Do you want lowercase letters?")) {
      Array.prototype.push.apply(prePassword, lowerCase)
    }
    if (confirm("Do you want numbers?")) {
      Array.prototype.push.apply(prePassword, numbers)
    }
    if (confirm("Do you want special characters?")) {
      Array.prototype.push.apply(prePassword, specialCharacters)
    }
    if (prePassword.length === 0){
      alert("You must have 1 type of letters, numbers, or special characters.")
    } else{
      for (let i=0; i<lengthOfPassword; i++){
        var random = Math.floor(Math.random()* prePassword.length)
        postPassword += prePassword[random]
      }
      resultPass.innerHTML = postPassword;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
