import type { MenuProps } from "antd";
import {
  MailOutlined,
  SnippetsOutlined,
  FacebookOutlined,
  PieChartOutlined,
  SettingOutlined,
  FontSizeOutlined,
  RadarChartOutlined,
  DeploymentUnitOutlined,
  LayoutOutlined,
  MacCommandOutlined,
  SignatureOutlined,
  EllipsisOutlined,
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
    key: "project",
    label: "项目介绍",
  },
  {
    key: "biz",
    label: "业务组件",
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
          includesUrl: ["/person/user/info/record", "/person/user/info/explore"],
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
      key: "/person/undo",
      label: "待办",
      icon: <SignatureOutlined />,
      path: "/person/undo",
      includesUrl: ["/person/undo"],
    },
  ],
  project: [
    {
      key: "/project/front-end",
      icon: <MacCommandOutlined />,
      label: "前端",
      path: "/project/front-end",
      includesUrl: ["/project/front-end"],
    },
    {
      key: "/project/back-end",
      label: "后端",
      icon: <SnippetsOutlined />,
      path: "/project/back-end",
      includesUrl: ["/project/back-end"],
    },
    // {
    //   key: "/project/deploy",
    //   label: "部署",
    //   icon: <DeploymentUnitOutlined />,
    //   path: "/project/deploy",
    //   includesUrl: ["/project/deploy"],
    // },
    {
      key: "/project/solution",
      label: "中台常见方案",
      icon: <LayoutOutlined />,
      path: "/project/solution",
      includesUrl: ["/project/solution"],
    },
  ],
  home: [
    {
      hidden: true,
      key: "/home",
      label: "首页",
    },
  ],
  biz: [
    // {
    //   key: '/biz/button',
    //   label: '按钮',
    //   icon: <FontSizeOutlined />,
    //   path: "/biz/button",
    //   includesUrl: ["/biz/button"],
    // },
    {
      key: "/biz/table-filter",
      label: "表格Filter",
      icon: <RadarChartOutlined />,
      path: "/biz/table-filter",
      includesUrl: ["/biz/table-filter"],
    },
    {
      key: "/biz/ellipsis",
      label: "Ellipsis",
      icon: <EllipsisOutlined />,
      path: "/biz/ellipsis",
      includesUrl: ["/biz/ellipsis"],
    },
  ],
};
