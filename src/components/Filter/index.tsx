import { Divider, Input, Space } from "antd";
import "./index.less";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  DownCircleOutlined,
  DownOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";

interface FilterItem {
  label?: string;
  field?: string;
  component: JSX.Element;
}
interface FilterProps {
  items: FilterItem[];
  maxLabelLength?: number;
  /** 指定一行几个 */
  colNum?: number;
  defaultCollapsed?: boolean;
  onReset?: () => void;
}

const LABEL_PADDING_SUM = 24;
const DEFAULT_MAX_LABEL_WIDTH = 94;
const DEFAULT_FILTER_WIDTH = 1136; // 默认最大的宽度
const RIGHT_PADDING = 16;
const BOTTOM_PADDING = 12;
const MAX_ITEM_LENGTH = 400;
const MIN_ITEM_LENGTH = 268;
const DEAULT_COL_NUM = 4;
const COL_HEIGHT = 28;
//
// 2要素，如何计算label的宽度，如何计算单个item的宽度

const Filter = (props: FilterProps) => {
  const {
    items,
    maxLabelLength = DEFAULT_MAX_LABEL_WIDTH,
    colNum,
    defaultCollapsed = false,
    onReset: _onReset,
  } = props;
  const [colWidth, setColWidth] = useState(0);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const ref = useRef<HTMLDivElement>();
  const calculateColWidth = (clientWidth: number = DEFAULT_FILTER_WIDTH) => {
    if (colNum) {
      const colWidth = Math.max(MIN_ITEM_LENGTH, clientWidth / colNum);
      return [colNum, colWidth];
    }
    // 如何计算出每一个itme的width的宽度的？

    // clientWidth / DEAULT_COL_NUM
    // 当前的宽度 / items
    // 默认宽度/默认个数 根 最小的长度 + padiding 取最大值。
    const itemWidth = Math.max(
      Math.floor(DEFAULT_FILTER_WIDTH / DEAULT_COL_NUM), //
      MIN_ITEM_LENGTH + RIGHT_PADDING // 最小的宽度
    );
    const _colNum = Math.min(
      Math.floor(clientWidth / itemWidth), //
      DEAULT_COL_NUM // 4
    );
    const colWidth = Math.floor(clientWidth / _colNum);
    console.log("colWidth: ", colWidth);
    return [1, colWidth];
  };
  useEffect(() => {
    if (!ref.current) return;
    const { width } = ref.current?.getBoundingClientRect();
    console.log("width: ", width);
    // 计算colwidth的宽度

    const [, colWidth] = calculateColWidth(width);
    setColWidth(colWidth);
  }, [items]);
  const getStrLength = (str: string, fontSize = 13) => {
    const charLength = str.split("").reduce((prev, cur) => {
      if (cur.charCodeAt(0) > 0 && cur.charCodeAt(0) < 128) {
        return ++prev;
      }
      return prev + 2;
    }, 0);
    return Math.ceil(charLength * fontSize * 0.6 + LABEL_PADDING_SUM);
  };

  const getMaxLabelLength = (items) => {
    const lengths = items.map((item) =>
      typeof item.label === "string" ? getStrLength(item.label) : 0
    );
    return Math.min(Math.max(...lengths), maxLabelLength) || maxLabelLength;
  };
  const getCollapsedStyle = () => {
    // 高度等于当前行数 * 40
    return {
      height: BOTTOM_PADDING + COL_HEIGHT,
      overflow: "hidden",
    };
  };
  const onReset = () => {
    _onReset?.();
  };
  return (
    <div className="table-filter">
      <div
        className="table-filter-items"
        ref={ref}
        style={collapsed ? getCollapsedStyle() : undefined}
      >
        {items.map((item) => {
          return (
            <div
              className="table-filter-item-wrapper"
              style={{
                maxWidth: MAX_ITEM_LENGTH + RIGHT_PADDING,
                width: colWidth,
                paddingRight: RIGHT_PADDING,
                marginBottom: BOTTOM_PADDING,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "--label-width": `${getMaxLabelLength(items)}px`,
              }}
            >
              <Space.Compact className="table-compact" key={item.field}>
                <label className="table-compact-label">{item.label}</label>
                {React.cloneElement(item.component, {
                  style: {
                    height: COL_HEIGHT,
                  },
                })}
              </Space.Compact>
            </div>
          );
        })}
      </div>
      <div className="table-filter-actions">
        <div className="table-filter-actions-reset" onReset={onReset}>
          重置
        </div>
        <Divider type="vertical" />
        <span className="actions-icon" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <DownCircleOutlined /> : <UpCircleOutlined />}
        </span>
      </div>
    </div>
  );
};

export default Filter;