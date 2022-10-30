import React from "react";

const Button = (props) => {
  const { text, color } = props;
  return (
    <div>
      {color === "orange" && (
        <button type="button" className="btn orange-button rounded-0">
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
