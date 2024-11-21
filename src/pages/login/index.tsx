import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, Row } from "antd";
import "./index.less";
import useRequest from "../../hooks/useRequest";
import { loginDispatch } from "./services";
// import { useRequest } from "ahooks";

const Login = (props) => {
  const { hasAuth } = props;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { run } = useRequest<{ token: string }>(
    { request: loginDispatch },
    {
      onSucess: (data) => {
        localStorage.setItem("token", `Bearer ` + data.token);
        navigate("/home", { replace: true });
      },
      onError: (err) => {
        console.log("onError: ", err);
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
      <div className="header">登录系统</div>
      <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="默认admin" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input placeholder="默认密码123456" />
        </Form.Item>
        <Row>
          <Col span={8}></Col>
          <Col span={16}>
            <Button onClick={login} type="primary" style={{ width: "100%" }}>
              登录
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
