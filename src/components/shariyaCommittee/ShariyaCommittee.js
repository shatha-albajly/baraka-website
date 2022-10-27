import React from "react";
import "./shariyaCommittee.css";
import { useTranslation } from "react-i18next";
import Img1 from "./1.png";
import Img2 from "./2.png";
import Img3 from "./3.png";
import Img4 from "./4.png";
import Img5 from "./5.png";
import Img6 from "./6.png";

const ShariyaCommittee = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="committee">
      <div className="container-80 mx-auto d-flex flex-column  justify-content-center align-items-center">
        <h2>
          <span>{t("committee.title_1")}</span>
          <span>{t("committee.title_2")}</span>
        </h2>
        <p className="normal-paragraph container-60 text-center">
          {t("committee.paragraph")}
        </p>
        <div className="row  mx-auto committee-cards  justify-content-between  align-items-center">
          <div className=" col-md-3 col-sm-5 p-2 img-card my-2 shadow-card d-flex flex-column justify-content-center align-items-center  ">
            <img src={Img1} className="mw-100" />
          </div>
          <div className=" col-md-3 col-sm-5 p-2 my-2 img-card shadow-card d-flex flex-column justify-content-center align-items-center  ">
            <img src={Img2} className="mw-100" />
          </div>
          <div className=" col-md-3 col-sm-5 p-2 my-2 img-card shadow-card d-flex flex-column justify-content-center align-items-center  ">
            <img src={Img3} className="mw-100" />
          </div>
          <div className=" col-md-3 col-sm-5 p-2 my-2 img-card shadow-card d-flex flex-column justify-content-center align-items-center  ">
            <img src={Img4} className="mw-100" />
          </div>
          <div className=" col-md-3 col-sm-5 p-2 my-2 img-card shadow-card d-flex flex-column justify-content-center align-items-center  ">
            <img src={Img5} className="mw-100" />
          </div>
          <div className=" col-md-3 col-sm-5 p-2 my-2 img-card shadow-card d-flex flex-column justify-content-center align-items-center  ">
            <img src={Img6} className="mw-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShariyaCommittee;
