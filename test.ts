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


let username: string = "alice";

username = 'alice'


const names: string[] = [];
names.push('Dylan');


const numbers = [1, 2, 3, 4];
numbers.push(4);
// error numbers.push("2") 
let head: number = numbers[0];


let ourTuple: [number, boolean, string];

ourTuple = [5, true, 'bob'];

const ourReadOnlyTuple: [number, boolean, string] = [5, true, 'the real coding god'];

ourReadOnlyTuple.push('coding god took a day off');


const car: {type: string, model: string, year: number} = {
    type: 'Toyota',
    model: 'Carolla',
    year: 2009
}


type Animal = {name: string};
type Bear = Animal & {honey: boolean};
const bear: Bear = {name:'Winnie', honey: true};

type Status = "succes" | "error";
let response: Status = "succes"


interface Rectangle {
    width: number,
    height: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 30
};