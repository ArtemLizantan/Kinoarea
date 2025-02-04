import { WhereFilterOp } from "firebase/firestore";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export interface INavLink {
  name: string;
  path: string;
  id: number;
}

export interface ISocialLinksProps {
  array: IIcons[];
}

export interface IMenuProps {
  logo?: string;
  closeBtn?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  array: INavLink[];
  menu?: string;
}

export interface ICardMovieProps {
  img: string;
  name: string;
  genre: string[];
  id: number;
  rating?: string;
}

export interface ITabs {
  name: string;
  id: number;
}

export interface ITabsProps {
  array: ITabs[];
  active?: boolean;
  nameOfTab?: string | undefined;
  contextData: string;
  setContextData: (contextData: string) => void;
  setOpenMenu: (active: boolean) => void;
}

export interface INowInCinemaCards {
  title: string;
  posterPath: string;
  genre: string;
  id: number;
  voteAverage: string;
}

export interface IDataMovies {
  release_date: string;
  trailer: string;
  producer: string;
  cinematographer: string;
  slogan: string;
  duration: string;
  voteAverage: string;
  year: string;
  premiere_date: string;
  artist: string;
  worldwide_revenue: string;
  editor: string;
  directors: string[];
  id: number;
  country: string;
  posterPath: string;
  title: string;
  age_rating: string;
  overview: string;
  genre: string[];
  writers: string[];
  composer: string;
  frames: string[];
  backGroundPoster: string;
}

export interface INowInCinemaCardsProps {
  filteredCards: IDataMovies[] | undefined;
  isLoading: boolean;
}

export interface IMainInfoCardProps {
  poster: string | undefined;
  title: string | undefined;
  rating: string | undefined;
  desc: string | undefined;
  id: number | undefined;
  slogan: string | undefined;
  backGroundPoster: string | undefined;
  trailer: string | undefined;
}

export interface IPopupSwiperProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
  isModalOpen: boolean;
  photos: string[] | undefined;
}

export interface IMovieTableProps {
  movie: {
    year: string;
    country: string;
    slogan: string;
    directors: string[];
    producer: string;
    cinematographer: string;
    composer: string;
    id: number;
    artist: string;
    premiere_date: string;
    worldwide_revenue: string;
    age_rating: string;
    release_date: string;
    voteAverage: string;
    duration: string;
  };
}

export interface IframeAttributes {
  title: string;
  frameBorder: string;
  allow: string;
  referrerPolicy: string;
  allowFullScreen?: boolean;
}

export interface IMovieServicesGetFilmProps {
  dbFirebase: string;
  field?: string;
  options?: WhereFilterOp;
  value?: string | number | boolean;
  limitOfCards?: number;
  search?: string;
}

export interface FormFooterComponentProps {
  isSubmitting: boolean;
}

export interface ITrailers {
  title: string;
  backGroundPoster: string;
  trailer: string;
  id: number;
}

export interface ITrailersProps {
  trailers: IDataMovies[]; // This should be an array of IDataMovies
}
