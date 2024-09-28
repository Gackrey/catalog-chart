import React, { useState } from "react";
import TabHeader from "./TabHeader";
import TabItem from "./TabItem";

const Tabs = ({ className, defaultActive, items }) => {
  const [activeTab, setActiveTab] = useState(defaultActive || items?.[0]?.id);

  return (
    <div className={className}>
      <div className="tab-header-container">
        {items.map((item) => (
          <TabHeader
            key={item.id + "header"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            item={item}
          />
        ))}
      </div>
      <div className="hr" />
      {items.map((item) => (
        <TabItem key={item.id + "body"} activeTab={activeTab} item={item} />
      ))}
    </div>
  );
};

export default Tabs;
