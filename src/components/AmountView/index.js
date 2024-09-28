import React from "react";

const AmountView = ({ className, prefix, amount, decimal = 2 }) => {
  const value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: decimal,
  }).format(amount);

  return (
    <div className={className}>
      {prefix || ""}
      {value.slice(1)}
    </div>
  );
};

export default AmountView;
