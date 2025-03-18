import { request } from "../../services/request";

export const loginDispatch = async <T>(data) => {
  const info = await request<T>({
    method: "POST",
    data: data,
    url: "/user/login",
  });
  console.log("info", info);
  return info as T;
};
