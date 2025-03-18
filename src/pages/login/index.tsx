import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, Row } from "antd";
import "./index.less";
import { useRequest } from "@hooks";
import { loginDispatch } from "./services";
import { BackgroundImg, LeftImg, OverlayMask } from "./mask";

const Login = (props) => {
  console.log("login");
  const { hasAuth } = props;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { run } = useRequest<null, { token: string }>(
    { request: loginDispatch },
    {
      onSuccess: (data) => {
        localStorage.setItem("token", `Bearer ` + data.token);
        navigate("/home", { replace: true });
      },
    }
  );
  useEffect(() => {
    if (!hasAuth) {
      navigate("/login", { replace: true });
    }
  }, []);
  const login = async () => {
    const info = await form.validateFields();
    await run(info);
  };
  return (
    <div className="login">
      <OverlayMask />
      <div className="loginc-card">
        <div className="header">登录系统</div>
        <Form form={form} layout="vertical">
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="默认admin" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input placeholder="默认密码123456" />
          </Form.Item>
        </Form>
        <Button className="submit" onClick={login} type="primary" style={{ width: "100%" }}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
