import { INavLink } from "../../interfaces/interfaces";
import { ROUTES } from "../../routes";

export const navLinks: INavLink[] = [
  { name: "Schedule", path: "/", id: 1 },
  { name: "Media", path: "/", id: 2 },
  { name: "Movies", path: "/", id: 3 },
  { name: "Actors", path: "/", id: 4 },
  { name: "News", path: "/", id: 5 },
  { name: "Collections", path: "/", id: 6 },
  { name: "Categories", path: ROUTES.CATEGORIES, id: 7 },
];
