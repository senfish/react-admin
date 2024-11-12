import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.less";
const { TabPane } = Tabs;

const Record = () => {
  return <>运行记录page</>;
};
const Explore = () => {
  return <>探查视角page</>;
};
const Info = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("record");
  const findKeyByPathname = (pathname: string) => {
    return tabs.find((item) => item.path === pathname)?.key || "ruleExplore";
  };
  useEffect(() => {
    const key = findKeyByPathname(window.location.pathname);
    setActiveKey(key);
  }, []);
  const tabs = [
    {
      key: "record",
      label: "运行记录",
      path: "/person/user/info/record",
    },
    {
      key: "explore",
      label: "探查视角",
      path: "/person/user/info/explore",
    },
  ];
  const onTabClick = (key: string) => {
    const target = tabs.find((item) => item.key === key);
    navigate(target?.path);
    setActiveKey(key);
  };

  const renderTabs = () => {
    switch (activeKey) {
      case "record":
        return <Record />;
      case "explore":
        return <Explore />;
      default:
        return null;
    }
  };
  return (
    <div className="user-info-page">
      <div className="user-info-title">信息标题</div>
      <Tabs
        className="user-info-tab"
        activeKey={activeKey}
        onTabClick={onTabClick}
        type="card"
      >
        {tabs.map((item) => {
          return <TabPane tab={item.label} key={item.key} />;
        })}
      </Tabs>
      <div className="tab-content">{renderTabs()}</div>
    </div>
  );
};
export default Info;
