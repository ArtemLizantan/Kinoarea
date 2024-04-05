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
  genre: string;
}

export interface ITabs {
  name: string;
  id: number;
}

export interface ITabsProps {
  array: ITabs[];
  active?: boolean;
  nameOfTab?: string | undefined;
  setTabsData: (nameOfTab: string) => void;
}

export interface INowInCinemaCards {
  title: string;
  poster_path: string;
  genre: string;
  id: number;
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
}


export interface INowInCinemaTopProps {
  setTabsData: (nameOfTab: string) => void;
}

export interface INowInCinemaCardsProps {
  filteredCards: IDataMovies[] | undefined;
  isLoading: boolean;
}

export interface emailForm {
  email: string,
}