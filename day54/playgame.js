const {testNumber} = require("./game");

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is ? \n(write \"quit\" to give up)\n \nIs the number ...");

let playgame = (userInput) => {
    let input = userInput.toString().trim();
    testNumber(input)
}

process.stdin.on('data', playgame);