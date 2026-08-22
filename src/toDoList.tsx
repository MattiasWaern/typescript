import React, { useState } from 'react';

function ToDoList() {
    const [list, setList] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        setList([...list, input]);
        setInput("");
    }

    return (
        <div>
            <form id="toDoList" onSubmit={handleSubmit}>

                {list.map((task) => (
                    <li>{task}</li>
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