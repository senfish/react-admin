import React, { cloneElement, useCallback } from "react";

export interface UserDialogProps {
  closeDialog: () => void;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const useDialog = <T,>(Component) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const detailRef = React.useRef<any>({});
  const open = useCallback((detail: T) => {
    detailRef.current = detail;
    setVisible(true);
  }, []);
  const closeDialog = () => {
    setVisible(false);
  };
  const node = cloneElement(<Component />, {
    visible,
    setVisible,
    closeDialog,
    ...detailRef.current,
  });
  const holder = React.useMemo(() => {
    if (visible) {
      return node;
    }
    return null;
  }, [visible]);
  return { open, closeDialog, holder };
};

export default useDialog;
