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

const Popup = ({ isModalOpen, setIsModalOpen, children }) => {
  const { styles } = useStyle();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const classNames = {
    mask: styles["my-modal-mask"],
    content: styles["my-modal-content"],
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
        className={classNames}
      >
        {children}
      </Modal>
    </>
  );
};

export default Popup;
