import React from 'react'
import InputBox from '../../components/InputBox/InputBox';
import TodoList from '../../components/TodoList/TodoList';

const TodoContainer = () => {

  
  return (
    <div>
      <h2>Todo</h2>

      <InputBox/>
      <TodoList/>
    </div>
  )
}


export default TodoContainer;