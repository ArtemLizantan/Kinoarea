import { MouseEventHandler } from "react";

export interface IIcons {
  name: React.ReactNode;
  path: string;
  id: number;
}

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
  rating?: number;
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
  poster_path: string;
  genre: string;
  id: number;
  vote_average: number;
}

export interface IDataMovies {
  release_date: string;
  trailer: string;
  producer: string;
  cinematographer: string;
  slogan: string;
  duration: string;
  vote_average: number;
  year: string;
  premiere_date: string;
  artist: string;
  worldwide_revenue: string;
  editor: string;
  directors: string[];
  id: number;
  country: string;
  poster_path: string;
  title: string;
  age_rating: string;
  overview: string;
  genre: string;
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
  rating: number | undefined;
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
    vote_average: string;
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