import "./newTrailersSwiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import styles from "./newTrailerSwiper.module.scss";
import Title from "../../../../../components/title/Title";
const iframeAttributes = {
  title: "YouTube video player",
  frameborder: "0",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  referrerpolicy: "strict-origin-when-cross-origin",
  allowfullscreen: true,
};

const NewTrailersSwiper = ({ trailers }: {}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(trailers);

  return (
    <div className={styles.trailerSwiper}>
      <div className={styles.trailerSwiper__body}>
        <div className={styles.trailerSwiper__item}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="trailers-swiper1"
          >
            {trailers &&
              trailers.map(({ title, backGroundPoster, trailer, id }) => (
                <div>
                  <SwiperSlide key={id}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={trailer}
                      srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;object-fit:cover;height:100%;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${trailer}/?autoplay=1><img src="${backGroundPoster}" alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
                      {...iframeAttributes}
                    ></iframe>
                  </SwiperSlide>
                  <Title text={title} />
                </div>
              ))}
          </Swiper>
        </div>
        <div className={styles.trailerSwiper__item}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="trailers-swiper2"
          >
            {trailers &&
              trailers.map(({ title, backGroundPoster, trailer, id }) => (
                <SwiperSlide key={id}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={trailer}
                    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;object-fit:cover;height:100%}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${trailer}/?autoplay=1><img src="${backGroundPoster}" alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
                    {...iframeAttributes}
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
