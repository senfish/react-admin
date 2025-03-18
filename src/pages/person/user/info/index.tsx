import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.less";
import ContainerHeader from "../../../../common/Title";
import RecordTabPane from "./RecordTabPane";
import ExploreTabPane from "./ExploreTabPane";
const { TabPane } = Tabs;

const Info = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState("record");
  const findKeyByPathname = (pathname: string) => {
    return tabs.find((item) => item.path === pathname)?.key || "ruleExplore";
  };
  useEffect(() => {
    const key = findKeyByPathname(location.pathname);
    setActiveKey(key);
  }, []);
  const tabs = [
    {
      key: "record",
      label: "操作记录",
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
        return <RecordTabPane />;
      case "explore":
        return <ExploreTabPane />;
      default:
        return null;
    }
  };
  return (
    <div className="user-info-page">
      <ContainerHeader title="信息管理" desc="tab级别路由示例" style={{ borderBottom: "none" }} />
      <Tabs className="user-info-tab" activeKey={activeKey} onTabClick={onTabClick} type="card" items={tabs} />
      <div className="tab-content">{renderTabs()}</div>
    </div>
  );
};
export default Info;
