// Assignment Code





const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
var passwordEl = document.getElementById("password");
var generateBtn = document.querySelector("#generate");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRandomSymbols
  };

function generatePassword() {
    
    let generatedPassword ="finalPassword";

    const typesCount = getRandomLower + getRandomUpper + getRandomNumber + getRandomSymbols;
  
    const typesArr = [{ getRandomLower }, { getRandomUpper }, { getRandomNumber }, { getRandomSymbols }].filter 
    (
      item => Object.values(item)[0]
    );
  
    if(typesCount === 0) {
      return '';
    }
    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
  
        generatePassword += randomFunc[funcName]();
      });
    }
  
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
  } 
//it needs to prompt an alert
//need to have all the uppercase lowercase symbols and numbers and how many characters its length will be
//Show the new password. I think i want it to show in the prompt prob 
let newPassword = "";
 function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function getRandomSymbols() {
    const symbols = "!@#$%^&*()[]{}=+></,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  var chosenCharactersArr = []
  var passwordString = ''

if (confirm('Include capital letters?')) {
    chosenCharactersArr.push(getRandomUpper)
  }

  if (confirm('Include lowercase letters?')) {
    chosenCharactersArr.push(getRandomLower)
  }
  
  if (confirm('Include numbers?')) {
    chosenCharactersArr.push(getRandomNumber)
  }
 
  if (confirm('Include symbols?')) {
    chosenCharactersArr.push(getRandomSymbols)
    {
        passwordEl.textContent = newPassword;
    }
  };
// for (var i= 0; i < password.results- i want to loop through all the results and put them together; i++){
    //console.log('results + i)
//}
console.log(getRandomUpper());
console.log(getRandomLower());
console.log(getRandomNumber());
console.log(getRandomSymbols());

// Write password to the #password input
//function newPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

//}



// Add event listener to generate button
generateBtn.addEventListener("click", newPassword);



  
    resultEl.innerText = generatePassword(
      getRandomLower(),
      getRandomUpper(), 
      getRandomNumber(), 
      getRandomSymbols()
      );
  

//PROMPT-PROMPT example for help
//let person = prompt("are you ready", "YES!!");


    alert("display the password now");


//does it need to be an append with api selector stuff document.elements.results appendResults(something);


