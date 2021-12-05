var name = [];
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//const stdin = process.openStdin();

var question = function /*readFromConsole*/() {
    return new Promise((res, rej) => {
        rl.question("Type in name of expense (type end to stop)"
            , (name) => {
                addNameAndExpense(name);
                res(name);
            });
    })
}

var question2 = function() {
    return new Promise((res, rej) => {
        rl.question("Type in the amount of the expense (type end to stop)"
            , (name) => {
                addNameAndExpense(name);
                res(name);
            });
    })
}

function addNameAndExpense(...nameOrExpense){
    name.push(nameOrExpense)
}

function display() {
    console.log()
    for(let i = 0; i<name.length-2; i++){
        console.log(name[i] + " : " + name[++i]);
    }
    console.log();
}

(async function main() {
    var answer;
    while ( answer != "end" ) {
        answer = await question();
        if(answer === "end"){
            break;
        }
        answer = await question2();
    }
    display();
    process.exit();
})();


