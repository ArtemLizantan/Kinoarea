import FilmCard from "../../../../../components/filmCard/FilmCard";
import {
  INowInCinemaCards,
  INowInCinemaCardsProps,
} from "../../../../../interfaces/interfaces";
import styles from "./popularCardsSwiper.module.scss";
import "./popularCardsSwiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PopularCardsSwiper = ({
  filteredCards,
  isLoading,
}: INowInCinemaCardsProps) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      slidesPerView={4}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="popularSwiper"
      breakpoints={{
        375: {
          slidesPerView: 2.2,
          centeredSlides: true,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2.5,
          centeredSlides: true,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
        },
        1920: {
          slidesPerView: 4,
        },
      }}
    >
      <div className={styles.cards}>
        <div className={styles.cards__body}>
          {isLoading ? (
            <div>Loading....</div>
          ) : (
            filteredCards &&
            filteredCards.map(
              ({
                title,
                poster_path,
                genre,
                id,
                vote_average,
              }: INowInCinemaCards) => (
                <SwiperSlide key={id}>
                  <FilmCard
                    id={id}
                    name={title}
                    img={poster_path}
                    genre={genre}
                    rating={vote_average}
                  />
                </SwiperSlide>
              )
            )
          )}
        </div>
      </div>
    </Swiper>
  );
};

export default PopularCardsSwiper;
