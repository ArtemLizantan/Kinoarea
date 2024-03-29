import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import "./logo.scss";
const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
