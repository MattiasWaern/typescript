export{};


function greet(name: string): string {
    return `Hello: ${name}`;
}

const message: string = greet("World");
console.log(message);




let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence : string = `Hello, my namesis ${fullName} and I'll be ${age + 1} next year`;

console.log(sentence);


const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};

console.log(obj[uniqueKey]);


const user = {
    name: "Alice",
    age: 30,
    isAdmin: true
};


console.log(user.name);
console.log(user.age);