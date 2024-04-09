import FilmCard from "../../../../../components/filmCard/FilmCard";
import {
  INowInCinemaCards,
  INowInCinemaCardsProps,
} from "../../../../../interfaces/interfaces";
import styles from "./popularCardsSwiper.module.scss";
import "./popularCardsSwiper.scss";
import { useRef, useState } from "react";
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
                <SwiperSlide>
                  <FilmCard
                    id={id}
                    key={id}
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
