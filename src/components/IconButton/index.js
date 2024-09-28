import React from "react";

const IconButton = ({ title, icon, onClick }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default IconButton;
