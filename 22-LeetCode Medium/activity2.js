//Activity 2 - Longest Substring without repeating characters
//Task 2

function lengthOfLongestSubstring(s) {
    const charIndex = {}; 
    let start = 0;
    let maxLength = 0;
  
    for (let end = 0; end < s.length; end++) {
      const char = s[end];
      if (charIndex[char] !== undefined && charIndex[char] >= start) {
        start = charIndex[char] + 1;
      }
      charIndex[char] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
 
  console.log(`Length of longest substring: `+ lengthOfLongestSubstring("abcabcbb") );
  console.log(`Length of longest substring: `+ lengthOfLongestSubstring("jhckjacacjcundauc") );
  