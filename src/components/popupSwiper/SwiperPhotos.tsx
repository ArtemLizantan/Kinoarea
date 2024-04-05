import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "./popupSwiper.scss";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SwiperPhotos = ({ photos }: { photos: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((img: string) => (
          <SwiperSlide key={img}>
            <img src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((img: string) => (
          <SwiperSlide key={img}>
            <img src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperPhotos;
