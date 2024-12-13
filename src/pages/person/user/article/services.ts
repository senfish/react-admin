import { request } from "../../../../services/request";
export const getArticleDispatch = async <T>(params) => {
  return await request<T>({
    method: "POST",
    data: {
      ...params,
    },
    url: "/article/article_list",
  });
};
