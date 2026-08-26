import React from "react";
import { useState, useEffect } from "react";

interface Booking{
    id: number,
    email: string
}

let bookings = [];

const randomBooking = (): Booking => {
    return{
        id: 123,
        email: "testtset@gmail.com"
    }
}


bookings = [randomBooking()];


console.log(bookings);


function greet(name: string, age: number){
    return(`Hejsan ${name}, är du ${age} år gammal?`)
}

console.log(greet('bob', 20))