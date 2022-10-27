import React from "react";
import "./mission.css";
import { useTranslation } from "react-i18next";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import MissionImg from "./mission.png";
const Mission = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section mx-auto py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-0 mb-md-4 order-md-2  text-start col-md-6    ">
          <h2 className="">
            <span>{t("mission.title_1")}</span>
            <span>{t("mission.title_2")}</span>
          </h2>
          <p className="small-size-text">{t("mission.paragraph")}</p>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-1 col-md-6  ">
          <img src={Shape1} className="star" />
          <img src={Shape2} className="dots" />
          <div className="image-center">
            <img src={MissionImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
