import "./index.less";

interface TitleProps {
  title: string;
  desc?: string;
  style?: React.CSSProperties;
}
const ContainerHeader = (props: TitleProps) => {
  const { title, desc, style = {} } = props;
  return (
    <div className="container-header" style={style}>
      <div className="container-title">{title}</div>
      {desc && <span className="container-tips">tab级别路由示例</span>}
    </div>
  );
};

export default ContainerHeader;
