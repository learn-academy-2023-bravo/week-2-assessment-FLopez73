// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: The string of "Bravo 2023" will be turned into an array by the .split method.
// b) Verify and explain:The string did turn into an array as I suspected but by using "" as a place holder it splits the string into individual letters instead of an array of "bravo 2023" with just one value in the array which is what I tought would happen.

// --------------------2) What will this log?

const greeter = (name) => {
  ;`Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will log "Hello, LEARN STUDENT" due to the string interpolation that incorporates the variable into the return.
// b) Verify and explain: The return was undefined and that in because there was never a declaration for the variable name.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer:This will result in  an array of the same length due to the map method iterating over the whole array with the values inside of the array being multiplied by 2.[ 8, 10, 12, 14, 16 ]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ]The result was as I expected.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will result in a new array that is filter to search for only odd numbers .filter method is looking for numbers then dividing them by two and if the remainger is not zero then it would be an odd. [ 11, 13, 15 ]
// b) Verify and explain:[ 11, 13, 15 ] The result was array with only three values that where all odd.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:This willl return a string of "JavaScript" the console log is calling a key pair for the object that is looking for :laguages and the value by using "[]"" at the zero index which is a string "Javascript"
// b) Verify and explain:JavaScript the result was as I expected.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:This will return a string of George Bravo 2023.
// b) Verify and explain:Learn { student: 'George', cohort: 'Bravo', year: 2023 } It returned a new object. On line 58 "constructor" is a special method for creating an object with the combination of the new variable declaration on line 64 with the word "new" represents the creation of a new object with the name "George" with all of the same information from the original class.
