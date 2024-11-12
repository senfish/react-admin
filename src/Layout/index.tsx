import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import { siderMenus } from "../Menu";
import Header from "../Header";
import "./index.less";

const LayoutWrapper = (props) => {
  const navigate = useNavigate();
  const [currentModule, setCurrentModule] = useState("person");
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/home");
      return;
    }
    const paths = window.location.pathname.split("/");
    if (paths[1]) {
      setCurrentModule(paths[1]);
    }
  }, []);
  const getSelectKey = (pathname, menusMap) => {
    let tag = false;
    let targetMenu = null;
    // let parentMenu = null;
    const findMenuItem = (menus) => {
      for (let i = 0; i < menus.length; i++) {
        const tempMenu = menus[i];
        if (tempMenu?.hidden) {
          break;
        }
        if (!tag && tempMenu?.includesUrl?.find((url) => pathname === url)) {
          targetMenu = tempMenu;
          tag = true;
        }
        if (!tag && tempMenu?.children) {
          findMenuItem(tempMenu.children);
        }
      }
    };
    Object.keys(menusMap).forEach((key) => findMenuItem(menusMap[key]));
    return targetMenu;
  };
  useEffect(() => {
    const targtMenu = getSelectKey(window.location.pathname, siderMenus);
    setSelectedKeys([targtMenu?.key]);
  }, [window.location.pathname]);
  const onSelect = (target) => {
    const path = get(target, "item.props.path", "");
    navigate(path);
  };
  const currentMenus = siderMenus[currentModule];
  const hiddenMenu = useMemo(() => {
    return currentMenus.some((item) => item.hidden);
  }, [currentMenus]);

  return (
    <Layout style={{ background: "#fff" }}>
      <Header setCurrentModule={setCurrentModule} />
      <Layout
        style={{
          flexDirection: "row",
          paddingTop: 48,
          height: "100%",
          minHeight: "calc(100vh - 1px)",
          background: "#fff",
        }}
      >
        {!hiddenMenu && (
          <Menu
            mode="inline"
            style={{ width: 200 }}
            items={currentMenus}
            selectedKeys={selectedKeys}
            onSelect={onSelect}
            defaultOpenKeys={["/person"]}
          />
        )}
        <div style={{ width: "100%" }}>{props.children}</div>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
