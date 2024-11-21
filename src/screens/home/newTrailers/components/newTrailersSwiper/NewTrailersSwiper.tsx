import "./newTrailersSwiper.scss";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Thumbs } from "swiper/modules";
import { useState } from "react";
import styles from "./newTrailerSwiper.module.scss";
import { IIcons, ITrailers } from "../../../../../interfaces/interfaces";
import SocialLinks from "../../../../../components/header/components/socialLinks/SocialLinks";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import InteractionControls from "../../../../../components/UI/interactionControls/InteractionControls";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

const icons: IIcons[] = [
  { name: <SlSocialVkontakte />, path: "/", id: 1 },
  { name: <FaInstagram />, path: "/", id: 2 },
  { name: <FaFacebookF />, path: "/", id: 3 },
  { name: <FaTwitter />, path: "/", id: 4 },
];

const NewTrailersSwiper = ({ trailers }: { trailers: ITrailers[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={styles.trailerSwiper}>
      <div className={styles.trailerSwiper__body}>
        <div className={styles.trailerSwiper__item}>
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="trailers-swiper1"
          >
            {trailers &&
              trailers.map(
                ({ title, backGroundPoster, trailer, id }, index) => (
                  <SwiperSlide key={`${id}-${index}`}>
                    <div className={styles.trailerSwiper__wrapperSlide}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={trailer}
                        srcDoc={`<style>*{padding[]:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;object-fit:cover;height:100%;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:50px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${trailer}/?autoplay=1><img src="${backGroundPoster}" alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
                        referrerPolicy="no-referrer"
                        allowFullScreen={true}
                      />

                      <div className={styles.trailerSwiper__bottomInfo}>
                        <div className={styles.trailerSwiper__bottomInfoLeft}>
                          <h2 className={styles.trailerSwiper__title}>
                            {title}
                          </h2>
                          <SocialLinks array={icons} />
                        </div>
                        <div className={styles.trailerSwiper__bottomInfoRight}>
                          <InteractionControls icon={<BiSolidLike />} />
                          <InteractionControls icon={<BiSolidDislike />} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ),
              )}
          </Swiper>
        </div>
        <div className={styles.trailerSwiper__item}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            scrollbar={{ draggable: true }}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Scrollbar]}
            className="trailers-swiper2"
          >
            {trailers &&
              trailers.map(({ backGroundPoster, trailer, id }) => (
                <SwiperSlide key={id}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={trailer}
                    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;object-fit:cover;height:100%}span{height:1.5em;text-align:center;font:30px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${trailer}/?autoplay=1><img src="${backGroundPoster}" alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
                  ></iframe>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewTrailersSwiper;
