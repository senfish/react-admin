import { DatePicker, Divider, Input, InputNumber, Select, Table } from "antd";
import ContainerHeader from "../../../common/Title";
import dayjs from "dayjs";
import TableFilter from "../../../components/Filter";
import { useState } from "react";
import "./index.less";

const { RangePicker } = DatePicker;

const TableFilterPage = () => {
  const [colNum, setColNum] = useState(2);
  const disabledDate = (current) => {
    return current && current > dayjs();
  };
  const items = [
    {
      label: "ID",
      field: "id",
      component: <Input placeholder="请输入ID" />,
    },
    {
      label: "操作用户",
      field: "user",
      component: <Select placeholder="请输入用户名" allowClear />,
    },
    {
      label: "模块",
      field: "module",
      component: <Select placeholder="请输入用户名" allowClear />,
    },
    {
      label: "操作类型",
      field: "type",
      component: <Select placeholder="请输入用户名" allowClear />,
    },
    {
      label: "操作日期",
      field: "date",
      component: <RangePicker disabledDate={disabledDate} />,
    },
  ];
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 120,
    },
    {
      title: "用户",
      dataIndex: "user",
      width: 120,
    },
    {
      title: "类型",
      dataIndex: "type",
    },
    {
      title: "时间",
      dataIndex: "time",
    },
    {
      title: "内容（模块信息）",
      dataIndex: "module",
    },
    {
      title: "操作",
      dataIndex: "action",
    },
  ];
  const controlItems = [
    {
      label: "单行个数",
      field: "colNum",
      component: (
        <InputNumber defaultValue={2} onChange={(value) => setColNum(value)} min={2} max={4} style={{ width: 300 }} />
      ),
    },
  ];
  return (
    <div className="table-filter-page">
      <ContainerHeader title="TableFilter" />
      <div className="content">
        <TableFilter items={controlItems} showReset={false} />
        <Divider />
        <TableFilter items={items} colNum={colNum} defaultCollapsed />
        <Table dataSource={[]} columns={columns} />
      </div>
    </div>
  );
};

export default TableFilterPage;
