const questionInput = document.getElementById("questionInput");
const petitionInput = document.getElementById("petitionInput");
const buttonSubmit = document.getElementById("buttonSubmit");
const buttonReset = document.getElementById("buttonReset");
const userTypedTextParagraph = document.getElementById("userTypedTextParagraph");

const replacementText = 'Neel Always Knows All and Everything';
let userTypedText = 'Wrong Petition';
let loop = true;
let actualText = '';

buttonSubmit.addEventListener('click', function() {
    loop = false;
    userTypedTextParagraph.textContent = `${userTypedText}`;
});

buttonReset.addEventListener('click', function() { 
    loop = true;
    actualText = '';
    petitionInput.value = '';
    userTypedTextParagraph.textContent = '';
    userTypedText = 'Wrong Petition';
    questionInput.value ='';
});

petitionInput.addEventListener('input', function(event) {
    actualText = actualText + petitionInput.value.slice(-1);
    if (actualText.includes(';') && loop) {
        const userInput = actualText.split(';')[1];
        const arrayReplace = replacementText.slice(0, userInput.length);
        petitionInput.value = `${arrayReplace}`;
         
        userTypedText = userInput;
    }
});
petitionInput.addEventListener('keydown', function(e){
    if (actualText.includes(';')){
    if (e.key === 'Backspace' && loop){
        userTypedText = userTypedText.slice(0,-1);
        actualText = ';' + petitionInput.value.slice(0, -1);
        petitionInput.value = actualText.slice(1);
        e.preventDefault(); 
    }
    }
});