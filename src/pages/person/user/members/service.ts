import { request } from "@/services/request";

export const deleteUserDispatch = async (id: number) => {
  return await request({
    method: "POST",
    data: { id },
    url: "/api/user/delete",
  });
};

export const createUserDispatch = async (data) => {
  return await request({
    method: "POST",
    data,
    url: "/api/user/register",
  });
};

export const getUserListDispatch = async <T>(data) => {
  return await request<T>({
    method: "POST",
    data,
    url: "/api/user/list",
  });
};

export const updateUserDispatch = async (data) => {
  return await request({
    method: "POST",
    data,
    url: "/api/user/update",
  });
};
