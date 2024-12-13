import ContainerHeader from "../../../common/Title";
import './index.less';


const Chinese = () => {
  return (
    <div className="back-end-page">
      <ContainerHeader title="后端" />
      <div className="content">
        <div className="second-title">功能介绍</div>
        <ul className="list">
          <li>🚀&nbsp;&nbsp;  技术栈: Nestjs、MySQL、TypeORM、Redis</li>
          <li>🚀&nbsp;&nbsp;  登录注册 </li>
          <li>🚀&nbsp;&nbsp;  JWT 认证</li>
          <li>🚀&nbsp;&nbsp;  监控模块</li>
          <li>🚀&nbsp;&nbsp;  技术文章模块</li>
          <li>🚀&nbsp;&nbsp;  用户模块</li>
          <li>🚀&nbsp;&nbsp;  采用Docker将NestJs、MySQL、Redis容器化部署 </li>
        </ul>
      </div>
    </div>
  );
};
export default Chinese;
