var store = [];
var boolean = true;
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Type in name of expense (type end to finish) : ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "end") {
        console.log(store.toString());
        rl.close();
    }
    store.push(line);
    if(boolean) {
        rl.setPrompt('Type in amount of expense : ');
        boolean = false;
    }else{
        rl.setPrompt('Type in the name of the expense : ')
        boolean = true;
    }
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});