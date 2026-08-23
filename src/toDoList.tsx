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

    function deleteTask(id: number) {
        setList(list.filter((_, i) => i !== id));
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
                    {list.map((task, id) => (
                        <li key={id}>
                            <span>{task}</span>

                            <button
                                type="button"
                                onClick={() => deleteTask(id)}
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