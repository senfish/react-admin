import ContainerHeader from "../../../common/Title";
import CardWrapper from "../../../components/CardWrapper"
import Ellipsis from "../../../components/Ellipsis";
import { Input, Form, InputNumber } from 'antd'
import './index.less'
import TableFilter from "../../../components/Filter";
import { useState } from "react";
const text = '我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，我是超长的一段文字，'
const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 12,
  },
}
const EllipsisPage = () => {
  const [width, setWidth] = useState(200);
  const [line, setLine] = useState(1);

  const items = [{
    label: 'width',
    field: 'width',
    component: <InputNumber onChange={(value) => setWidth(value)} defaultValue={200} min={50} style={{ width: 300 }} />
  }, {
    label: 'line',
    field: 'line',
    component: <InputNumber onChange={(value) => setLine(value)} defaultValue={1} min={1} max={10} style={{ width: 300 }} />
  }]
  return <div className="ellipsis-page">
    <ContainerHeader title="Ellipsis" />
    <div className="content">
      <TableFilter items={items} showReset={false} />
      <div style={{ width: width }}>
        <Ellipsis title={text} line={line}>
          <span>{text}</span>
        </Ellipsis>
      </div>
    </div>

  </div>
}

export default EllipsisPage;