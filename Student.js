function Student(name, Class, department){
    this.name = name;
    this.class = Class;
    this.department = department;
}

Student.prototype.add = function (){
    console.log("Adding to database");
}

Student.prototype.update = function (){
    console.log("Updating database");

}
Student.prototype.get = function (){
    console.log("Get from database");
}
Student.prototype.delete = function (){
    console.log("Delete database");
}

var student = new Student("EMP01", "Comp Sci", "IT");
console.log(student);
student.add();
student.get();
student.update();
student.delete();