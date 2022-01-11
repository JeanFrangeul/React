import React, { useState } from 'react';


const PlusMoins = () => {
    const [count, setCount] = useState(0);

    const handleMore = () => {
        setCount(count + 1);
    }

    const handleLess = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>Compteur numero deux = {count}</p>
            <button onClick={handleMore}>PLUS</button>
            <button onClick={handleLess}>MOINS</button>
        </div>
    )
}

export default PlusMoins
