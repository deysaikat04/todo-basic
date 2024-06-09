import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector';
import Checkbox from '../Checkbox/Checkbox';
import "./todoList.css";

const TodoList = () => {
    const todoState = useAppSelector((state) => state.todo)


    console.log(todoState.todos);
    return (
        <div className='list-container'>
            {
                todoState.todos.map((aTodo) => {
                    return (
                        <div key={aTodo.id} className='list'>
                            <Checkbox aTodo={aTodo}/>
                            <div className={`${aTodo.is_completed ? 'strike' : ''}`}>{aTodo.details}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TodoList;