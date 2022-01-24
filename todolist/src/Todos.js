import React, { useState } from 'react';

function Todos({ todos, addTodo }) {
  const [todo, setTodo] = useState('');



  //console.log(props.todos);
  //console.log(props.addTodo());


    
  const changeHandler = event => {
    setTodo(event.target.value);
  };

  const submitHandler = event =>{
    event.preventDefault();

    if (todo.trim().length === 0) {
      return;
    }

    addTodo(todo.trim());

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

export default Todos;
