import React from 'react';

// The 'title' prop is for the main heading (e.g., Patient Name)
// 'children' will contain the details (Date, Time, Reason, etc.)
const Card = ({ title, children, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;