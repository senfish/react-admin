import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Tooltip } from 'antd';
import debounce from 'lodash/debounce';
import useDimensions from 'react-cool-dimensions';
import './index.less';
import { TooltipProps } from 'antd/lib';


interface EllipsisProps {
  line?: number
  style?: React.CSSProperties
  children?: React.ReactElement
}
const Ellipsis: FC<EllipsisProps & TooltipProps> = (props) => {
  const { children, line = 1, style: currentStyle = {}, ...other } = props;
  const wrapper = useRef<HTMLElement>();
  const [showPopover, setShowPopover] = useState(false);
  const defaultStyle: React.CSSProperties = line === 1 ? {
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    ...currentStyle
  } : {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: line,
    ...currentStyle
  }
  const validShowPopover = () => {
    const {
      scrollWidth = 0,
      clientWidth = 0,
      scrollHeight = 0,
      clientHeight = 0
    } = wrapper.current as HTMLElement || {};
    setShowPopover(scrollWidth > clientWidth || scrollHeight > clientHeight)
  }
  const debounceMesaure = useCallback(debounce(() => {
    validShowPopover();
  }, 200), [validShowPopover]);
  const { observe } = useDimensions({
    onResize: debounceMesaure,
  });
  useEffect(() => {
    validShowPopover();
  }, []);

  const renderChildren = () => {
    return React.cloneElement(children, {
      style: defaultStyle,
      ref: (element: HTMLElement | undefined) => {
        observe(element);
        wrapper.current = element;
      },
    })
  }
  if (showPopover) {
    return <Tooltip {...other}>{renderChildren()}</Tooltip>
  }
  return renderChildren();
}

export default Ellipsis