import Logo from "../logo/Logo";
import "./index.scss";

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="custom-loader"></div>
      <Logo />
    </div>
  );
};

export default Spinner;
