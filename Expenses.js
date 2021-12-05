const readline = require("readline");
let name = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const stdin = process.openStdin();

var question = function /*readFromConsole*/() {
    return new Promise((res, rej) => {
        rl.question("Type in name of expense (type end to stop)"
            , (name) => {
                addNameAndExpense(name);
                res(name);
                /*rl.question("Type in the amount of expense"
                    , (expense) => {
                        //console.log(`His name is ${name}`);
                        //addNameAndExpense(name);
                        addNameAndExpense(expense);
                        res(expense);
                    });*/
            });
    })
}

var question2 = function /*readFromConsole*/() {
    return new Promise((res, rej) => {
        rl.question("Type in the amount of the expense (type end to stop)"
            , (name) => {
                addNameAndExpense(name);
                res(name);
                /*rl.question("Type in the amount of expense"
                    , (expense) => {
                        //console.log(`His name is ${name}`);
                        //addNameAndExpense(name);
                        addNameAndExpense(expense);
                        res(expense);
                    });*/
            });
    })
}

function addNameAndExpense(...nameOrExpense){
    //name+=nameOrExpense;
    //name.concat(nameOrExpense);
    name.push(nameOrExpense)
}

function display() {
    console.log()
    for(let i = 0; i<name.length-2; i++){
        console.log(name[i] + " : " + name[++i]);
    }
    console.log();
}

/*function timer(){
    returnTimer().then(
        (value)=>{
            display();
            process.exit();
        },
        (err)=>{
            console.log("Error occurred");
            process.exit();
        }
    );
}


function returnTimer(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve,5000)
    });
}*/

//timer();
//readFromConsole();
(async function main() {
    var answer;
    while ( answer != "end" ) {

        answer = await question();
        //console.log(answer);
        if(answer === "end"){
            break;
        }

        answer = await question2();
    }
    //console.log( "finally you are sure!");
    display();
    process.exit();
})();


