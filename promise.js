function node_Add(){
    const data = {name:"Emp01"};
    //calling asynchronous
    db_Add(data).then(
        (value)=>{
            value = "success";
            console.log("Data is printed" + " " + value + " "+ data.name );
        },
        (err)=>{
            console.log("Error occurred");
        }
    );
}

function db_Add(){
    return new Promise((resolve, reject)=>{
        //add data
        //if(err){
          //  reject("error");
        //}
        //how to you create resolve("success") inside setTimeout
        setTimeout(resolve,5000)
        //resolve("success");
    });
}

function doSomething(){
    console.log("do something");
}

node_Add();
doSomething();
doSomething();
doSomething();
doSomething();
doSomething();
