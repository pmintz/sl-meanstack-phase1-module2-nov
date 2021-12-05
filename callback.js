const cbPrint = function Print(){
    console.log("Data is added");
}

const nodeAdd =  function node_Add(){
    const data = {name:"Emp01"};
    setTimeout(db_Add(data, cbPrint), 5000);
}();

function db_Add(data, cb){
    //Adds data
    console.log(data);
    cb();
}
