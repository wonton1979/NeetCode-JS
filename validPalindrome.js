/*Valid Palindrome
Solved

Given a string s, return true if it is a palindrome, otherwise return false.

    A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true

Explanation: After considering only alphanumerical characters, we have "wasitacaroracatisaw", which is a palindrome.

    Example 2:

Input: s = "tab a cat"

Output: false

Explanation: "tabacat" is not a palindrome.*/

function isPalindrome(s) {
    let newString = "";
    for(let i = 0; i < s.length; i++){
        if((s.charCodeAt(i) >=65 && s.charCodeAt(i) <= 90)
            ||(s.charCodeAt(i) >=97 && s.charCodeAt(i) <= 122) ||
            (s.charCodeAt(i) >=48 && s.charCodeAt(i) <= 57)
        ){
            newString += s[i];
        }
    }
    newString = newString.toLowerCase();
    for(let i = 0; i < newString.length; i++){
        if( newString[i] !== newString[newString.length-1-i]){
            return false;
        }
    }

    return true;
}

s="0P"

console.log(isPalindrome(s))