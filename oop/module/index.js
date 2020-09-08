import { Teacher } from './teacher';

const teacher = new Teacher("Mbr-Sagor", "CSE");
teacher.tech();
teacher.walk()
// const combined = [...teacher.name, " ", ...teacher.subject]
console.log(teacher.name, teacher.subject);
