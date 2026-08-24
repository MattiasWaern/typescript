import { useState } from "react";
import React from "react";


type GreetingProps = {
    name: string;
    age?: number;
};


export function Greeting({name, age}: GreetingProps){
    return(
        <div>
            <h2>Hell, {name}</h2>
            {age !== undefined && <p>You are {age} years old</p>}
        </div>
    )
}




function nameInput(){
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
    }
    return <input onChange={handleChange}/>
}


function saveButton(){
    function handleClick(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
    }
    return <button onClick={handleClick}>Save</button>;
}



const [count, setCount] = React.useState<number>(0);
const [status, setStatus] = React.useState<'idle' | 'loading' | 'error'>('idle');

type User = {id: string; name: string};
const [user, setUser] = React.useState<User | null>(null);


async function fetchJson<T>(url: string): Promise<T>{
    const response = await fetch('url');

    if(!response.ok){
        throw new Error('Network error');
    }

    return response.json() as Promise<T>
}

async function loadPosts(){
    type Post = {id: number; title: string};
    const posts = await fetchJson<Post[]>("/api/posts");
    console.log(posts);
}