import { request } from "@/services/request";

export const loginDispatch = async <T>(data) => {
  const info = await request<T>({
    method: "POST",
    data: data,
    url: "/api/user/login",
  });
  return info as T;
};
