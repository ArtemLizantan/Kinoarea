import { useState } from "react";
import Title from "../../../../components/title/Title";
import styles from "./moviePhotos.module.scss";
import PopupSwiper from "../../../../components/popupSwiper/PopupSwiper";
import Button from "../../../../components/UI/Button";

const MoviePhotos = ({ array }: { array: string[] | undefined }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const limitedPhotos = array && array.slice(0, 7);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={styles.photos}>
        <div className={styles.photos__body}>
          <div className={styles.photos__top}>
            <Title text="Photos from movie" />
          </div>
          <div className={styles.photos__bottom}>
            {limitedPhotos !== undefined &&
              limitedPhotos.map((img: string) => (
                <div key={img} className={styles.photos__item}>
                  <div className={styles.photos__hovered}>
                    <div className={styles.photos__bg}></div>
                    <div className={styles.photos__btn}>
                      <Button onClick={showModal} text="Look all photos" />
                    </div>
                  </div>
                  <img src={img} alt="photo" />
                </div>
              ))}
          </div>
        </div>
        <PopupSwiper
          photos={array}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      </div>
    </>
  );
};

export default MoviePhotos;
