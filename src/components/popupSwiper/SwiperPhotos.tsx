import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "./popupSwiper.scss";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SwiperPhotos = ({ photos }: { photos: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const mainSwiperRef = useRef<SwiperCore | null>(null);

  const handlePrev = () => {
    if (mainSwiperRef.current) mainSwiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (mainSwiperRef.current) mainSwiperRef.current.slideNext();
  };

  return (
    <div className="swiper-container">
      <button className="swiper-button swiper-button-prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="swiper-button swiper-button-next" onClick={handleNext}>
        ❯
      </button>

      <Swiper
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        spaceBetween={20}
        navigation={false}
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
    </div>
  );
};

export default SwiperPhotos;
