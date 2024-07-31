//Activity 3 - String manipulation with Recursion
//Task 5
function reverseStr(str, n){
    if( n == str.length) return

    reverseStr(str, n+1)
    console.log(str[n]);
}
reverseStr("Aniket", 0)
reverseStr("Tukai", 0)

//Task 6
function checkPalindrome(s, i) {
    if (i > s.length / 2) { return true; }
    return s[i] == s[s.length - i - 1] && checkPalindrome(s, i + 1)
}

let str = "racecar";
let ans = checkPalindrome(str, 0);
if (ans == true) {
    console.log("Yes,it is palindrome");
}
else {
    console.log("No,it is not palindrome");
}
