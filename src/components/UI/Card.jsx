import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-4 md:p-6 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;