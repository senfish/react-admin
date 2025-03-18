import { Select, DatePicker, Table } from "antd";
import TableFilter from "@/components/Filter";
import { useRequest } from "@hooks";
import { getMonitorListDispatch, MonitorListData } from "./services";
import { useEffect } from "react";
import { getUserListDispatch } from "@/pages/person/user/members/service";
import { UserListTableData } from "@/pages/person/user/members";
import dayjs from "dayjs";
import { FilterProps, useChange } from "./store";

const { RangePicker } = DatePicker;

const typeMap = {
  1: "新增",
  2: "修改",
  3: "删除",
  4: "登录",
  5: "查看",
};

const RecordTabPane = () => {
  const { filter, onChangeFilter, onResetFilter } = useChange();
  const { pageNum, time, type, user } = filter;
  const { data, run } = useRequest<FilterProps, MonitorListData>({
    request: getMonitorListDispatch,
  });
  const { data: userList } = useRequest<{ pageSize: number }, UserListTableData>({
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
      return onChangeFilter("time")(undefined);
    }
    onChangeFilter("time")(dateStrings);
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
          onChange={onChangeFilter("user")}
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
          onChange={onChangeFilter("type")}
        />
      ),
    },
    {
      label: "操作日期",
      field: "time",
      component: <RangePicker onChange={onChange} disabledDate={disabledDate} />,
    },
  ];
  const onReset = () => {
    onResetFilter();
  };
  return (
    <div>
      <div>
        <TableFilter onReset={onReset} items={items} defaultCollapsed />
      </div>
      <Table
        rowKey={(record) => record.id}
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
            onChangeFilter("pageNum")(page);
          },
        }}
      />
    </div>
  );
};

export default RecordTabPane;
