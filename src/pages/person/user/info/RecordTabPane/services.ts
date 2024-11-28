import { request } from "../../../../../services/request";

export interface MonitorListItem {
  id: number;
  type: number;
  user: string;
  module: string;
}
export interface MonitorListData {
  data: MonitorListItem[];
  total: number;
  pageSize: number;
  pageNum: number;
}
export const getMonitorListDispatch = async <T>(data = {}) => {
  return await request<T>({
    method: "POST",
    data: data,
    url: "/monitor/monitor_list",
  });
};
