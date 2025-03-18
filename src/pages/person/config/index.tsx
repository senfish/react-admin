import CardWrapper from "../../../components/CardWrapper";

const Config = () => {
  return <CardWrapper><ul>
    <li>文件树查询</li>
    <li>tab级别路由</li>
    <li>Ellipsis组件封装</li>
    <li>流程图低代码</li>
    <li>中台table解决方案</li>
    <li>
      封装的过程中，如何让header固定，左侧menu固定, 只滚动content区域？
    </li>
    header部分用fixed布局，先给sider元素设置一个固定的高度，用vh，不要用%，然后给content设置overflow-y:
    auto;
    <li>为什么点击菜单会出现闪烁？</li>
    路由用了lazy的话，Suspense组件必须要跟路由组件最近的一层，否则会出现闪烁
  </ul></CardWrapper>;
};

export default Config;
