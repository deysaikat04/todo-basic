import {createSlice} from "@reduxjs/toolkit";

export interface ISingleTodoItem {
    id: number;
    details: string;
    is_completed: boolean
}
interface ITodoState {
    todos: Array<ISingleTodoItem>
}

const initialState: ITodoState = {
    todos: []
}


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:  {
        setTodo: (state, action) => {
            state.todos = [
                ...state.todos,
                action.payload
            ]
        },
        updateTodo: (state, action) => {
            const {payload} = action;
            const todos = state.todos.map(aTodo => {
                if(aTodo.id === payload.id) {
                    aTodo.is_completed = payload.isCompleted
                }
                return aTodo;
            })
            
            state.todos = [
                ...todos
            ]
        }
    }
});


export default todoSlice.reducer;

export const {setTodo, updateTodo} = todoSlice.actions;