import React from "react";

const HeadlineText = ({ children, ...restProps }) => {
  return (
    <div className="label label-headline">
      <span>{restProps.headline}</span>
    </div>
  )
};

export default HeadlineText;