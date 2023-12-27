import React from 'react';
import { useState } from 'react';
import './Groccery.css'

function Groccery() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewRTod] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { text: newTodo.trim(), checked: false }]);
            setNewRTod("");
        }
    }

    const handleDeleteTodo = (index) => {
        const newGrocceries = [...todos];
        newGrocceries.splice(index, 1);
        setTodos(newGrocceries)

    }
    const handleToggleTodo = (index) => {
        const newGrocceries = [...todos];
        newGrocceries[index].checked = !newGrocceries[index].checked;
        setTodos(newGrocceries)

    }

    return (
        <div className='body'>
            <div className='main'>
                <h1 id='h1' >Groccery Bud</h1>
                <input id='input' type='text' value={newTodo} onChange={(e) => setNewRTod(e.target.value)}></input>
                <button id='btn' onClick={handleAddTodo}>Add</button>
                <ul id='ul'>
                    {todos.map((todo, index) => (
                        <div id='li-div'>
                            <li key={index} id='li'>
                                <input id='checkbox' type='checkbox' checked={todo.checked} onChange={() => handleToggleTodo(index)}></input>
                                <span id='span' style={{
                                    textDecoration: todo.checked ? "line-through" : ""
                                }}>{todo.text}</span>
                                <button id='btn2' onClick={() => handleDeleteTodo(index)}>Delete</button>

                            </li>

                        </div>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Groccery
