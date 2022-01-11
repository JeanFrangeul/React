
//Nom du fichier : src/components/shared/Button.js
import React from 'react';

const Button = ({label, backgroundColor, isRounded, handleClick}) => {
    const classList = [
        'button',
        isRounded ? 'rounded' : null
    ];
  return (
    <button
      type="button"
      className={classList.join(' ')}
      style={{background: backgroundColor || '#0984e3'}}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default Button;



/*import React from 'react';

const Button = ({label, handleClick}) => {
    return (
        <button 
            type="button"
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;
*/