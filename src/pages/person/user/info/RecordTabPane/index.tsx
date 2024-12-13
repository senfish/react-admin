import { Input, Select, DatePicker, Table } from "antd";
import TableFilter from "../../../../../components/Filter";
import useRequest from "../../../../../hooks/useRequest";
import {
  getMonitorListDispatch,
  MonitorListData,
  MonitorListItem,
} from "./services";
import { useEffect, useState } from "react";
import { getUserListDispatch } from "../../members/service";
import { UserListTableData } from "../../members";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

const typeMap = {
  1: "新增",
  2: "修改",
  3: "删除",
  4: "登录",
  5: "查看"
};

const RecordTabPane = () => {
  const [pageNum, setPageNo] = useState(1);
  const [time, setTime] = useState<string[]>();
  const [type, setType] = useState();
  const [user, setUser] = useState();
  const { data, run } = useRequest<MonitorListData>({
    request: getMonitorListDispatch,
  });
  const { data: userList } = useRequest<UserListTableData>({
    request: getUserListDispatch,
    initParams: {
      pageSize: 1000,
    },
  });
  useEffect(() => {
    run({
      pageNum,
      type,
      time,
      user,
    });
  }, [pageNum, time, type, user]);
  const onChange = (dates, dateStrings) => {
    if (!dates) {
      return setTime(undefined);
    }
    setTime(dateStrings);
  };
  const disabledDate = (current) => {
    return current && current > dayjs();
  };
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
      label: "操作用户",
      field: "user",
      component: (
        <Select
          placeholder="请输入用户名"
          allowClear
          onChange={(value) => {
            setUser(value);
          }}
          options={(userList?.data || []).map((item) => {
            return {
              label: item.username,
              value: item.username,
            };
          })}
        />
      ),
    },
    {
      label: "操作类型",
      field: "type",
      component: (
        <Select
          placeholder="请输入用户名"
          allowClear
          options={Object.keys(typeMap).map((key) => {
            return {
              label: typeMap[key],
              value: key,
            };
          })}
          onChange={(value) => {
            setType(value);
          }}
        />
      ),
    },
    {
      label: "操作日期",
      field: "user",
      component: (
        <RangePicker onChange={onChange} disabledDate={disabledDate} />
      ),
    },
  ];
  return (
    <div>
      <div>
        <TableFilter items={items} defaultCollapsed />
      </div>
      <Table
        size={"small"}
        columns={columns}
        dataSource={data?.data}
        pagination={{
          total: data?.total,
          pageSize: data?.pageSize,
          current: data?.pageNum,
          hideOnSinglePage: true,
          showTotal: (total) => `共 ${total} 条`,
          onChange(page, pageSize) {
            console.log(page, pageSize);
            setPageNo(page);
          },
        }}
      />
    </div>
  );
};

export default RecordTabPane;
