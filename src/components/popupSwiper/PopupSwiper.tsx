import { Modal } from "antd";
import { createStyles } from "antd-style";
import SwiperPhotos from "./SwiperPhotos";
import { IPopupSwiperProps } from "../../interfaces/interfaces";
import "./popupSwiper.scss";

const useStyle = createStyles(() => ({
  "my-modal-mask": {},
  "my-modal-content": {
    border: "1px solid #333",
  },
}));

const PopupSwiper = ({
  setIsModalOpen,
  isModalOpen,
  photos,
}: IPopupSwiperProps) => {
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
    <div className="popup-swiper">
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        footer={null}
        width={1000}
        styles={modalStyles}
        classNames={classNames}
      >
        {photos !== undefined && <SwiperPhotos photos={photos} />}
      </Modal>
    </div>
  );
};

export default PopupSwiper;
