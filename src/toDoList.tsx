import React, { useState } from 'react';

function ToDoList() {
    const [list, setList] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        setList([...list, input]);
        setInput("");
    }

    function deleteTask(index: number){
        setList(list.filter((_, i) => i !== index));
    }

    return (
        <div>
            <form id="toDoList" onSubmit={handleSubmit}>

                {list.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button type='button' onClick={() => deleteTask(index)}>Ta bort</button>
                        </li>
                ))}

                <input
                    type="text"
                    id="input"
                    placeholder="Skriv in tasks"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />

                <button type="submit">
                    Lägg till Task
                </button>

            </form>
        </div>
    );
}

export default ToDoList;