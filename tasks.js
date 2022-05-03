// --- task 1 ----

/ *Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6") */
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf('needle');
}

// --- task 2 ---
/* Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw! */

const rps = (p1, p2) => {
  let arr = ['rock','paper','scissors'];
  let a = arr.indexOf(p1);
  let b = arr.indexOf(p2);
  let res = '';
  if(b == a) {
    res = 'Draw!';
  }
  if(a > b) {
    res = 'Player 1 won!';
  }
  if(b > a){
    res = 'Player 2 won!';
  }
  if(a == 0 && b == 2) {
    res = 'Player 1 won!';
  }
  if(b == 0 && a == 2) {
    res = 'Player 2 won!';
  }
  return res;
};

// --- task 3 ---

/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr){
 for(let i = 1; i < arr.length; i++) {
   arr.splice(i, 1);
 }
    return arr;
}

// --- task 4 ---

/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending){
  return str.endsWith(ending);
}
