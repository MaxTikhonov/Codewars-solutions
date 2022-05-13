// --- task 1 ----


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message(as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"(in COBOL "found the needle at position 6") * /
// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf('needle');
// }

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
  let arr = ['rock', 'paper', 'scissors'];
  let a = arr.indexOf(p1);
  let b = arr.indexOf(p2);
  let res = '';
  if (b == a) {
    res = 'Draw!';
  }
  if (a > b) {
    res = 'Player 1 won!';
  }
  if (b > a) {
    res = 'Player 2 won!';
  }
  if (a == 0 && b == 2) {
    res = 'Player 1 won!';
  }
  if (b == 0 && a == 2) {
    res = 'Player 2 won!';
  }
  return res;
};

// --- task 3 ---

/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

// --- task 4 ---

/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending) {
  return str.endsWith(ending);
}


// --- task 5 ---

/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  }
  else {
    return "Odd";
  }
}

// --- task 6 ---

/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

function longest(s1, s2) {
  let out = '';
  let stringSet = new Set(s1.concat(s2));
  let arrayOfLetters = Array.from(stringSet).sort();
  for (let i = 0; i < arrayOfLetters.length; i++) {
    out += arrayOfLetters[i];
  }
  return out;
}

// --- task 7 ---

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {

}