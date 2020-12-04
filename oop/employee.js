class Employee {

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

    about() {
        var info;
        info = "First Name: " + this.first_name + "\n" + "Last Name: " + this.last_name + "\n" + "Age: " + this.age + "\n" + "Salary: " + this.salary + "\n" + "Full Name: " + this.first_name + " " + this.last_name + "\n" + "Email: " + this.first_name + "." + this.last_name +"@"+this.company_name
        return info;
    }

}

employee_instance = new Employee("mbr", "sagor", 24, 25000, "Divine-IT Ltd.");
console.log(employee_instance.about());
