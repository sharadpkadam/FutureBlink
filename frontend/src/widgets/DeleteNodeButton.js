import React from 'react';

const DeleteNodeButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: 'transparent', 
        color: '#d32f2f', 
        border: '2px solid #d32f2f',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        outline: 'none',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#d32f2f'; 
        e.target.style.color = '#ffffff'; 
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent'; 
        e.target.style.color = '#d32f2f';
      }}
    >
      {label}
    </button>
  );
};

export default DeleteNodeButton;