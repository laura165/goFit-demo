import style from "./styles.module.scss";

export const Button = ({ label }) => {
  return (
    <button className={`${style.button_container} container`}>
      <span>{label}</span>
    </button>
  );
};
