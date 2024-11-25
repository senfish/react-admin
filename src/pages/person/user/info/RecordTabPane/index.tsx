import { Input, Select, DatePicker, Table } from "antd";
import Filter from "../../../../../components/Filter";
import useRequest from "../../../../../hooks/useRequest";
import {
  getMonitorListDispatch,
  MonitorListData,
  MonitorListItem,
} from "./services";
const { RangePicker } = DatePicker;

const typeMap = {
  1: "新增",
  2: "修改",
  3: "删除",
  4: "登录",
};

const RecordTabPane = () => {
  const { data } = useRequest<MonitorListData>({
    request: getMonitorListDispatch,
    initParams: {},
  });
  console.log("data: ", data);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "用户",
      dataIndex: "user",
    },
    {
      title: "类型",
      dataIndex: "type",
      render: (text) => {
        return typeMap[text] || "--";
      },
    },
    {
      title: "时间",
      dataIndex: "time",
    },
    {
      title: "内容（模块信息）",
      dataIndex: "module",
    },
  ];
  const items = [
    {
      label: "查看范围",
      field: "user",
      component: <Input placeholder="请输入用户名" />,
    },
    {
      label: "查看范围",
      field: "user",
      component: <Select placeholder="请输入用户名" />,
    },
    {
      label: "操作日期",
      field: "user",
      component: <RangePicker />,
    },
    {
      label: "查看范围",
      field: "user",
      component: <Input placeholder="请输入用户名" />,
    },
    {
      label: "创建时间",
      field: "user",
      component: <RangePicker />,
    },
    {
      label: "更新时间",
      field: "user",
      component: <RangePicker />,
    },
  ];
  return (
    <div>
      <li> 是一个表格，记录着所有的人员的操作日志信息；</li>
      <li> 操作类型：登录、新增、修改、删除 ； 操作时间； 操作人；</li>
      <li> 查询： 支持用户名查询， 支持时间范围查询； 支持操作类型查询；</li>
      <br></br>
      <div>
        <Filter items={items} defaultCollapsed />
      </div>
      <Table size={"small"} columns={columns} dataSource={data?.data} />
    </div>
  );
};

export default RecordTabPane;
