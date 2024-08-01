//Activity 3 - String Algo
//Task 6

function countCharacterOccurrences(inputString) {
    const charCount = new Map(); // Using a Map to store character counts

    // Iterate through each character in the input string
    for (const char of inputString) {
        if (charCount.has(char)) {
            // Increment the count if the character is already in the map
            charCount.set(char, charCount.get(char) + 1);
        } else {
            // Initialize the count to 1 if the character is encountered for the first time
            charCount.set(char, 1);
        }
    }

    // Log the character count
    charCount.forEach((count, char) => {
        console.log(`Character '${char}' occurs ${count} time(s).`);
    });
}

// Example usage:
const myString = "hello, world!";
countCharacterOccurrences(myString);


//Task 7

function findLongestSubstring(s) {
    const seenChars = new Set();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        while (seenChars.has(currentChar)) {
            seenChars.delete(s[start]);
            start++;
        }
        seenChars.add(currentChar);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
const inputString = "abcabcbb";
const result = findLongestSubstring(inputString);
console.log(`The longest substring without repeating characters has a length of ${result}.`);
