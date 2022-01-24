import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');

  const changeHandler = event => {
    setTodo(event.target.value);
  }

  return (
    <div>
      <form>
        <input type="text" value={todo} onChange={changeHandler} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
