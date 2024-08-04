//Activity 5 - Valid Parentheses
//Task 5

function isValidParentheses(s) {
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };
  
    for (const char of s) {
      if (char in pairs) stack.push(char);
      else if (pairs[stack.pop()] !== char) return false;
    }
  
    return true
  }
  
  
  console.log(isValidParentheses('()')); 
  console.log(isValidParentheses('()[]{}')); 
  console.log(isValidParentheses('(]')); 
  console.log(isValidParentheses('([)]')); 
  console.log(isValidParentheses('[{({[]})}]')); 
  