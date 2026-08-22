import React, { useState } from 'react';


function ToDoList(){
    const [list, setList] = useState<string[]>([]);



    return (
        <div>
            <form id='toDoList'>

            </form>

            <input type='text' id='input' placeholder='Skriv in tasks'></input>
            <button type='submit'>Lägg till Task</button>
        </div>
    )
}