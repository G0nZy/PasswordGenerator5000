// Assignment Code
//var generateBtn = document.querySelector("#generate");


// function generatePassword() {
//  return ;

// }

//////////////////////////
//     var instructions = "welcome to the password generator 3000! have fun";


// alert (instructions);


  


// function generate(length = 12){

//     var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
//     var lowerLetter = "abcdefghijklmnopqrstuvwyxz"
//     var numbers = "0123456789";
//     var special = "!@#$%^&*";


//             var all = upperLetter + lowerLetter + numbers + special;
//             var generation = "";





// for (var index = 0; index < length; index++) {
//   var character = Math.floor(Math.random() * all.length);
//   password += all.substring(character, character + 1);
// }

// return password;

// }
//////////////////////////////////

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);





// var instructions = "Pick the parameters & watch your password appear! Have fun :p"

// alert(instructions);

//     var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
//     var lowerLetter = "abcdefghijklmnopqrstuvwyxz"
//     var numbers = "0123456789";
//     var special = "!@#$%^&*";


//     var upperChoice = "upper or lower case letters?"
//     var numberChoice = "would you like numbers?"
//     var specialChoice = "Any special Characters?"

//     prompt(upperChoice)
//     prompt(numberChoice)
//     prompt(specialChoice)



      alert("Welcome to the Password Generator 3000!")


var generateBtn = document.querySelector("#generate"); 


var data = ["lower case letter", 97, 25, "upper case letter", 65, 25, "number", 48, 9, "special character", 33, 13, "special character", 58, 6, "special characters", 91, 5];
var charSets = [];
var fullCharSet = [];
var minCharOn = false;
var password = "";
var passLength;

for (let i = 0; i < (data.length / 3); i++) {
  const index = i * 3;
  charSets[i] = {
    name: data[index],
    startUC: data[index + 1],
    range: data[index + 2],
    array: [],
    on: false,
    popArray: function () {
      for (let j = 0; j <= this.range; j++) {
        this.array[j] = String.fromCharCode(this.startUC + j);
      }
    }
  }
  charSets[i].popArray();
  console.log(charSets[i].array);
}


function combineArrays() { 
  for (let m = 1; m < arguments.length; m++) {
    
    charSets[arguments[0]].array = charSets[arguments[0]].array.concat(charSets[arguments[m]].array);
    delete charSets[arguments[m]]; 
  }
}


enableAndCombineArrs = function (element) {
  element.on = false;
  element.on = confirm("Would you want it to have a " + element.name + "?");
  if (element.on) {
    fullCharSet = fullCharSet.concat(element.array);
    minCharOn = true;
  }
}


function askUser() {
  
  password = "";
  fullCharSet.splice(0, fullCharSet.length);
      
  minCharOn = false;
  do {
    charSets.forEach(enableAndCombineArrs);
    if (!minCharOn) alert("Please select at least one character type."); 
  } while (!minCharOn)
                  
  
              do {
    passLength = prompt("How long do you want it to be? Gimme a number betweeen 8 - 128 !");
    passLength = parseInt(passLength);
   
    if (passLength !== passLength || passLength < 8 || passLength > 128) alert("Ima need a number to continue");
  } while (passLength !== passLength || passLength < 8 || passLength > 128) 
}


addToPass = function (element) {
  if (element.on) {
    password += element.array[Math.floor(Math.random() * element.array.length)]
  }
}


function completePass() {
  var startLength = password.length;
  for (n = 0; n < (passLength - startLength); n++) {
    const randNum = Math.floor(Math.random() * fullCharSet.length);
    password += fullCharSet[randNum];
  }
}


function reOrderPass() {
  var passElems = password.split('');
  var usedElems = [];
  var currentElem;
  password = "";
  for (o = 0; o < passElems.length; o++) {
    do {
      currentElem = Math.floor(Math.random() * passElems.length);
    } while (usedElems.includes(currentElem))
    password += passElems[currentElem];
    usedElems[o] = currentElem;
  }
}


function generatePassword() {
  askUser();
  charSets.forEach(addToPass);
  completePass();
  reOrderPass();
            
}

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

combineArrays(3, 4, 5);

generateBtn.addEventListener("click", writePassword);


  