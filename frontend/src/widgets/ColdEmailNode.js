import React from 'react';

const ColdEmailButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: 'transparent', 
        color: '#f06292', 
        border: '2px solid #f06292', 
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        outline: 'none',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#f06292'; 
        e.target.style.color = '#ffffff'; 
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent'; 
        e.target.style.color = '#f06292'; 
      }}
    >
      {label}
    </button>
  );
};

export default ColdEmailButton;