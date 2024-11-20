import { IconType } from "react-icons";
import { BsPersonHeart } from "react-icons/bs";
import { FaComments, FaHome } from "react-icons/fa";
import { MdGrade, MdLocalMovies, MdOutlineReviews } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { ROUTESCABINET } from "../../../../routes";

interface SidebarItem {
  id: number;
  path: string;
  icon: IconType;
}

export const sidebarData: SidebarItem[] = [
  {
    id: 1,
    path: ROUTESCABINET.HOME,
    icon: FaHome,
  },
  {
    id: 2,
    path: ROUTESCABINET.FRIENDS,
    icon: TbUsers,
  },
  {
    id: 3,
    path: ROUTESCABINET.COMMENTS,
    icon: FaComments,
  },
  {
    id: 4,
    path: ROUTESCABINET.MOVIES,
    icon: MdLocalMovies,
  },
  {
    id: 5,
    path: ROUTESCABINET.PERSON,
    icon: BsPersonHeart,
  },
  {
    id: 6,
    path: ROUTESCABINET.REVIEWS,
    icon: MdGrade,
  },
  {
    id: 7,
    path: ROUTESCABINET.ASSESSMENTS,
    icon: MdOutlineReviews,
  },
];
