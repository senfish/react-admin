import type { MenuProps } from "antd";
import {
  MailOutlined,
  SnippetsOutlined,
  FacebookOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];

export const headerMenus: MenuItem[] = [
  {
    key: "home",
    label: "首页",
  },
  {
    key: "person",
    label: "个人信息",
  },
  {
    key: "class",
    label: "学科分类",
  },
];

type SiderMenuProps = {
  path?: string;
  hidden?: boolean;
  children?: SiderMenuProps[];
  includesUrl?: string[];
} & MenuItem;
export const siderMenus: { [key: string]: SiderMenuProps[] } = {
  person: [
    {
      key: "/person",
      label: "用户",
      icon: <MailOutlined />,
      children: [
        {
          key: "/person/user/info/record",
          label: "信息",
          path: "/person/user/info/record",
          includesUrl: [
            "/person/user/info/record",
            "/person/user/info/explore",
          ],
        },
        {
          key: "/person/user/article",
          label: "技术文章",
          path: "/person/user/article",
          includesUrl: ["/person/user/article"],
        },
        {
          key: "/person/user/members",
          label: "成员管理",
          path: "/person/user/members",
          includesUrl: ["/person/user/members"],
        },
      ],
    },
    {
      key: "/person/config",
      label: "配置",
      icon: <SettingOutlined />,
      path: "/person/config",
      includesUrl: ["/person/config"],
    },
  ],
  class: [
    {
      key: "/class/math",
      icon: <PieChartOutlined />,
      label: "数学",
      path: "/class/math",
      includesUrl: ["/class/math"],
    },
    {
      key: "/class/chinese",
      label: "语文",
      icon: <SnippetsOutlined />,
      path: "/class/chinese",
      includesUrl: ["/class/chinese"],
    },
    {
      key: "/class/english",
      label: "英语",
      icon: <FacebookOutlined />,
      path: "/class/english",
      includesUrl: ["/class/english"],
    },
  ],
  home: [
    {
      hidden: true,
      key: "/home",
      label: "首页",
    },
  ],
};
