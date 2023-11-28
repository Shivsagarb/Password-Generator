const passwordGen = document.querySelector('.password');
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const characters = "!@#%&";

const allChars = upperCase + lowerCase + numbers + characters;

// function to generate random password
function random(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += characters[Math.floor(Math.random() * characters.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordGen.innerText = password;

}


// function to copy the generated password to th clipboard

function copyToClipboard(){
    var textToCopy = document.getElementById('copied').innerText;

    navigator.clipboard.writeText(textToCopy);

}
