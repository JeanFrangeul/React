import React, { useEffect, useState } from 'react';
import './App.css';
import store from './store';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    store.subscribe(() =>  {
      setTodos(store.getState().todos);
    });
  }, [])

  const changeHandler = event => {
    setTodo(event.target.value);
  };

  const submitHandler = event =>{
    event.preventDefault();

    if (todo.trim().length === 0) {
      return;
    }
    store.dispatch({
      type: 'ADD_TODO',
      payload: todo.trim()
    });

    setTodo('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={todo} onChange={changeHandler} />
        <button>Add</button>
      </form>
      <ol>
        {todos.map(todo => {
          return <li>{todo}</li>
        })}
      </ol>
    </div>
  );
}

export default App;
