

// class Person{
//     constructor(naam,price,isInternatonal){
//         this.name = naam;
//         this.amount = price;
//         this.outside = isInternatonal;
//     }
// }

// let p1 = new Person("mcd" , 400, true)
// let p2 = new Person("kfc" , 500, true)
// let p3 = new Person("pappu" , 100, false)

// console.log(p1);
// console.log(p2);
// console.log(p3);

// ---------------------------------------------------

// class Person{
//     constructor(naam,price,isInternatonal){
//         this.name = naam;
//         this.amount = price;
//         this.outside = isInternatonal;
//     }
//     greeting(){console.log(`hello from ${this.name}`)}
// }

// class Student{
//     constructor(naam,price,isInternatonal){
//         this.name = naam;
//         this.amount = price;
//         this.outside = isInternatonal;
//     }
//     greeting(){console.log(`hello from ${this.name}`)}
// }

// let p1 = new Person("mcd" , 400, true)
// let p2 = new Person("kfc" , 500, true)
// let p3 = new Student("pappu" , 100, false)

// console.log(p1);
// console.log(p2);
// console.log(p3);


// ---------------------------------------

// class Person{
//     constructor(naam,price,isInternatonal){
//         this.name = naam;
//         this.amount = price;
//         this.outside = isInternatonal;
//     }
//     greeting(){console.log(`hello from ${this.name}`)}
// }

// class Student extends Person{} //inhertence

// let p1 = new Person("mcd" , 400, true)
// let p2 = new Person("kfc" , 500, true)
// let p3 = new Student("pappu" , 100, false)

// console.log(p1);
// console.log(p2);
// console.log(p3);

// ---------------------------------------

// class Person{
//     constructor(naam,price,isInternatonal){
//         this.name = naam;
//         this.amount = price;
//         this.outside = isInternatonal;
//     }
//     greeting(){console.log(`hello from ${this.name}`)}
// }

// class Student extends Person{
//     constructor(naam,price,isInternatonal,roll){
//         super(naam,price,isInternatonal)
//         this.rollnum = roll
//     }
// } 

// let p1 = new Person("mcd" , 400, true)
// let p2 = new Person("kfc" , 500, true)
// let p3 = new Student("pappu" , 100, false , 420)

// console.log(p1);
// console.log(p2);
// console.log(p3);


// ---------------------------------------

class Abc{
    constructor(aa,bb,cc){
        this.a = aa;
        this.b = bb;
        this.c = cc;
    }
}

class Abcd extends Abc{
    constructor(aa,bb,cc,dd){
        super(aa,bb,cc)
        this.d = dd;
    }
}

let p1 = new Abc(100,200,"sam")
let p2 = new Abcd("lol",300,"mav",420)

console.log(p1);
console.log(p);
