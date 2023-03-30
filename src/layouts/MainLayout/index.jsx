import { Navigation } from "../../components";
import { Footer } from "../../components/Footer";

import style from "./styles.module.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className="">
      <div className={style.navigationWrapper}>
        <Navigation />
      </div>

      <div className={`${style.contentWrapper} `}>{children}</div>

      <div>
        <div className="container">
          <div>Like To Work With Us ?</div>
        </div>
        <div className={style.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
