import { Person } from './person';

export class Teacher extends Person {

    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    tech() {
        console.log("Tech");
    }
}