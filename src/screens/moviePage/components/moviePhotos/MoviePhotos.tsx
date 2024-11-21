import { useState } from "react";
import ButtonHoweredCard from "../../../../components/UI/buttonHoweredCard/ButtonHoweredCard";
import Title from "../../../../components/title/Title";
import myStyles from "./moviePhotos.module.scss";
import PopupSwiper from "../../../../components/popupSwiper/PopupSwiper";

const MoviePhotos = ({ array }: { array: string[] | undefined }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const limitedPhotos = array && array.slice(0, 7);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={myStyles.photos}>
        <div className={myStyles.photos__body}>
          <div className={myStyles.photos__top}>
            <Title text={"Photos from movie"} />
          </div>
          <div className={myStyles.photos__bottom}>
            {limitedPhotos != undefined &&
              limitedPhotos.map((img: string) => (
                <div key={img} className={myStyles.photos__item}>
                  <div className={myStyles.photos__hovered}></div>
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
