import React from 'react';
import { Button as AntButton } from 'antd';
import './Button.css'; // Custom styles to remove outline

const Button = ({ type, onClick, children }) => {
  return (
    <AntButton 
      type={type} 
      className="custom-button" 
      onClick={onClick}
    >
      {children}
    </AntButton>
  );
};

export default Button;
