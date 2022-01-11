import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';


function App() {

  /*
  const [count, setCount] = useState(10);

  const handleClick = (mode) => {
    if (mode === '-') {
      setCount(count - 1);
      return;
    } else {
      setCount(count + 1);
    }
  }
  */
 const handleClick = () => {

 }


  return (
    
    <div>
      <Button
        label="SenD"
        backgroundColor="#f0f"
        isRounded={true}
        handleClick={handleClick}
      />
    </div>


    /*
    <div className="App">
      <div>
        <Button
          label="-"
          handleClick={() => handleClick('-')}
        />
        <Button
          label="+"
          handleClick={() => handleClick('+')}
        />
      </div>
      {count}
    </div>
    */
  )
}

export default App;
