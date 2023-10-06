import React from 'react';

const Button = ({ text, borderColor, color, textc }) => {
  return (
    <button
      className={`bg-${color} border-${borderColor} border-2 rounded-md px-4 py-2 text-${textc} hover:bg-${borderColor} hover:text-white hover:border-transparent transition duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
