let name1: string = "Alash";
name1 = "20";
console.log(name1);

let age1: number = 20;
console.log(age1);
// age1 = "Akash age";

let age2: any = 20;
age2 = "Akash age";
console.log(age2);

let array1: number[] = [1, 2, 3, 4, 5];
console.log(array1);

let isactive1: boolean = true;
console.log(isactive1);


// how to write the function in typescript
// function
function add(a: number, b: number): number {
    return a + b;
}

add(10, 50);

// object this is the js based object

let person = {
    name: "Akash",
    age: 20
}

let person1: { name: string, age: number }

    = {
    name: "vishakha",
    age: 26
}