function Student(name, designation, department){
    this.name = name;
    this.designation = designation;
    this.department = department;
}

Student.prototype.add = function (){
    console.log("Adding to database");
}

Student.prototype.update = function (){
    console.log("Adding to database");
}
Student.prototype.get = function (){
    console.log("Adding to database");
}
Student.prototype.delete = function (){
    console.log("Adding to database");
}
Student.prototype.level = 1;
Student.prototype.nameDesignation = function(){
    return this.name + " " + this.designation;
}
var emp = new Student("EMP01", "Developer", "IT");
console.log(emp);
emp.add();
console.log(emp.nameDesignation());