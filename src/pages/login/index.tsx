import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { hasAuth } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!hasAuth) {
      navigate("/login", { replace: true });
    }
  }, []);
  return <>login</>;
};

export default Login;
