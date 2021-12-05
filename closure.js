//const
    empID = (function (){
    let count = 0;
    return function (){
        count++;
        //return "empID" + count;
        return `empID${count}`
    };
})();

console.log(empID)
console.log("empID " + empID());
console.log("empID " + empID());
console.log("empID " + empID());