import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


const reducers = combineReducers({
    todo: todoSlice
});

export const store = configureStore({
    reducer: reducers
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
