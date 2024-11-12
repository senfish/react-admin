import { Menu } from "antd";
import { OpenAIOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { headerMenus } from "../Menu";
import "./index.less";
const getCurrentKey = () => {
  const path = window.location.pathname.split("/")[1];
  return path;
};
const Header = ({
  setCurrentModule,
}: {
  setCurrentModule: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const navigate = useNavigate();
  const currentKey = getCurrentKey();
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentModule(e.key);
    if (e.key === "class") {
      navigate("/class/math");
    } else if (e.key === "person") {
      navigate("/person/user/info/record");
    } else if (e.key === "home") {
      navigate("/home");
    } else {
      navigate(`/${e.key}`);
    }
  };
  return (
    <div className="layout-header">
      <div className="icon-content">
        <OpenAIOutlined />
        <span className="title">AI Center</span>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[currentKey]}
        mode="horizontal"
        items={headerMenus}
      />
    </div>
  );
};

export default Header;
