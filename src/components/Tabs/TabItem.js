import React from "react";

const TabItem = ({ activeTab, item }) => {
  return (
    <div className={`tab-content ${activeTab === item.id ? "" : "tab-hidden"}`}>
      {item.children}
    </div>
  );
};

export default TabItem;
