 class Student{
    constructor(sid,sName){
        this.id = sid;
        this.name = sName;
        this.school ='GSC'
    }
 }

const student1 = new Student(12, 'Robi');
const student2 = new Student(15, 'Robin');
console.log(student1,student2);