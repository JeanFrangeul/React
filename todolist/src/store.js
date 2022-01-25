import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


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
});

const persistConfig = {
    key: 'todos',
    storage: storage
};

const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);

const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)

export const { addTodo, emptyTodos } = todoSlice.actions;

export default store;