import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setTodo } from '../../store/todoSlice';
import { v4 as uuidv4 } from "uuid";

const InputBox = () => {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useAppDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (!value) return;

        setNewTodo(value);
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const todoObj = {
            id: uuidv4(),
            details: newTodo,
            is_completed: false
        }
        dispatch(setTodo(todoObj));
        setNewTodo("")

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" onChange={handleInputChange} value={newTodo} />
            </form>
        </div>
    )
}

export default InputBox;
