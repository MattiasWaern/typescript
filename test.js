"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return "Hello: ".concat(name);
}
var message = greet("World");
console.log(message);
var color = "blue";
var fullName = 'John Doe';
var age = 30;
var sentence = "Hello, my namesis ".concat(fullName, " and I'll be ").concat(age + 1, " next year");
console.log(sentence);
