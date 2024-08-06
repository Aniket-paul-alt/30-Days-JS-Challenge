//Activity 5 - Word Ladder
//Task 5

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        if (currentWord === endWord) return level;

        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) { // ASCII 'a' to 'z'
                const newWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);

                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}


const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
let beginWord = "hit";
let endWord = "cog";
console.log(ladderLength(beginWord, endWord, wordList)); 
beginWord = "dot";
endWord = "cog";
console.log(ladderLength(beginWord, endWord, wordList)); 
beginWord = "dot";
endWord = "dog";
console.log(ladderLength(beginWord, endWord, wordList)); 
