import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.scss";
import { useEffect, useState } from "react";

const BACKGROUND_OFFSET = 120;

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hideBurger, setHideBurger] = useState(false);
  const [close, setClose] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > BACKGROUND_OFFSET);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${style.navigationWrapper} ${
        isVisible && style.whiteBackground
      }`}
    >
      <div className="container">
        <div className={`${style.linkWrapper} ${showNavbar && style.active} `}>
          <div className={style.logo}>
            <Link to="/" className={style.logoLink}>
              {" "}
              <span>GoFit</span>
            </Link>
          </div>
          <div
            className={`${style.children} ${style.childrenContent} ${
              showNavbar && style.active
            } d-lg-flex d-none`}
          >
            <Link to="/">
              <div className={style.navLinks}>Home</div>
            </Link>
            <Link to="/exercises">
              <div className={style.navLinks}>Exercises</div>
            </Link>
            <Link to="/contact-us">
              <div className={style.navLinks}>Contact Us</div>
            </Link>
            <div className="d-flex align-items-center d-lg-none">
              <div className={style.phone}>
                <img src="../../assets/telephone.svg" />
              </div>
              <span className={style.phoneNumber}>+355 67 210 0012</span>
            </div>
          </div>
          <div
            className={`${style.childrenPhone} d-lg-flex align-items-center d-none`}
          >
            <div className={style.phone}>
              <img src="../../assets/telephone.svg" />
            </div>
            <span className={style.phoneNumber}>+355 67 210 0012</span>
          </div>

          <div
            className={`${style.toggleWrapper} d-block d-lg-none`}
            onClick={() => setShowNavbar((prev) => !prev)}
          >
            {showNavbar ? (
              <div className={style.closeIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </div>
            ) : (
              <div className={style.hamburger}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
