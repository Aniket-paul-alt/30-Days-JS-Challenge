//Activity 5 - Group Anagrams
//Task 5

function groupAnagrams(strs) {
    const anagramMap = {};
  
    for (const word of strs) {
      const sortedWord = word.split('').sort().join('');
      console.log(sortedWord);
      
      if (!anagramMap[sortedWord]) {
        anagramMap[sortedWord] = [];
      }
      anagramMap[sortedWord].push(word);
    }
  
    return Object.values(anagramMap);
  }
  

  const inputWords = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const groupedAnagrams = groupAnagrams(inputWords);
  console.log(groupedAnagrams);
  