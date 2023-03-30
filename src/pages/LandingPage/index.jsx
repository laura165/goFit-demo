import { Button } from "../../components";
import styles from "./styles.module.scss";

export const LandingPage = () => {
  return (
    <div className={styles.landingConatiner}>
      <img className="w-100" src="../../assets/fitness.jpg" />
      <div className="container">
        <span>Solutions for Moving Better And Feeling Fit!</span>
        <Button label="Get Started" />
      </div>
    </div>
  );
};
