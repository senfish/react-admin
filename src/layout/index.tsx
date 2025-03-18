import { ConfigProvider, Layout, Menu, Spin } from "antd";
import zhCN from "antd/locale/zh_CN";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Suspense, useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import { siderMenus } from "./menu";
import Header from "./header";
import "./index.less";
import { useRequest } from "@hooks";
import { getUserInfoDispatch } from "./services";

const LayoutWrapper = () => {
  const navigate = useNavigate();
  const [currentModule, setCurrentModule] = useState<string>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const { run: getUserInfo } = useRequest<null, { username: string; role: number; id: number }>(
    {
      request: getUserInfoDispatch,
    },
    {
      onSuccess: (res) => {
        // TODO需要存储到全局store里面
        localStorage.setItem("userInfo", JSON.stringify(res));
      },
    }
  );
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
      setCurrentModule("home");
      return;
    }
    const paths = location.pathname.split("/");
    // /project/front-end =>  ['', 'project', 'front-end']
    if (paths[1]) {
      setCurrentModule(paths[1]);
    }
    const targtMenu = getSelectKey(location.pathname, siderMenus);

    if (!targtMenu) {
      navigate("/home");
    } else {
      setSelectedKeys([targtMenu?.key]);
    }
  }, [location.pathname]);
  useEffect(() => {
    getUserInfo();
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

  const onSelect = (target) => {
    const path = get(target, "item.props.path", "");
    navigate(path);
  };
  const currentMenus = siderMenus[currentModule];
  const hiddenMenu = useMemo(() => {
    return currentMenus?.some((item) => item.hidden);
  }, [currentMenus]);
  return (
    <Layout style={{ background: "#fff" }} className="sens-project-layout">
      <Header setCurrentModule={setCurrentModule} />
      <Layout
        style={{
          flexDirection: "row",
          paddingTop: 48,
          minHeight: "calc(100vh - 1px)",
          height: "calc(100vh - 48px)",
          background: "#fff",
        }}
        className="layout-wrapper"
      >
        {!hiddenMenu && (
          <Menu
            mode="inline"
            className="sider-menu-ajydgfajydsfgaydsf"
            style={{ width: 200, flexShrink: 0 }}
            items={currentMenus}
            selectedKeys={selectedKeys}
            onSelect={onSelect}
            defaultOpenKeys={["/person"]}
          />
        )}
        <div style={{ width: "100%", overflowY: "auto" }}>
          <ConfigProvider locale={zhCN}>
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Spin />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </ConfigProvider>
        </div>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
