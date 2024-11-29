import React from 'react';

const WaitDelayButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: 'transparent', 
        color: '#1976d2', 
        border: '2px solid #1976d2', 
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s', 
        outline: 'none',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#1976d2'; 
        e.target.style.color = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent'; 
        e.target.style.color = '#1976d2'; 
      }}
    >
      {label}
    </button>
  );
};

export default WaitDelayButton;