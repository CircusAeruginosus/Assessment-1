const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Welcome to the password validator! Please enter a password to validate", function(input){
    tokens = input.split(" ");

    password = tokens[0];

    if (password.length >= 10){
        console.log("Success!")
    }
    else console.log("Password does not meet requirements")


reader.close()
})