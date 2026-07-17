class Person {

    private name: string = "Bharath Reddy";
    age: number = 35;
    city: string = "Hyderabad";

    //Method to display the data
    // printData() {
    //     console.log(this.name);
    //     console.log(this.age);
    //     console.log(this.city);
        
    // }

    public getName(): string{
        return this.name
    }

    public setName(newName:string) : string{
        this.name = newName;
        console.log(this.name)
    }

}

// //Child Class
// class Child extends Person {

//     //Method to access the data from parent class (Person)
//     printChildData() {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.city);

//     }
// }

// //Outsider Class
// class Outsider {
//     //Method to display the data
//     printOutsiderData() {
//         let obj = new Person();
//         obj.printData();
//         // console.log(obj.age);
//         // console.log(obj.city);
//     }
// }


let ref1 =new Person()
// ref1.printData()
// console.log(ref1.)

ref1.setName('deva')

// let ref2 =new Child()
// ref2.printChildData()


// let ref3 = new Outsider()
// ref3.printOutsiderData()