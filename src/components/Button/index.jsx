import style from "./styles.module.scss";

export const Button = ({ label }) => {
  return (
    <button className={`${style.container} container`}>
      <span>{label}</span>
    </button>
  );
};
