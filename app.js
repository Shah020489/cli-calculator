#! /usr/bin/env node
/**
 * Step1 : Get first number.
 * Step2 : Get second number.
 * Step3 : Insert calculator operation
 * Step3.1 : Do calculation operation
 * Step4 : Print result
 *
*/
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter the first number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter the second number"
    },
    {
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Enter the operation",
    }
]);
//Conditonal Statements:
if (answer.operation == "Addition") {
    let result = answer.firstNumber + answer.secondNumber;
    console.log("Your result is " + result);
}
else if (answer.operation == "Subtraction") {
    let result = answer.firstNumber - answer.secondNumber;
    console.log("Your result is " + result);
}
else if (answer.operation == "Multiplication") {
    let result = answer.firstNumber * answer.secondNumber;
    console.log("Your result is " + result);
}
else if (answer.operation == "Division") {
    if (answer.secondNumber == 0) {
        console.log("Second number cannot be zero");
    }
    else {
        let result = answer.firstNumber / answer.secondNumber;
        console.log("Your result is " + result);
    }
}
else {
    console.log("Invalid operation");
}
