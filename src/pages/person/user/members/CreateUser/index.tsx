import { Modal, Form, Input, Select } from "antd";
import { UserDialogProps } from "@hooks";
import { createUserDispatch, updateUserDispatch } from "../service";
import { useEffect } from "react";

interface CreateUserProps extends UserDialogProps {
  mode: "create" | "edit" | "view";
  getList: () => void;
  record: Record<string, unknown>;
}
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  role?: string[];
};
const CreateUserDialog = (props: CreateUserProps) => {
  const { visible, closeDialog, getList = () => {}, mode = "create", record = {} } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    if (record.id) {
      form.setFieldsValue({
        username: record.username,
        role: record.role,
      });
    }
  }, []);
  const createUser = async (data) => {
    await createUserDispatch(data);
    await closeDialog();
    await getList();
  };
  const updateUser = async (data) => {
    await updateUserDispatch(data);
    await closeDialog();
    await getList();
  };
  const onOk = async () => {
    const info = await form.validateFields();
    if (record.id) {
      await updateUser({
        id: record.id,
        ...info,
      });
    } else {
      await createUser({
        ...info,
        role: Number(info.role),
      });
    }
  };
  const title = mode === "create" ? "添加" : mode === "edit" ? "编辑" : "查看";
  return (
    <Modal title={`${title}用户`} open={visible} onCancel={closeDialog} width={600} onOk={onOk}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
          extra={<>新添加的用户名默认密码是123456</>}
        >
          <Input disabled={mode !== "create"} />
        </Form.Item>

        {/* <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password />
        </Form.Item> */}
        <Form.Item<FieldType> label="角色类型" name="role" rules={[{ required: true, message: "请选择角色" }]}>
          <Select allowClear>
            <Select.Option key={1} value={1}>
              超级管理员
            </Select.Option>
            <Select.Option key={2} value={2}>
              管理员
            </Select.Option>
            <Select.Option key={3} value={3}>
              访客
            </Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default CreateUserDialog;
