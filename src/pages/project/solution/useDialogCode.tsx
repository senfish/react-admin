

export const originModalCode = `
import { Button, Modal } from "antd";
import { useState } from "react";

const ModalContainer = (props: { visible: boolean }) => {
  return <Modal visible={props.visible} >
    <div>
      <p>这是一个modal</p>
    </div>
  </Modal>
}
const App = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
  };
  return <div>
    <Button onClick={handleClick}>打开modal</Button>
    {
      visible && <ModalContainer visible={visible} />
    }
  </div>
};
`;


export const useDialogCode = `
import { Button, Modal } from "antd";
import { useState } from "react";
import useDialog, { UserDialogProps } from './useDialog';

const ModalContainer = (props) => {
  // useDialog默认注入注入的visible, closeDialog属性
  const { visible, closeDialog } = props;
  return <Modal visible={props.visible} >
    <div>
      <p>这是一个modal</p>
    </div>
  </Modal>
}
const App = () => {
  const [visible, setVisible] = useState(false);
  const { open, holder } = useDialog(ModalContainer)
  const handleClick = () => {
    open({
      // ... 传给Modal的props参数
    })
  }
  return <div>
    <Button onClick={handleClick}>打开modal</Button>
    {holder}
  </div>
};
`