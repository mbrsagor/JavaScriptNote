class Person {

    constructor(first_name, last_name, age, salary, company_name) {
        this.first_name = first_name
        this.last_name = last_name
        this.age = age
        this.salary = salary
        this.company_name = company_name
    }

    email() {
        return this.first_name + "." + this.last_name + this.company_name;
    }

    personInfo() {
        var info;
        info = "First Name: " + this.first_name + "\n" + "Last Name: " + this.last_name + "\n" + "Age: " + this.age + "\n" + "Salary: " + this.salary + "\n" + "Full Name: " + this.first_name + " " + this.last_name + "\n" + "Email: " + this.first_name + "." + this.last_name +"@"+this.company_name
        return info;
    }

}

person1_instance = new Person("mbr", "sagor", 24, 25000, "Divine-IT Ltd.");
console.log(person1_instance.personInfo())
