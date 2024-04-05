import { SlSocialVkontakte } from "react-icons/sl";
import MovieTrailerButton from "../../../../components/UI/movieTrailerButton/MovieTrailerButton";
import SocialLinks from "../../../../components/header/components/socialLinks/SocialLinks";
import ProgressCircleRating from "../../../../components/progressCircleRating/ProgressCircleRating";
import Title from "../../../../components/title/Title";
import { IIcons, IMainInfoCardProps } from "../../../../interfaces/interfaces";
import styles from "./mainInfoCard.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import Popup from "../../../../components/popup/Popup";

const icons: IIcons[] = [
  { name: <SlSocialVkontakte />, path: "/", id: 1 },
  { name: <FaInstagram />, path: "/", id: 2 },
  { name: <FaFacebookF />, path: "/", id: 3 },
  { name: <FaTwitter />, path: "/", id: 4 },
];

const MainInfoCard = ({
  poster,
  title,
  rating,
  desc,
  slogan,
  backGroundPoster,
  trailer,
}: IMainInfoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardInfo__background}>
        <div className={styles.cardInfo__afterOpacity}></div>
        <div className={styles.cardInfo__beforeOpacity}></div>
        <img src={backGroundPoster} alt="" />
      </div>
      <div className={styles.cardInfo__body}>
        <div className={styles.cardInfo__left}>
          <img src={poster} alt="poster" />
        </div>
        <div className={styles.cardInfoRight}>
          {/* <div className={styles.cardInfoRight__breadcrumbs}></div> */}
          <div className={styles.cardInfoRight__top}>
            <div className={styles.cardInfoRight__title}>
              <Title text={title} />
            </div>
            <div className={styles.cardInfoRight__subtitle}>{slogan}</div>
            <div className={styles.cardInfoRight__rating}>
              <ProgressCircleRating rating={rating} />
            </div>
            <div className={styles.cardInfoRight__desc}>{desc}</div>
          </div>
          <div className={styles.cardInfoRight__bottom}>
            <div className={styles.cardInfoRight__bottomLeft}>
              <MovieTrailerButton
                onClick={showModal}
                text={"watch the trailer"}
              />
            </div>
            <div className={styles.cardInfoRight__bottomRight}>
              <SocialLinks array={icons} />
            </div>
          </div>
        </div>
      </div>
      <Popup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <iframe
          width="100%"
          height="600px"
          src={trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Popup>
    </div>
  );
};

export default MainInfoCard;
