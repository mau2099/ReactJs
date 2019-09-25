import React from "react";

const Button = props => {
    const { text, text2 } = props;
  return (
    <div>
      <button type="button">{props.text}</button>
      <button type="button">{text2}</button>
    </div>
  );
};

export default Button;
