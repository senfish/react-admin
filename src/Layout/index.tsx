import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import { siderMenus } from "../Menu";
import Header from "../Header";
import "./index.less";

const isLogin = false; // 可以是用户信息的对象
const LayoutWrapper = (props) => {
  const navigate = useNavigate();
  const [currentModule, setCurrentModule] = useState<string>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
      setCurrentModule("home");
      return;
    }
    const paths = location.pathname.split("/");
    if (paths[1]) {
      setCurrentModule(paths[1]);
    }
  }, []);
  const getSelectKey = (pathname, menusMap) => {
    let tag = false;
    let targetMenu = null;
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
    const targtMenu = getSelectKey(location.pathname, siderMenus);
    setSelectedKeys([targtMenu?.key]);
  }, [location.pathname]);
  const onSelect = (target) => {
    const path = get(target, "item.props.path", "");
    navigate(path);
  };
  const currentMenus = siderMenus[currentModule];
  const hiddenMenu = useMemo(() => {
    return currentMenus?.some((item) => item.hidden);
  }, [currentMenus]);
  console.log("selectedKeys: ", selectedKeys);

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
