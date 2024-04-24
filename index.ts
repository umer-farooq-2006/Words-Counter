#! /usr/bin/env node
import inquirer from "inquirer";
let Answer = await inquirer.prompt([
    { name : "Sentence",
      type : "input",
      message : "Enter your sentence to count words"
    }
]);

let value = (Answer.Sentence.trim().split(" "));
let result = (value.length);
console.log(`Total words of your sentence is ${result}`);