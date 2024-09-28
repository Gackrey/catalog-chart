import React from "react";
import IconButton from "../components/IconButton";
import { TbArrowsDiagonal } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { rangeBtnData } from "./data";

const Buttons = ({ activeRange, setActiveRange }) => {
  return (
    <div className="button-wrapper">
      <div className="button-container">
        <IconButton
          title="Fullscreen"
          icon={<TbArrowsDiagonal fontSize={24} />}
        />
        <IconButton
          title="Compare"
          icon={<AiOutlinePlusCircle fontSize={24} />}
        />
      </div>
      <div className="button-container">
        {rangeBtnData.map((btnData) => (
          <button
            key={btnData.id}
            id={btnData.id}
            className={`range-btn ${
              btnData.id === activeRange ? "range-btn-active" : ""
            }`}
            onClick={() => setActiveRange(btnData.id)}
          >
            {btnData.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
