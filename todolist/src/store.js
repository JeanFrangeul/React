import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo(state, action) {
            return {...state, todos: [...state.todos, action.payload]};
        },
        emptyTodos(state) {
            return {...state, todos: []};
        }
    }
})

const store = configureStore({
    reducer: todoSlice.reducer
});

export const { addTodo, emptyTodos } = todoSlice.actions;

export default store;