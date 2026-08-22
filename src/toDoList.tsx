import React, { useState } from 'react';
import './style.css';

function ToDoList() {
    const [list, setList] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (input.trim() === "") return;

        setList([...list, input]);
        setInput("");
    }

    function deleteTask(index: number) {
        setList(list.filter((_, i) => i !== index));
    }

    return (
        <div className="todo-container">
            <form className="todo-form" onSubmit={handleSubmit}>

                <h1>Todo List</h1>

                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Skriv in en task..."
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />

                    <button type="submit">
                        Lägg till
                    </button>
                </div>

                <ul>
                    {list.map((task, index) => (
                        <li key={index}>
                            <span>{task}</span>

                            <button
                                type="button"
                                onClick={() => deleteTask(index)}
                            >
                                Ta bort
                            </button>
                        </li>
                    ))}
                </ul>

            </form>
        </div>
    );
}

export default ToDoList;