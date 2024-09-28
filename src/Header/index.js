import React from "react";
import AmountView from "../components/AmountView";

const Header = () => {
  return (
    <div className="header">
      <div className="amount-wrapper">
        <AmountView className="amount" amount={63179.71} />
        <div className="currency">USD</div>
      </div>
      <div className="pl-container">
        <AmountView prefix="+" amount={2161.42} />
        <div style={{ marginLeft: 5 }}>(3.54%)</div>
      </div>
    </div>
  );
};

export default Header;
