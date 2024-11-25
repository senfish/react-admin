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
  pageNo: number;
}
export const getMonitorListDispatch = async <T>() => {
  return await request<T>({
    method: "POST",
    data: {},
    url: "/monitor/monitor_list",
  });
};
