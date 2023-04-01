import style from "./style.module.scss";

export const CardsComponent = ({ header, text, price, image }) => {
  return (
    <div className={`${style.cardsWrapper} col-lg-4 col-md-4 col-12`}>
      <div className={`${style.imageWrapper} position-relative`}>
        <div>
          <img className="w-100" src={image} />
        </div>
        <div className={style.bg_Opacity}></div>
        <div className={style.content}>
          <div>
            <span className={style.textHeader}>{header}</span>
          </div>
          <span className={style.text}>{text}</span>
          <div className={style.priceTag}>
            <span>{price}* M</span>
          </div>
        </div>
      </div>
    </div>
  );
};
