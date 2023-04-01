import { Link } from "react-router-dom";
import { Button } from "../../components";
import { CardsComponent } from "../../components/Cards";
import { ContactPage } from "../ContactPage";
import style from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TEXT_LENGTH = 280;

export const LandingPage = () => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div className={style.text}>
        {isReadMore ? text.slice(0, TEXT_LENGTH) : text}
        <span onClick={toggleReadMore}>{isReadMore && "..."}</span>
        <div onClick={toggleReadMore} className={style.read_Hide}>
          {isReadMore ? "read more" : "show less"}
        </div>
      </div>
    );
  };

  return (
    <div id="landingPage">
      <div className={`${style.landingConatiner} position-relative`}>
        <div className={`${style.landingImage} position-relative`}>
          <img className="w-100" src="../../assets/min-img-3-min.jpg" />
          <div className={`${style.bg_Opacity}`}></div>
        </div>

        <div className={`${style.titleContainer} `}>
          <div className="row">
            <div className="col-lg-5 col-md-8">
              <div className={style.title}>
                <span>Solutions For Moving Better And Feeling Fit!</span>
              </div>
              <div className="col-lg-5 col-md-5">
                <Link to="/exercises">
                  <Button label="Get Started" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* exersise boxes */}
      <div className={style.exersiseBoxes}>
        <div className="container">
          <div className={`${style.rowPadding} row`}>
            <CardsComponent
              header="Body Bulding With Classic"
              text="Trained Achieve Your Goals"
              price="$60"
              image="../../assets/basic.jpg"
            />
            <CardsComponent
              header="Body Bulding With Standart"
              text="Trained Under Best Trainers"
              price="$120"
              image="../../assets/medium-min-min.jpg"
            />
            <CardsComponent
              header="Body Bulding With Premium"
              text="Trained Day And Night"
              price="$200"
              image="../../assets/pro.jpg"
            />
          </div>
        </div>
      </div>

      <div className={`${style.containerWrapper} container`}>
        <div className="row">
          <div className="col-lg-5 ">
            <div className="d-flex justify-content-center flex-column h-100">
              <div className={style.smallHeader}>
                <span>About Us</span>
              </div>
              <p className={style.header}>Welcome to GoFit</p>
              <div className={style.headerUnderline}></div>
              <div className={style.short_Desc}>
                <span>
                  From the moment you walk through the door you know GoFit base
                  is a unique place
                </span>
              </div>
              <div className={style.desc}>
                <span>
                  <ReadMore>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </ReadMore>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3 justify-content-center d-none d-lg-flex">
            <div className="d-flex  align-items-center">
              <img
                className={`${style.first_image} w-100`}
                src="/assets/min-img-6-min.jpg"
              />
            </div>
          </div>
          <div className="col-lg-3  align-items-center justify-content-center d-none d-lg-flex">
            <div className="d-flex flex-column align-items-center">
              <div className="pb-5">
                <img
                  className={`${style.second_image} w-100`}
                  src="/assets/lifting-min-min.jpg"
                />
              </div>
              <div>
                <img
                  className={`${style.second_image} w-100`}
                  src="/assets/min-img-5-min.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* component for contact us section */}

      <ContactPage />
    </div>
  );
};
