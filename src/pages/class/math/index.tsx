import { useState } from "react";
import CardWrapper from "../../../components/CardWrapper";
import { Button } from "antd";

const Wrapper = () => {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState(0);
  // console.log("mode: ", mode);
  const handClick = (e) => {
    e.stopPropagation();
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setMode(mode + 1);
    setMode(mode + 1);
    setMode(mode + 1);
    console.log(mode, "click  ====> handle", count);
  };
  console.log(mode, "click ===> render", count);
  return <Button onClick={handClick}>{count}</Button>;
};
const Math = () => {
  return (
    <CardWrapper>
      <Wrapper />
    </CardWrapper>
  );
};
export default Math;
