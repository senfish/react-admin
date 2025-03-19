import { request } from "./request";

export const MODULE_MAP = {
  USER_MANAGE: "成员管理",
  USER_LOGIN: "用户登录",
  ARTICLE: "技术文章",
};
export const trackRequest = async <T>(params) => {
  return await request<T>({
    method: "POST",
    data: {
      ...params,
    },
    url: "/api/monitor/track",
  });
};
