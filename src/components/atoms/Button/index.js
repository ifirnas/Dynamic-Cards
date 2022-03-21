import React from "react";
import './index.scss';

const Button = ({hovered}) => {

  return (
    <div className="button" style={{ opacity: hovered ? 1 : 0 }}>Explore More</div>
  )
};

export default Button;