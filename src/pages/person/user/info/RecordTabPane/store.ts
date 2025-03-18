import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { useCallback, useEffect } from "react";
// import { getAnnounceMentListReq } from "../service";

export interface FilterProps {
  pageNum: number;
  type?: string;
  time?: string[];
  user?: string;
}
export const initFilter = {
  pageNum: 1,
  type: undefined,
  time: undefined,
  user: undefined,
};

export const filterAtom = atomWithImmer<FilterProps>(initFilter);

export const useChange = (): {
  filter: FilterProps;
  onChangeFilter: <K extends keyof FilterProps>(key: K) => (value: FilterProps[K]) => void;
  onResetFilter: () => FilterProps;
} => {
  const [filter, setFilter] = useAtom(filterAtom);

  const onChangeFilter = useCallback(<K extends keyof FilterProps>(key: K) => {
    return function (value: FilterProps[K]) {
      setFilter((draft) => {
        draft[key] = value;
      });
    };
  }, []);

  const onResetFilter = useCallback(() => {
    setFilter(() => {
      return initFilter;
    });
    return initFilter;
  }, []);
  useEffect(() => {
    return () => {
      onResetFilter();
    };
  }, []);
  return {
    filter,
    onChangeFilter,
    onResetFilter,
  };
};
