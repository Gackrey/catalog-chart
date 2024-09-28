import React from "react";

const TabHeader = ({ activeTab, setActiveTab, item }) => {
  return (
    <div onClick={() => setActiveTab(item.id)}>
      <div className={`tab-header ${activeTab === item.id ? "tab-header-active" : ""}`}>{item.title}</div>
      {activeTab === item.id && <div className="tab-active" />}
    </div>
  );
};

export default TabHeader;
