import React from "react";

const ContentText = ({ data, hovered }) => {
  return (
    <div className="label label-content" style={{ opacity: hovered ? 1 : 0 }}>
      <p>
        {data.content}
      </p>
    </div>
  )
};

export default ContentText;