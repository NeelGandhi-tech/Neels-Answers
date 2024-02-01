const questionInput = document.getElementById("questionInput");
const petitionInput = document.getElementById("petitionInput");
const buttonSubmit = document.getElementById("buttonSubmit");

let currentTypedText = ''; // Variable to store the typed text after semicolon

petitionInput.addEventListener('input', function (event) {
    const inputValue = petitionInput.value;

    if (inputValue.startsWith(';')) {
        const replacementPhrase = 'Neel Always Knows All and Everything';
        const typedCharacters = inputValue.slice(1); // Exclude the semicolon
        const replacedCharacters = Array.from(typedCharacters).map((char, index) => {
            return replacementPhrase[index % replacementPhrase.length];
        }).join('');

        currentTypedText = ';' + replacedCharacters;


        petitionInput.value = currentTypedText; // Display the semicolon and replaced characters
    } else {
        currentTypedText = inputValue;
        document.getElementById('buttonSubmit').innerText = 'Typed Text: ' + currentTypedText;
    }
});

buttonSubmit.addEventListener('click', function () {
    console.log('Typed Text:', currentTypedText);
    // You can save the 'currentTypedText' variable to another variable or perform any other actions here
});
