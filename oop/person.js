class Person {
    constructor(name) {
        this.name = name;
    }
    
    walk() {
        console.log("Walk"); 
    }
}
 
// const person = new Person("Sagor");
// console.log(person);
// person.walk();

class Teacher extends Person {

    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    tech() {
        console.log("Tech");
    }
}

const teacher = new Teacher("Mbr-Sagor", "CSE");
teacher.tech();
teacher.walk()
// const combined = [...teacher.name, " ", ...teacher.subject]
console.log(teacher.name, teacher.subject);
