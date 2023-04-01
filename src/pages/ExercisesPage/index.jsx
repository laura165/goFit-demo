import { useState, useEffect } from "react";
import { instance } from "../../services/http-client";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";

export const ExercisesPage = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [muscle, setMuscle] = useState(null);

  const BASE_URL = `https://api.api-ninjas.com/v1/exercises?muscle`;
  const images = [
    "/assets/climbing-min-min.jpg",
    "/assets/min-img-5-min.jpg",
    "/assets/min-pic-2.jpg",
    "/assets/min-img-6-min.jpg",
    "/assets/min-img-4-min.jpg",
    "/assets/medium-min-min.jpg",
    "/assets/min-img-7-min.jpg",
    "/assets/min-img-5-min.jpg",
    "/assets/min-img-6-min.jpg",
    "/assets/min-img-8-min.jpg",
    "/assets/min-img-7-min.jpg",
  ];

  useEffect(() => {
    instance
      .get(BASE_URL, {})
      .then((response) => {
        setData(
          response.data.map((item) => ({
            ...item,
            level: item.difficulty === "beginner" ? 1 : 2,
          }))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const getMuscleImage = (dataItem) => {
    switch (dataItem.muscle) {
      case "biceps":
        return "/assets/biceps.svg";
      case "abdominals":
        return "/assets/abdominals.svg";
      case "forearms":
        return "/assets/forearms.svg";
      case "quadriceps":
        return "/assets/lower_back.svg";
      case "shoulders":
        return "/assets/shoulders.svg";
      default:
        return "/assets/biceps.svg";
    }
  };

  return (
    <div className={style.exersisesWrapper}>
      <div className={`${style.imageWrapper} position-relative`}>
        <img className="w-100" src="../../assets/lifting-min-min.jpg" />
        <div className={style.bg_Opacity}></div>
      </div>
      <div className={`${style.contentWrapper} container`}>
        <div className="row">
          {data.map((dataItem, index) => (
            <div
              className={`${style.col_margin} col-lg-4 col-md-6 col-12 mb-5`}
              key={index}
            >
              <div
                className={style.exersisesWrapperCard}
                onClick={() => setSelectedData(dataItem)}
              >
                <div className={style.name}>
                  <span>{dataItem.name}</span>
                </div>
                <div className={style.aspect_Ratio}>
                  <img className="w-100" src={images[index % images.length]} />
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3">
                  <div className="d-flex align-items-center ">
                    <div className={style.icon}>
                      <img className="w-100" src={getMuscleImage(dataItem)} />
                    </div>
                    <div className={style.icon}>
                      {dataItem.equipment && (
                        <img
                          className="w-100"
                          src="/assets/dumbbell-solid.svg"
                        />
                      )}
                    </div>
                  </div>

                  <div className={style.difficultyLevel}>
                    {dataItem.level === 1 ? (
                      <div className={style.beginner}></div>
                    ) : (
                      <div className={style.intermediate}>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {selectedData && (
            <div className={`${style.modal} modal fade show d-block`}>
              <div
                className={`${style.modal_dialog} modal-dialog modal-dialog-centered`}
              >
                <div className={`${style.modal_Content} modal-content`}>
                  <div className={`${style.modal_header} modal-header`}>
                    <div className={style.selectedName}>
                      {selectedData.name}
                    </div>
                    <button
                      type="button"
                      className={`${style.closeModal} close`}
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setSelectedData(null)}
                    >
                      <img
                        className={`${style.close_Sign} w-100`}
                        src="/assets/close-modal.svg"
                      />
                    </button>
                  </div>
                  <div className={`${style.modal_Body} modal-body`}>
                    <span className={style.instructions}>
                      {selectedData.instructions}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
