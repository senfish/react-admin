import { useEffect, useRef, useState } from "react";

interface ResponseProps {
  data: unknown[];
  total: number;
  pageNo: number;
  pageSize: number;
}
interface RequestOptions<T> {
  request: (params?: Record<string, string>) => Promise<T>;
  initParams?: Record<string, string>;
}
interface ResponseOptions {
  onSucess?: (data, params) => void;
  onError?: (err) => void;
}
const useRequest = <T,>(
  requestOptions: RequestOptions<T>,
  responseOptions?: ResponseOptions
) => {
  const { initParams, request } = requestOptions;
  const { onSucess, onError } = responseOptions || {};
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  const [data, setData] = useState<T>();
  const [params, setParams] = useState(initParams);
  const dispatchRequest = async () => {
    try {
      await setLoading(true);
      const data = await request(params);
      await setData(data);
      onSucess?.(data, params);
      await setLoading(false);
    } catch (err) {
      onError?.(err);
    }
  };
  useEffect(() => {
    // 如果initParams不传的话，就不请求
    if (!initParams && isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatchRequest();
  }, [params]);

  const run = (params?: Record<string, string>) => {
    setParams(() => params || {});
  };

  return { loading, data, run };
};

export default useRequest;
