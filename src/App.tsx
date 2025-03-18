import { RouterProvider } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import routers from "./routers";

dayjs.locale("zh-cn");

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider
        router={routers}
        future={{
          v7_startTransition: false,
          // v7_relativeSplatPath: false,
        }}
      />
    </ConfigProvider>
  );
};
export default App;
