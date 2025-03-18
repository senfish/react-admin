import { useEffect, useRef, useState } from "react";

//params  T | Record<string, never> | undefined
interface RequestOptions<T, K> {
  request: (data?: T | Record<string, never>) => Promise<K>;
  initParams?: T | Record<string, never> | undefined;
}
interface ResponseOptions<T, K> {
  onSuccess?: (data: K, params: T | Record<string, never> | undefined) => void;
  onError?: (err: unknown) => void;
}
const useRequest = <T, K>(
  requestOptions: RequestOptions<T, K>,
  responseOptions?: ResponseOptions<T, K>
): {
  loading: boolean;
  data: K;
  run: (params?: T | Record<string, never> | undefined) => Promise<void>;
} => {
  const { initParams, request } = requestOptions;
  const { onSuccess, onError } = responseOptions || {};
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  const [data, setData] = useState<K>();
  // const [params, setParams] = useState<T | Record<string, never>>(initParams);
  const dispatchRequest = async (params: T | Record<string, never> | undefined) => {
    try {
      await setLoading(true);
      const data = await request(params);
      await setData(data);
      onSuccess?.(data, params);
      await setLoading(false);
    } catch (err) {
      onError?.(err);
      await setLoading(false);
    }
  };
  useEffect(() => {
    // 如果initParams不传的话，就不请求
    if (!initParams && isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatchRequest(initParams);
  }, []);

  const run = async (params: T | Record<string, never> | undefined) => {
    // setParams(() => params);
    await dispatchRequest(params);
    // return new Promise((resolve) => {
    //   resolve(dispatchRequest());
    // });
  };

  return { loading, data, run };
};

export default useRequest;
