// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

// let number = prompt("Please enter a number you would like to fizzBuzz up to:"); // prompt is for browser only
// let number = 500; // use this and node to run in the the terminal
// use Node.js for terminal inputs. Similar to c++

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fizzBuzz = () => {
  readline.question(
    `Please enter a number you would like to fizzBuzz up to:`,
    (number) => {
      for (i = 0; i < number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
        // console.log(i);
      }
      readline.close();
    }
  );
};

fizzBuzz();
