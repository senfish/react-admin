import { Dropdown, Menu } from "antd";
import { GithubOutlined, OpenAIOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { headerMenus } from "../menu";
import "./index.less";
import { useMemo } from "react";

const getCurrentKey = (location) => {
  const path = location.pathname.split("/")[1];
  return path;
};
const Header = ({ setCurrentModule }: { setCurrentModule: React.Dispatch<React.SetStateAction<string>> }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentKey = getCurrentKey(location);
  const onClick: MenuProps["onClick"] = (e) => {
    // TODO可以考虑做成自动识别
    setCurrentModule(e.key);
    if (e.key === "project") {
      navigate("/project/front-end");
    } else if (e.key === "biz") {
      navigate("/biz/table-filter");
    } else if (e.key === "person") {
      navigate("/person/user/info/record");
    } else if (e.key === "home") {
      navigate("/home");
    } else {
      navigate(`/${e.key}`);
    }
  };
  const getUserName = useMemo(() => {
    const userInfo = localStorage.getItem("userInfo");
    try {
      return JSON.parse(userInfo)?.username;
    } catch {
      return "";
    }
  }, [localStorage.getItem("userInfo")]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "退出登录",
      onClick: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        navigate("/login");
      },
    },
  ];
  return (
    <div className="layout-header">
      <div className="icon-content">
        <OpenAIOutlined />
        <span className="title">Saas Platform</span>
      </div>
      <Menu
        style={{ flex: 1, borderBottom: "none" }}
        onClick={onClick}
        selectedKeys={[currentKey]}
        mode="horizontal"
        items={headerMenus}
      />
      <a className="github" href="https://github.com/senfish/react-admin">
        <GithubOutlined className="icon" />
      </a>
      <Dropdown menu={{ items }} overlayStyle={{ width: 200 }}>
        <div className="user">
          <span style={{ marginRight: 4 }}>{getUserName}</span>
          <div className="avatar">
            <UserOutlined className="user-icon" />
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default Header;
