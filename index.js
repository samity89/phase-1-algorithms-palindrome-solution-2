function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i
    const firstChar = word[i]
    const lastChar = word[j]
    if (startChar !== endChar) return false
  }
  return true
}

/* pseudo code
// iterate from the beginning to the middle of the word
// check each character to the corresponding letter to the end
// if any letters don't match not a palindrome/return false
// if all match return true


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
