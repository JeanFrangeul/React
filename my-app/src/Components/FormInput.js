import React, { useState } from 'react';
import './FormInput.css';


const FormInput = ({label, placeholder}) => {
    const [inputValue, setInputValue] = useState('Thomas');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label className="LabelInput">
                {label}
            </label>
            <input 
                type='text'
                className="Input"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormInput;