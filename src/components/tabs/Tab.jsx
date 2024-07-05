import React from 'react';

const Tab = ({ label, id, isActive, onClick }) => {
  return (
    <div
      className= {`tab ${isActive ? 'active' : '' }` } 
      onClick={() => onClick(id)}
    >
      {label}
    </div>
  );
};

export default Tab;