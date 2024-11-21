import axios, { AxiosResponse } from "axios";
import { token } from "./token";
import { message } from "antd";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});
interface RequestOptions {
  method: "POST" | "GET" | "DELETE";
  url: string;
  params?: Record<string, unknown>;
  data?: Record<string, unknown>;
}
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data.data;
    }
    return response;
  },
  (err) => {
    console.log("instace err: ", err);
    if (err.status === 401) {
      // TODO
      window.location.href = "/react-layout/login";
    }
    if (err.status === 400) {
      message.error(err.response?.data?.message || err?.message);
      return Promise.reject(message); // 一定要抛出reject，不然request会认为你的请求是成功的
    }
  }
);

export const request = async <T>({
  method = "GET",
  url,
  params = {},
  data = {},
}: RequestOptions): Promise<T> => {
  const token = localStorage.getItem("token");
  return await instance({
    method,
    url,
    params,
    data,
    headers: {
      Authorization: token,
    },
  });
};
