// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
//pseudocode:
//input:1 object
//output: return string with interpolation using the original input.
//create a function divByThree using dot notation we will call the number in the object to check if divisible by three. Using the modulo and an equality operator to check if the number is divisible by three if there is no remainder the number turns out to be divisible by three. The modulo operator displays remainders and the equality operator checks that it is strictly equal to zero (no remainder). Then it returns an interpolated string to let the user know if the input is divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.
describe("divByThree", () => {
  it("should return '15 is divisible by three' when given { number: 15 }", () => {
    expect(divByThree({ number: 15 })).toBe("15 is divisible by three")
  })

  it("should return '0 is divisible by three' when given { number: 0 }", () => {
    expect(divByThree({ number: 0 })).toBe("0 is divisible by three")
  })

  it("should return '-7 is not divisible by three' when given { number: -7 }", () => {
    expect(divByThree({ number: -7 })).toBe("-7 is not divisible by three")
  })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
function divByThree(object) {
  if (object.number % 3 === 0) {
    return `${object.number} is divisible by three`
  } else {
    return `${object.number} is not divisible by three`
  }
}
// PASS  ./code-challenges.test.js
// divByThree
//   ✓ should return '15 is divisible by three' when given { number: 15 } (1 ms)
//   ✓ should return '0 is divisible by three' when given { number: 0 }
//   ✓ should return '-7 is not divisible by three' when given { number: -7 }

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.34 s, estimated 1 s

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudocode:
//input:1 Array
//output: 1 Array
// Create a function letterCap that takes an array in and using the .map method to iterate through the array. Using the .charAt and the .to upperCase the first letter of each value and using .slice to replicate the rest of the  string and attach it to the uppercased first letter.

// a) Create a test with expect statements for each of the variables provided.

describe(letterCap, () => {
  it("returns an array with the first letter in all the words capitalized", () => {
    expect(letterCap(array)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ])
    expect(letterCap(array)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
    ])
  })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
function letterCap(value) {
  return value.map((value) => value.charAt(0).toUpperCase() + value.slice(1))
}
// PASS  ./code-challenges.test.js
// letterCap
//   ✓ returns an array with the first letter in all the words capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.331 s
// Ran all test suites.
// ✨  Done in 1.07s.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

//pseudocode:
//input:1 string
//output:index value
// create a function vowelFinder then setting an array with the "vowels" to check the string against. We will be using the split method to turn the string into an array then use findIndex while checking that character against the vowel array with .includes and lastly returning the index when there is a match.

// a) Create a test with expect statements for each of the variables provided.
describe("vowelFinder", () => {
  it("returns the index of the first vowel in a string", () => {
    expect(vowelFinder(vowelTester1)).toEqual(1)
    expect(vowelFinder(vowelTester2)).toEqual(0)
    expect(vowelFinder(vowelTester3)).toEqual(2)
  })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
const vowelFinder = (string) => {
  const vowels = ["a", "e", "i", "o", "u"]
  return string.split("").findIndex((character) => vowels.includes(character))
}
// PASS  ./code-challenges.test.js
// vowelFinder
//   ✓ returns the index of the first vowel in a string (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.442 s, estimated 1
