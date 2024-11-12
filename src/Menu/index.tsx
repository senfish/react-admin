import type { MenuProps } from "antd";

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
          key: "/person/user/hobby",
          label: "习惯",
          path: "/person/user/hobby",
          includesUrl: ["/person/user/hobby"],
        },
      ],
    },
    {
      key: "/person/config",
      label: "配置",
      path: "/person/config",
      includesUrl: ["/person/config"],
    },
  ],
  class: [
    {
      key: "/class/math",
      label: "数学",
      path: "/class/math",
      includesUrl: ["/class/math"],
    },
    {
      key: "/class/chinese",
      label: "语文",
      path: "/class/chinese",
      includesUrl: ["/class/chinese"],
    },
    {
      key: "/class/english",
      label: "英语",
      path: "/class/english",
      includesUrl: ["/class/english"],
    },
  ],
  home: [
    {
      hidden: true,
    },
  ],
};
