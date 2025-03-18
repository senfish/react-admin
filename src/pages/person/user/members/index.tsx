import { useEffect, useState } from "react";
import { Button, Divider, Modal, Table, Tag } from "antd";
import { useDialog } from "@hooks";
import CreateUserDialog from "./CreateUser";
import "./index.less";
import { PlusOutlined } from "@ant-design/icons";
import { deleteUserDispatch, getUserListDispatch } from "./service";
import ContainerHeader from "@/common/Title";
const map = {
  1: "超级管理员",
  2: "管理员",
  3: "访客",
};
export interface UserListTableData {
  data: { username: string; id: number }[];
  total: number;
  pageSize: number;
  pageNum: number;
}
const defaultPageNum = 1;
const defaultPageSize = 10;
const Members = () => {
  const [tableData, setTableData] = useState<UserListTableData>({
    data: [],
    total: 0,
    pageNum: 0,
    pageSize: 20,
  });
  const { open, holder } = useDialog(CreateUserDialog);
  const [pageNum, setPageNum] = useState(defaultPageNum);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const getList = async (options = { pageNum: defaultPageNum, pageSize: defaultPageSize }) => {
    const { pageNum, pageSize } = options;
    const res = (await getUserListDispatch({
      pageNum,
      pageSize,
    })) as unknown as UserListTableData;
    setTableData(res);
    setPageNum(res.pageNum);
    setPageSize(res.pageSize);
  };
  useEffect(() => {
    getList({ pageNum, pageSize });
  }, [pageNum, pageSize]);

  const deleteUser = async (id: number, username: string) => {
    Modal.confirm({
      content: `确认要删除${username}吗？`,
      onOk: async () => {
        await deleteUserDispatch(id);
        await getList();
      },
    });
  };
  const columns = [
    {
      dataIndex: "id",
      title: "ID",
      width: 120,
    },
    {
      dataIndex: "username",
      title: "名称",
    },
    {
      dataIndex: "role",
      title: "身份",
      render: (text) => {
        return <Tag>{map[text] || "访客"}</Tag>;
      },
    },
    {
      dataIndex: "action",
      title: "操作",
      render: (text, record) => {
        // const is_permission
        return (
          <>
            <Button
              type="link"
              // disabled={true}
              onClick={() => {
                open({
                  mode: "edit",
                  getList,
                  record,
                });
              }}
            >
              编辑
            </Button>
            <Divider type="vertical" />
            <a onClick={() => deleteUser(record.id, record.username)}>删除</a>
          </>
        );
      },
    },
  ];
  const createUser = () => {
    open({ getList, mode: "create" });
  };
  return (
    <div className="member-page">
      <ContainerHeader title="成员管理" />
      <div className="content">
        <div className="filter">
          <Button type="primary" onClick={createUser}>
            <PlusOutlined />
            添加成员
          </Button>
        </div>
        <Table
          rowKey={(record) => record.id}
          columns={columns}
          size={"small"}
          dataSource={tableData?.data}
          pagination={{
            total: tableData?.total,
            pageSize: pageSize,
            current: pageNum,
            hideOnSinglePage: true,
            showTotal: (total) => `共 ${total} 条`,
            onChange(page, pageSize) {
              setPageNum(page);
              setPageSize(pageSize);
            },
          }}
        />
      </div>

      {holder}
    </div>
  );
};

export default Members;
