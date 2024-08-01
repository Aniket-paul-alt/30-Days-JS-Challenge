//Activity 4 - Assertions and Boundaries
//Task 7

function findWordsAtBeginning(inputString) {
    const regex = /^\w+/; // Matches words at the beginning of the string

    const match = inputString.match(regex);
    if (match) {
        console.log('Word at the beginning found:', match[0]);
    } else {
        console.log('No word at the beginning found in the string.');
    }
}

// Example usage:
const myString = 'Hello, world! This is a test.';
findWordsAtBeginning(myString);

//Task 8
function findWordsAtEnd(inputString) {
    const regex = /\b\w+\b$/g; // Matches words at the end of the string

    const matches = inputString.match(regex);
    if (matches) {
        console.log('Words at the end found:', matches);
    } else {
        console.log('No words at the end found in the string.');
    }
}

// Example usage:
const myString1 = 'This is a test string with some words at the end. hi';
findWordsAtEnd(myString1);
