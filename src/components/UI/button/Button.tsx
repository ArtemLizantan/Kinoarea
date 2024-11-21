import { useRef, useState } from "react";
import { gsap } from "gsap";
import "./button.scss";
import { Link } from "react-router-dom";

interface IBtn {
  text: string;
  background?: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  color?: string;
  route?: string;
}

const Button = ({
  route,
  color,
  background = "#fff",
  text,
  type,
  disabled,
}: IBtn) => {
  const hoverRef = useRef(null);
  const buttonRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);

    gsap.fromTo(
      hoverRef.current,
      {
        scaleY: 0,
        scale: 0.9,
        borderTopLeftRadius: "20vw",
        borderTopRightRadius: "20vw",
        transformOrigin: "50% bottom",
      },
      {
        scaleY: 1,
        scale: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        duration: 0.4,
        ease: "power2.out",
      },
    );

    gsap.to(buttonRef.current, {
      scale: 0.5,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.1,
          ease: "power2.out",
        });
      },
    });
  };

  const handleMouseLeave = () => {
    setIsActive(false);

    gsap.to(hoverRef.current, {
      scaleY: 0,
      scale: 0.9,
      borderTopLeftRadius: "20vw",
      borderTopRightRadius: "20vw",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return route ? (
    <Link
      to={route}
      className={`link ${isActive ? "active" : ""}`}
      style={{ background: background, color: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
    >
      {text}
      <div className="link__hover" ref={hoverRef} />
    </Link>
  ) : (
    <button
      type={type}
      className={`link ${isActive ? "active" : ""}`}
      style={{ background: background, color: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
    >
      {text}
      <div className="link__hover" ref={hoverRef} />
    </button>
  );
};

export default Button;
