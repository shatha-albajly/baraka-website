import React from "react";
import "./tokenomics.css";
import { useTranslation } from "react-i18next";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import TokenomicsImg from "./TOKENOMICS.png";

const Tokenomics = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="tokenomic"
      className="tokenomics section mx-auto  orange-background py-5 two-sections"
    >
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-0 mb-md-4 order-md-2  text-start col-md-6    ">
          <h2 className="">
            <span>{t("tokenomics.title_1")}</span>
            <span>{t("tokenomics.title_2")}</span>
          </h2>
          <p className="nomral-paragraph">{t("tokenomics.paragraph")}</p>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-1 col-md-6  ">
          <img src={Shape1} className="star" />
          <img src={Shape2} className="dots" />
          <div className="image-center">
            <img src={TokenomicsImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
