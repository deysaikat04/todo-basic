import React  from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { ISingleTodoItem, updateTodo } from '../../store/todoSlice';

interface CheckBoxProps {
    aTodo: ISingleTodoItem
}
const Checkbox = ({aTodo}: CheckBoxProps) => {
    const dispatch = useAppDispatch();
    const {id, is_completed} = aTodo;

    const onCheckBoxClick = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        const payload = {
            id,
            isCompleted: event.target.checked
        }
       dispatch(updateTodo(payload))
    }
  return (
    <div>
        <input type="checkbox" name='todo_check' checked={is_completed} onChange={onCheckBoxClick}/>
    </div>
  )
}

export default Checkbox;
