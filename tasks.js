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
  let b = [];
  b = numbers.map(x => x ** 2);
  return b.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
}

// --- task 8 ---

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  if (str == '') {
    return true;
  }
  let a = str.toLowerCase();
  let b = new Set(a);
  if (a.length > b.size) {
    return false;
  }
  else {
    return true;
  }
}

// --- task 9 ---

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  let a = [];
  a = array;
  if (array.length == 0) {
    a = [0];
  }
  let b = Math.abs(a.reduce(
    (x, y) => x + y
  ));
  if (b % 2 == 0) {
    return "even";
  }
  if (b % 2 == 1) {
    return "odd";
  }
}

// --- task 10 ---

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function (array) {
  return array.map((item, index) => {
    return `${index + 1}: ${item}`;
  })
}

// --- task 11 ---

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let b = numbers.split(' ');
  const max = Math.max(...b);
  const min = Math.min(...b);
  return String(max) + ' ' + String(min);
}

// --- task 12 ---

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  //#Happy Coding! ^_^
}