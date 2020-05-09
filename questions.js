//questions for use with inquirer prompts in app.js
const questions = {
    type: {
        type: "checkbox",
        name: "type",
        message: "which type of employee would you like to add?",
        choices: ["manager", "engineer", "intern"]
    },
    name: {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    id: {
        type: "input",
        name: "id",
        message: "What is the employee's id?"
    },
    email:{
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },
    manager:{
        type: "input",
        name: "extra",
        message: "What is the employee's office number?"
    },
    engineer:{
        type: "input",
        name: "extra",
        message: "What is the employee's github username?"
    },
    intern:{
        type: "input",
        name: "extra",
        message: "Which schoole does the intern attend?"
    },
    continue: {
        type: "checkbox",
        name: "continue",
        message: "Would you like to add another employee?",
        Choices: ["Yes", "No"]
    }
}

module.exports = questions;