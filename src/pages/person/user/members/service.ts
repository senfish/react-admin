import { request } from "../../../../services/request";

export const deleteUserDispatch = async (id: number) => {
  return await request({
    method: "POST",
    data: { id },
    url: "/user/delete",
  });
};

export const createUserDispatch = async (data) => {
  return await request({
    method: "POST",
    data,
    url: "/user/register",
  });
};

export const getUserListDispatch = async <T>(data) => {
  return await request<T>({
    method: "POST",
    data,
    url: "/user/list",
  });
};

export const updateUserDispatch = async (data) => {
  return await request({
    method: "POST",
    data,
    url: "/user/update",
  });
};
