//site : https://regexr.com/

//Activity 1 - Basic regular expression
//Task 1


const regExpLiteral = /Hello/gi;
const targetText = 'Hello world, hello there!';

const matches = targetText.match(regExpLiteral);
console.log('Matches:', matches);

//Task 2

function findDigits(inputString) {
    const digitRegex = /\d+/g; // Matches one or more digits

    const matches = inputString.match(digitRegex);
    if (matches) {
        console.log('Digits found:', matches);
    } else {
        console.log('No digits found in the string.');
    }
}

// Example usage:
const myString = 'Hello, 123 world! The answer is 42.';
findDigits(myString);

