import axios from "axios";
import { token } from "./token";

const instance = axios.create({
  baseURL: "http://100.81.79.184:3000",
});
interface RequestOptions {
  method: "POST" | "GET" | "DELETE";
  url: string;
  params?: Record<string, unknown>;
  data?: Record<string, unknown>;
}
instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data.data;
  }
  return response;
});
export const request = async ({
  method = "GET",
  url,
  params = {},
  data = {},
}: RequestOptions) => {
  return await instance({
    method,
    url,
    params,
    data,
    headers: {
      Authorization: `Bearz ` + token,
    },
  });
};
