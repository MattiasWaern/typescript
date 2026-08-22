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