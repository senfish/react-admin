import { request } from "@/services/request";

export const getUserInfoDispatch = async <T>() => {
  return await request<T>({
    method: "POST",
    url: "/api/user/user_info",
  });
};
