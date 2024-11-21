import { request } from "../../../../services/request";
export const getArticleDispatch = async <T>(params) => {
  return await request<T>({
    method: "POST",
    data: {
      cursor: "0",
      ...params,
    },
    url: "/article/article_list",
  });
};
