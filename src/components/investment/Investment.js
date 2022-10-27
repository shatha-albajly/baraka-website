import React from "react";
import "./investment.css";
import { useTranslation } from "react-i18next";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import InvestmentImg from "./investment.png";
import { StatusUp } from "iconsax-react";

const Investment = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section mx-auto py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-0 mb-md-4 order-md-2  text-start col-md-6    ">
          <h2>
            <span>{t("investment.title_1")}</span>
            <span>{t("investment.title_2")}</span>
          </h2>
          <div className=" orange-background-icon ">
            <StatusUp size="38" color="#fff" variant="Bulk" />
          </div>
          <p class="paragraph-text"> {t("investment.paragraph_1")} </p>
          <p class="small-size-text"> {t("investment.paragraph_2")} </p>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-1 col-md-6  ">
          <img src={Shape1} className="star" />
          <img src={Shape2} className="dots" />
          <div className="image-center">
            <img src={InvestmentImg} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Investment;
