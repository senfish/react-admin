import axios, { AxiosResponse } from "axios";
import { message } from "antd";

const instance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/" : "/",
  timeout: 30 * 1000,
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
      if (response.data?.code?.startsWith("100")) {
        // 状态码是200，但是code是以100开头，说明是业务错误
        message.error(response.data?.message);
        return Promise.reject(response.data);
      }
      return response.data.data;
    }
    return response;
  },
  (err) => {
    if (err.status === 401) {
      window.location.href = "/login";
    }
    if (err.status === 400) {
      message.error(err.response?.data?.message || err?.message);
      return Promise.reject(message); // 一定要抛出reject，不然request会认为你的请求是成功的
    }
    message.error(err?.message);
    return Promise.reject(err);
  }
);

export const request = async <T>({ method = "GET", url, params = {}, data = {} }: RequestOptions): Promise<T> => {
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
