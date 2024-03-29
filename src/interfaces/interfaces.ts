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
