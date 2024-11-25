import React from "react";
import { Modal } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(() => ({
  "my-modal-mask": {},
  "my-modal-content": {
    border: "1px solid #333",
  },
  "my-modal-close": {},
  "ant-modal-close": {
    backgroundColor: "red",
  },
}));

interface IPopupProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  children: React.ReactNode;
}

const Popup = ({ isModalOpen, setIsModalOpen, children }: IPopupProps) => {
  const { styles } = useStyle();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const classNames = {
    mask: styles["my-modal-mask"],
    content: styles["my-modal-content"],
    close: styles["my-modal-close"],
  };

  const modalStyles = {
    mask: {
      backdropFilter: "blur(10px)",
    },
    content: {
      padding: 0,
    },
    modal: {
      width: "100%",
    },
    close: {
      color: "#fff",
    },
  };

  return (
    <>
      <Modal
        centered
        width={1000}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        styles={modalStyles}
        classNames={classNames}
      >
        {children}
      </Modal>
    </>
  );
};

export default Popup;
