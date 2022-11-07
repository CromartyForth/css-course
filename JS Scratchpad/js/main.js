// strings
const myVariables = "Mathematics"
const myNumber = 42;
const myFloat = 42.0;
const myString = "42.341HELLO145";
const falseNumber = NaN;

/* Fizz Buzz */
/* let number = 1;
while(number < 101){
    let currentNumber = number % 3 === 0 ? 
        number % 5 === 0 ? "Fizz Buzz"
        : "Fizz"
        : number % 5 === 0 ? "Buzz"
        : number;

    /* let currentNumber = "";
     console.log(number % 3);
    if (number % 3 === 0) {
        currentNumber = "Fizz ";
    }
    if (number % 5 === 0) {
        currentNumber +="Buzz";
    }
    else {
        currentNumber = number;
    } 

    console.log(currentNumber);
    number++;
} */

let fizz = 3;
let buzz = 5;

for (var i = 1; i < 101; i ++) {
    let output = "";
    if (i % fizz === 0) {
        output += "Fizz"
    }
    if (i % buzz === 0) {
        output += "Buzz"
    }
    if (output != "") {
        console.log(output);
    }
    else {
        console.log(i);
    }
}



/* Ternary Operator */
/* Condition ? ifTrue : ifFalse */
/* let soup = "Chicken Noodle Soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned 
    ? "Sorry, no soup for you" 
    : soup 
    ? `Yes, we have ${soup} today` 
    : "Sorry no soup today";
console.log(soupAccess); */

/* let testScore = 80;
let myGrade = testScore > 79 ? "A"
    : testScore > 69 ? "B"
    : testScore > 59 ? "C"
    : testScore > 49 ? "D"
    : "F";
console.log(`My grade is ${myGrade}.`) */

/* Rock Paper Scissors */
const rps = ["Rock", "Paper", "Scissors"];
let playerOne = rps[Math.floor(Math.random() * 3)];
console.log("Player One: ", playerOne);
let computer = rps[Math.floor(Math.random() * 3)];
console.log("Computer: ", computer);

/* Rock Paper Ternary */
/* Evaluate all the computers winning moves then for all other results player one wins by default */
let result = playerOne === computer ? "Tied Game"
    : playerOne === "Rock" && computer === "Paper" ? "Computer Wins"
    : playerOne === "Paper" && computer === "Scissors" ? "Computer Wins"
    : playerOne === "Scissors" && computer === "Rock" ? "Computer Wins"
    : "Player One Wins";
console.log(result);

/* Rock Paper Switch */
/* switch (playerOne) {
    case computer:
        console.log("Tied Game");
        break;
    
    case "Rock":
        if (computer === "Paper") {
            console.log("rComputer Wins");
        }
        else {
            console.log("rPlayer One Wins");
        }
        break;
        
    
    case "Paper":
        if (computer == "Scissors") {
            console.log("pComputer Wins");
        }
        else {
            console.log("pPlayer One Wins");
        }
        break;
        
    
    case "Scissors":
        if (computer == "Rock"){
            console.log("sComputer Wins");
        }
        else {
            console.log("sPlayer One Wins");
        }
        break;
} */


/* switch (Math.floor(Math.random() * 10)+1) {
    case 1:
        console.log("ONE!");
        break;

    case 10:
        console.log("TEN!!");
        break;

    default:
        console.log("No Match");
} */


/* Random Letter from my name */
/* const myName = "Brian May"
const myNameNoSpaces = myName.replace(" ", "");
const myNameLength = myNameNoSpaces.length;
const myRandomNumberMap = (Math.floor(Math.random() * myNameLength))
console.log(myNameNoSpaces.charAt(myRandomNumberMap)); */


/*  Math Object */
/* console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.pow(5, 2));
console.log(Math.min(5, 2, 0.25, 12));
console.log(Math.max(5, 2, 0.25, 12));
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) +1); */



/* Number Methods */
/* console.log(myNumber === myFloat);
console.log(myNumber === myString);
console.log(myNumber === Number(myString));
console.log(Number(myString) + 3);
console.log(Number("Dave"));
console.log(Number(true));
console.log(Number(false));
console.log(Number.isInteger(myFloat));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myString));
console.log(Number.isNaN(falseNumber));
console.log(isNaN("Nana")); */




// String methods
/* console.log(myVariables.length);
console.log(typeof(myVariables));
console.log(typeof(myVariables.length));
console.log("charAt: ", myVariables.charAt(0));
console.log("indexOf: ", myVariables.indexOf("mat"));
console.log("lastIndexOf: ", myVariables.lastIndexOf("at"));
console.log("slice: ", myVariables.slice(5, 8));
console.log("slice: ", myVariables.slice(5));
console.log("slice: ", myVariables.slice(5, 2));
console.log("includes: ", myVariables.includes("mate"));
console.log("split: ", myVariables.split("e"));
console.log("split: ", myVariables.split(""));
console.log("split: ", "Matthew, Mark, Dave".split(", ")); */