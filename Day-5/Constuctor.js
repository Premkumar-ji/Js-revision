// class Student {
//     constructor(name = "Unknown" , age = 0){
//         this.name = name;
//         this.age = age;
//        }

//        introduce(){
//         console.log("my name is " + this.name + " and my age is " + this.age);
        
//        }
// }

// const s1 = new Student("Prem", 23);
// const s2 = new Student();
// s1.introduce();
// s2.introduce();
// console.log(s1.name , s1.age);
// console.log(s2.name , s2.age);

class Boss{
    constructor(name = "Mr Unknown" , age= 23){
        this.name = name;
        this.age = age;

    }

    introduce(name = "hacker" , age = 42){
        console.log("My name is " + this.name + " and my age is "  + this.age)
    }
    changeName(newName){
        this.name = newName;
    }
}

const Boss1 = new Boss("Prem"  , 23);
const Boss2 = new Boss();
Boss1.introduce();
Boss1.changeName("Prem Kumar Modi");
Boss2.introduce();

console.log(Boss1.name);
