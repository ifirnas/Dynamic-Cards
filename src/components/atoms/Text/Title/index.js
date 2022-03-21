import React from "react";
import '../index.scss';

const TitleText = ({ children, ...restProps }) => {
  return (
    <div className="label label-title">
      <span>{restProps.title}</span>
    </div>
  )
};

export default TitleText;