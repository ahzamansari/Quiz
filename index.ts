#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("\n\tWelcome To Ahzam - Quiz\n"));

const quiz:{
     question_1: string;
     question_2: string;
     question_3: string;
     question_4: string;
     question_5: string;
} = await inquirer.prompt([
    //Q1
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the correct way to check if two values are not equal in TypeScript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"],
    },
    //Q2
    {
        name: "question_2",
        type: "list",
        message: "Q2. Which of the following characters is commonly allowed in variable names in Typescript?",
        choices: ["$","@","#","&"],
    },
    //Q3
    {
        name: "question_3",
        type: "list",
        message: "Q3. Which operator is commonly used for string concatenation in Typescript?",
        choices: ["+", "-", "*", "/"],
    },
    //Q4
    {
        name: "question_4",
        type: "list",
        message: "Q4. In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","],
    },
    //Q5
    {
        name: "question_5",
        type: "list",
        message: "Q5. Which method of Inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"],
    }
]);

let score: number = 0;

//Question 1
switch(quiz.question_1){
    case "a !== b":
       console.log(chalk.green("1. Correct!"));
       ++score;
       break;
       default:
        console.log(chalk.red("1. Incorrect!"));
}

//Question 2
switch(quiz.question_2){
    case "$":
       console.log(chalk.green("2. Correct!"));
       ++score;
       break;
       default:
        console.log(chalk.red("2. Incorrect!"));
}

//Question 3
switch(quiz.question_3){
    case "+":
       console.log(chalk.green("3. Correct!"));
       ++score;
       break;
       default:
        console.log(chalk.red("3. Incorrect!"));
}

//Question 4
switch(quiz.question_4){
    case ";":
       console.log(chalk.green("4. Correct!"));
       ++score;
       break;
       default:
        console.log(chalk.red("4. Incorrect!"));
}

//Question 5
switch(quiz.question_5){
    case "prompt()":
       console.log(chalk.green("5. Correct!"));
       ++score;
       break;
       default:
        console.log(chalk.red("5. Incorrect!"));
}

console.log(`Score: ${score}`);
