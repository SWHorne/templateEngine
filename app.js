const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

async function init() {
    await inquirer.prompt([
        questions.type
    ]).then(async function(data) {
        if (data.type[1] != undefined || data.type[0] === undefined) {
            console.log("Please select one type of employee")
            return init();
        }
        switch(data.type[0]) {
            case "manager" :
                let employeeObject = new Manager(await inquiry("name"), await inquiry("id"), await inquiry("email"), await inquiry("email"), await inquiry(data.type[0], "extra"));
                break;
            case "Engineer" :
                let employeeObject = new Engineer(await inquiry("name"), await inquiry("id"), await inquiry("email"), await inquiry("email"), await inquiry(data.type[0], "extra"));
                break;
            case "intern" :
                let employeeObject = new intern(await inquiry("name"), await inquiry("id"), await inquiry("email"), await inquiry("email"), await inquiry(data.type[0], "extra"));
                break;
        }
        employeeArray.push(employeeObject);
        continueStatement();
    });
}
    //employee type question
async function inquiry(question, dataName) {
    if (dataName === undefined) {
        let dataName = question;
    }
    return await inquirer.prompt([questions[question]]).then(function(data) {
        //validation empty
        if (data[dataName] === "") {
            console.log("please enter a value.");
            return inquiry(question.dataName);
        }
        //validate email
        else if (question === "email" && data[dataName].indexOf("@") === -1){
            console.log("Please enter a valid email address.");
            return inquiry(question.dataName);
        }
        return data[dataName];
        });
}
//Add additional employees
function continueStatement() {
    inquirer.prompt([questions.continue]).then(function(data) {
        //if yes, loop through init function
        if (data.continue[0] === "Yes") {
            init();
        }
        //otherwise, end loop and create the org chart html
        else {
            fs.writeFile(outputPath, render(employeeArray), function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log(`success! Your organization chart is at ${outputPath}.`);
            });
        }
    });
}
//start script
init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
