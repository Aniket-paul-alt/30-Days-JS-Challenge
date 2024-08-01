//Activity 2 - Character Classes and Quantifiers
//Task 3

function findCapitalizedWords(inputString) {
    const regex = /\b[A-Z][a-zA-Z]*\b/g; // Matches capitalized words

    const matches = inputString.match(regex);
    if (matches) {
        console.log('Capitalized words found:', matches);
    } else {
        console.log('No capitalized words found in the string.');
    }
}

// Example usage:
const myString = "Hello, World! This Is a Test String with Some Capitalized Words.";
findCapitalizedWords(myString);

//Task 4

function findDigitSequences(inputString) {
    const digitRegex = /\d+/g; // Matches one or more digits

    const matches = inputString.match(digitRegex);
    if (matches) {
        console.log('Digit sequences found:', matches);
    } else {
        console.log('No digit sequences found in the string.');
    }
}

// Example usage:
const myString1 = 'Hello, 123 world! The answer is 42 and 2.';
findDigitSequences(myString1);

