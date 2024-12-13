import ContainerHeader from "../../../common/Title";
import './index.less';

const FrontEnd = () => {
  return (
    <div className="front-end-page">
      <ContainerHeader title="前端" />
      <div className="content">
        <div className="second-title">功能介绍</div>
        <ul className="list">
          <li>🚀&nbsp;&nbsp;  技术栈: React18、Ant-Design v5、React-Router v6、Echarts、Vite5</li>
          <li>🚀&nbsp;&nbsp;  集成 TypeScript </li>
          <li>🚀&nbsp;&nbsp;  支持路由懒加载</li>
          <li>🚀&nbsp;&nbsp;  支持tab级别的路由切换</li>
          <li>🚀&nbsp;&nbsp;  使用 TypeScript 对 Axios 二次封装 （错误拦截、常用请求封装、请求 Loading…）</li>
          <li>🚀&nbsp;&nbsp;  Jenkins + Github Webhooks 实现自动化部署 </li>
        </ul>
      </div>
    </div>
  );
};
export default FrontEnd;
